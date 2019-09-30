const { Collection } = require('../models');
const { validationResult } = require('express-validator');

exports.getAllCollections = async (req, res) => {
  try {
    const collections = await Collection.findAll({
      where: { userId: req.user.id }
    });
    res.json(collections);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getOneCollection = async (req, res) => {
  const { id } = req.params;
  try {
    const collection = await Collection.findByPk(id);
    if (!collection) {
      res.sendStatus(404);
      return;
    }
    res.json(collection);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.addCollection = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name } = req.body;
  try {
    const newCollection = await Collection.create({
      name,
      userId: req.user.id,
      favorite: 'false'
    });
    res.json({ newCollection });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.updateCollection = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name } = req.body;
  const { id } = req.params;
  try {
    await Collection.update(
      { name },
      {
        where: { id }
      }
    );
    const updatedCollection = await Collection.findByPk(id);
    res.json(updatedCollection);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.deleteCollection = async (req, res) => {
  const { id } = req.params;
  try {
    await Collection.destroy({ where: { id } });
    res.json({ msg: 'Contact Removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
