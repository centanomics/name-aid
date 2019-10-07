const { Term } = require('../models');
const { validationResult } = require('express-validator');
const googleTTS = require('google-tts-api');
const transcribe = require('../utils/transcribe');
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
    // const key = 'aa25a0f2-55f1-47ed-bf80-dccca1199bab';
    // const resp = await axios.get(
    //   `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${name}?key=${key}`
    // );

    const ipa = await transcribe(name);

    const newTerm = await Term.create({
      name,
      origin,
      collectionId,
      ipa
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
    // const key = 'aa25a0f2-55f1-47ed-bf80-dccca1199bab';
    // const resp = await axios.get(
    //   `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${name}?key=${key}`
    // );

    const ipa = await transcribe(name);

    await Term.update(
      {
        name,
        origin,
        ipa
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

exports.getTTS = async (req, res) => {
  const { name } = req.body;
  try {
    const speechLink = await googleTTS(name, 'en', 1);
    res.json(speechLink);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
