const router = require('express').Router();
const auth = require('../middleware/auth');
const shareCtrl = require('../controllers/shared');

// @route     GET api/shared
// @desc      Gets all collections that were shared with this user
// @access    Private
router.get('/', auth, shareCtrl.getAll);

// @route     GET api/shared/:id
// @desc      gets a single collection that was shared with this user
// @access    Public?
router.get('/:id', shareCtrl.getCollection);

// @route     POST api/shared
// @desc      adds a collection to this users shared to list
// @access    Private
router.post('/', shareCtrl.addToShared);

// @route     POST api/shared/:collectionId
// @desc      checks to see if the user added the collection
// @access    Private -- MAYBE
router.post('/:collectionId', auth, shareCtrl.addToShared);

// @route     DELETE api/shared/:id
// @desc      deletes a collection from the users share list
// @access    Private
router.delete('/:id', shareCtrl.deleteShared);

module.exports = router;
