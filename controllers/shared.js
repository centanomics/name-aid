const { Share, Collection, Term } = require('../models');
const log = require('debug')('api:sharedcontroller');

exports.getAll = async (req, res) => {
  try {
    const shareList = await Share.findAll({
      where: { userId: req.user.id },
      include: [Collection],
      attributes: { exclude: ['UserId'] }
    });
    res.json(shareList);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getCollection = async (req, res) => {};

exports.addToShared = async (req, res) => {
  const { collectionId } = req.params;
  try {
    //checks to see if collection exists in shared and if the userid of the auth user matches
    const collection = await Share.findAll({
      where: { collectionId, userId: req.user.id },
      attributes: { exclude: ['UserId'] }
    });
    console.log(collection);
    // if it doesn't create collection and return the collection
    if (!collection[0]) {
      await Share.create({
        userId: req.user.id,
        collectionId
      });
      const shared = await Collection.findByPk(collectionId);
      const shareTerms = await Term.findAll({ where: { collectionId } });
      res.status(200).json({ collection: shared, terms: shareTerms });
    }

    // else just get the collection and return
    const shared = await Collection.findByPk(collectionId);
    const shareTerms = await Term.findAll({ where: { collectionId } });
    res.status(200).json({ collection: shared, terms: shareTerms });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.deleteShared = async (req, res) => {
  const { id } = req.params;
  try {
    await Share.destroy({ where: { id } });
    res.json({ msg: 'Removed this collection from your shared collections' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
