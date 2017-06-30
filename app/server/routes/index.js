const user = require('../controllers').user;

module.exports =(app)=>{
  app.get('/api ', (req, res)=> res.staus(200).send({
    message:'Wecome to Post It',
  }));
  app.post('/api/user', user.create);

};
