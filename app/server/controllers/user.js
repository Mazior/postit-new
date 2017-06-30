const user = require('../models').user;

module.exports ={
  create(req, res){
    return user
      .create({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,

      })
      .then(user => res.status(201).send(user))
      .catch(error =>res.status(400).send(error));
  },
};
