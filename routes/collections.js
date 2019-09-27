const router = require('express').Router();
const collectionCtrl = require('../controllers/collections');
const { check } = require('express-validator');

// @route     GET api/collections
// @desc      get all collections
// @access    Private
router.get('/', collectionCtrl.getAllCollections);

// @route     GET api/collections/:id
// @desc      get one collection
// @access    Private
router.get('/:id', collectionCtrl.getOneCollection);

// @route     POST api/collections
// @desc      add a collection
// @access    Private
router.post(
  '/',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty()
  ],
  collectionCtrl.addCollection
);

// @route     PUT api/collections/:id
// @desc      update a collection by id
// @access    Private
router.put(
  '/:id',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty()
  ],
  collectionCtrl.updateCollection
);

// @route     DELETE api/collections/:id
// @desc      delete a collection by id
// @access    Private
router.delete('/:id', collectionCtrl.deleteCollection);

module.exports = router;
