const router = require('express').Router();

const termCtrl = require('../controllers/terms');

// @route     GET api/terms?collectionId
// @desc      get all terms by collection id
// @access    Private
router.get('/terms', termCtrl.getAllTerms);

// @route     GET api/terms/:id
// @desc      get one term by id
// @access    Private
router.get('/terms/:id', termCtrl.getOneTerm);

// @route     POST api/terms
// @desc      add a Term
// @access    Private
router.post('/terms', termCtrl.addTerm);

// @route     PUT api/terms/:id
// @desc      update a Term by id
// @access    Private
router.put('/terms/:id', termCtrl.updateTerm);

// @route     DELETE api/terms/:id
// @desc      delete a Term by id
// @access    Private
router.delete('/terms/:id', termCtrl.deleteTerm);

module.exports = router;
