const models = require('../models');

function save(req,res){
  const user ={
    Name:req.body.Name,
    age:req.body.age,
    email:req.body.email,
    number:req.body.number
  }
  models.Users.create(user).then(result =>{
    res.status(201).json({
      message:"created",
      post:result
    });
  }).catch(error => {
    res.status(500).json({
      message:"failed",
      post:error
      });
  });
}

module.exports = {
  save :save
}
