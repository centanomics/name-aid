const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const config = require('config');
const bcrypt = require('bcrypt');
const mailer = require('../utils/mailer');
const { User, Sequelize } = require('../models');
const { validationResult } = require('express-validator');

exports.getUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: req.user.id },
      attributes: { exclude: ['password'] }
    });
    res.json(user);
  } catch (err) {
    console.error('error:', err.message);
    res.status(500).send('Server Error');
  }
};

exports.loginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid Email' });
    }

    const isMatch = bcrypt.compareSync(password.toString(), user.password);

    console.log('login password', password);

    if (!isMatch) {
      console.log('test', isMatch);
      return res.status(400).json({ msg: 'Invalid Password' });
    }

    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      config.get('jwtSecret'),
      {
        expiresIn: 360000
      },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password, password2 } = req.body;

  try {
    let user = await User.findOne({ where: { email } });

    if (user) {
      res.status(400).json({ msg: 'User already exists' });
    }

    if (password !== password2) {
      res.status(400).json({ msg: 'Passwords do not match' });
    }

    if (password.length < 6) {
      res
        .status(400)
        .json({ msg: 'Password needs to be greated than 6 characters' });
    }

    user = await User.create({ name, email, password });

    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      config.get('jwtSecret'),
      {
        expiresIn: 36000
      },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      res.status(404).json({ msg: 'User not found' });
    }

    const buffer = crypto.randomBytes(20);
    const token = buffer.toString('hex');

    await user.update({
      reset_token: token,
      reset_expires: Date.now() + 86400000
    });

    const data = {
      to: user.email,
      from: 'name-aid@yourcode.app',
      template: 'forgot',
      subject: 'Request for a password reset.',
      ctx: {
        url: `http://localhost:3000/auth/reset_password?token=${token}`,
        name: user.name.split(' ')[0]
      }
    };

    try {
      await mailer.sendMail(data);
    } catch (err) {
      console.log(err.message);
      res.status(500).send('mail error');
    }

    res.json({
      message: 'Check your email'
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.resetPassword = async (req, res) => {
  const { token, password, password2 } = req.body;

  try {
    const user = await User.findOne({
      where: {
        reset_token: token,
        reset_expires: {
          [Sequelize.Op.gt]: Date.now()
        }
      }
    });

    if (!user) {
      res.status(404).send('Password reset token is invalid or has expired');
    }

    if (password !== password2) {
      res.status(422).json({ msg: 'Passwords do not match' });
    }

    console.log(password);

    // await user.update({
    //   password,
    //   reset_token: null,
    //   reset_expires: null
    // });

    user.password = password;
    user.reset_password = undefined;
    user.reset_expires = undefined;
    await user.save();

    const data = {
      to: user.email,
      from: 'name-aid@yourcode.app',
      template: 'reset',
      subject: 'Password reset confirmation',
      ctx: {
        name: user.name.split(' ')[0]
      }
    };

    try {
      await mailer.sendMail(data);
    } catch (err) {
      console.log(err.message);
      res.status(500).send('mail error');
    }

    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      config.get('jwtSecret'),
      {
        expiresIn: 360000
      },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );

    // res.json({
    //   msg: 'Password Reset'
    // });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
