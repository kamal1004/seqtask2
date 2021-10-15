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

function list(req,res){
  models.Users.findAll().then(result =>{
    res.status(201).json(result);
  }).catch(error =>{
    res.status(500).json({
      message:"errored"
    })
  });
}

function update(req,res){
  const id = req.params.id;
  const updatedUsers={
    Name:req.body.Name,
    age:req.body.age,
    email:req.body.email,
    number:req.body.number

  }
  const userId =1;

  models.Users.update(updatedUsers,{where:{id:id}}).then(result =>{
    res.status(200).json({
      message:"User Updated",
      post:updatedUsers
    });
  }).catch(error =>{
    res.status(200).json({
      message:"errored",
      error:error
    });
  })
}

function destroy(req,res){
  const id = req.params.id;

  models.Users.destroy({where:{id:id}}).then(result =>{
    res.status(200).json({
      message:"User Deleted"
    });
  }).catch(error =>{
    res.status(200).json({
      message:"errored",
      error:error
    });
  });

}

module.exports = {
  save :save,
  list: list,
  update:update,
  destroy:destroy
}
