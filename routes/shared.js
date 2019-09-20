const router = require('express').Router();

const shareCtrl = require('../controllers/shared');

// @route     GET api/shared
// @desc      Gets all collections that were shared with this user
// @access    Private
router.get('/shared', shareCtrl.getAll);

// @route     GET api/shared/:id
// @desc      gets a single collection that was shared with this user
// @access    Public?
router.get('/shared/:id', shareCtrl.getCollection);

// @route     POST api/shared
// @desc      adds a collection to this users shared to list
// @access    Private
router.post('/shared', shareCtrl.addToShared);

// @route     DELETE api/shared/:id
// @desc      deletes a collection from the users share list
// @access    Private
router.delete('/shared/:id', shareCtrl.deleteShared);

module.exports = router;
