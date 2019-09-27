const { Term } = require('../models');
const { validationResult } = require('express-validator');
const log = require('debug')('api:logging');

exports.getAllTerms = async (req, res) => {
  const { collectionId } = req.query;
  try {
    const terms = await Term.findAll({ where: { collectionId } });
    res.json(terms);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getOneTerm = async (req, res) => {
  const { id } = req.params;
  try {
    const term = await Term.findByPk(id);
    if (!term) {
      res.sendStatus(404);
      return;
    }
    res.json(term);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.addTerm = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // const { collectionId } = req.query;
  const { name, origin, collectionId } = req.body;
  log(collectionId, name, origin);
  try {
    const newTerm = await Term.create({
      name,
      origin,
      collectionId
    });
    res.json(newTerm);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.updateTerm = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, origin } = req.body;
  const { id } = req.params;
  try {
    await Term.update(
      {
        name,
        origin
      },
      {
        where: { id }
      }
    );
    const updatedTerm = await Term.findByPk(id);
    res.json(updatedTerm);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.deleteTerm = async (req, res) => {
  const { id } = req.params;
  try {
    await Term.destroy({ where: { id } });
    res.json({ msg: 'Contact Removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
