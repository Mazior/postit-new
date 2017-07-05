const Group = require('../models').Group;
const groupMember = require('../models').groupMember;
const Message= require('../models').Message;
const user = require('../models').user;

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const saltRounds = 7;
const salt = bcrypt.genSaltSync(saltRounds);

module.exports = {
  //create new group
  createGroup: (req, res) => {
    // res.send(req.decoded); --JSON that contains details of the token owner.
  //  const userId = req.decoded.data.id;
    const groupData = {
      groupName: req.body.groupName,
      userId: req.decoded.data.id,
    };
    if (!req.body.groupName) {
      res.status(400).send({ success: false, message: 'Group name is required.' });
    } else {
      Group.findOne({
        where: {
          groupName: req.body.groupName
        },
      })
      .then((group) => {
        if (group) {
          res.status(400).send({ success: false, message: 'Group already exists' });
        } else {
          Group.create(groupData)
          .then(group => res.status(201).send({
            success: true,
            message: 'Group was successfully created',
            groupName: group.groupName,
            groupOwner: group.userId
          }))
          .catch(error => res.status(400).send(error));
        }
      });
    }
  },

  // Method to add user to a group
  addUserToGroup: (req, res) => {
    if (!req.body.username) {
      res.status(400).send({ status: false, message: 'Username is required.' });
    } else {
      user.findOne({
        where: {
          username: req.body.username
        },
      })
      .then((user) => {
        if (user) {
          groupMember.findOne({
            where: {
              userId: user.id
            },
          })
          .then((member) => {
            if (member) {
              res.status(400).send({ success: false, message: 'User has already been added to group' });
            } else {
              const details = {
                groupId: req.params.groupId,
                userId: user.id
              };
              groupMember.create(details)
              .then(groupMember => res.status(201).send({
                success: true,
                message: 'User successfully added to group',
              }))
              .catch(error => res.status(400).send(error));
            }
          });
        } else {
          res.status(404).send({ success: false, message: 'User does not exist' });
        }
      });
    }
  },

  // Method to post message to a group
  postMessageToGroup: (req, res) => {
    if (!req.body.Message) {
      res.send({ status: false, message: 'Message is required.' });
    } else {
      //const userId = req.decoded.data.id;
      const messageDetail = {
        body: req.body.Message,
        groupId: req.params.groupId,
        userId: req.decoded.data.id,
      };
      Message.create(messageDetail)
      .then(message => res.status(201).send({
        success: true,
        message: 'Message was successfully sent',
        timeSent: message.createdAt,
        messageBody: message.body
      }))
      .catch(error => res.status(400).send(error));
    }
  },

  // Method to get messages posted to a group
  getGroupMessages: (req, res) => {
    if (req.params.groupId) {
      Message.findAll({
        where: {
          groupId: req.params.groupId
        },
      })
      .then((message) => {
        if (message) {
          res.status(200).send({ message });
        } else if (JSON.stringify(message) === '{}') {
          res.status(404).send({ message: 'No message was found for the specified group' });
        }
      });
    }
  }
};
