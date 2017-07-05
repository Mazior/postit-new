const express = require('express');
const groupController = require('../controllers/groupController');
const tokenAuth = require('../middlewares/tokenAuth.js');

const router = express.Router();

router.route('/api/group').post(tokenAuth, groupController.createGroup);
router.route('/api/group/:groupId/user').post(tokenAuth, groupController.addUserToGroup);
router.route('/api/group/:groupId/Message').post(tokenAuth, groupController.postMessageToGroup);
router.route('/api/group/:groupId/Messages').get(tokenAuth, groupController.getGroupMessages);

module.exports = router;
