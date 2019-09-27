const router = require('express').Router();
const { check } = require('express-validator');

const termCtrl = require('../controllers/terms');

// @route     GET api/terms?collectionId
// @desc      get all terms by collection id
// @access    Private
router.get('/', termCtrl.getAllTerms);

// @route     GET api/terms/:id
// @desc      get one term by id
// @access    Private
router.get('/:id', termCtrl.getOneTerm);

// @route     POST api/terms
// @desc      add a Term
// @access    Private
router.post(
  '/',
  [
    check('name', 'Please include a name')
      .not()
      .isEmpty(),
    check(
      'origin',
      "Please include an origin. If you're not sure, just put N/A"
    )
      .not()
      .isEmpty()
  ],
  termCtrl.addTerm
);

// @route     PUT api/terms/:id
// @desc      update a Term by id
// @access    Private
router.put(
  '/:id',
  [
    check('name', 'Please include a name')
      .not()
      .isEmpty(),
    check(
      'origin',
      "Please include an origin. If you're not sure, just put N/A"
    )
      .not()
      .isEmpty()
  ],
  termCtrl.updateTerm
);

// @route     DELETE api/terms/:id
// @desc      delete a Term by id
// @access    Private
router.delete('/:id', termCtrl.deleteTerm);

module.exports = router;
