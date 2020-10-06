const Task=require('../models/task')
module.exports.createTask=function(req,res){

 Task.create(
     req.body
     ,function(err,newTask){
     if(err){
         console.log('There is an error in storing the database',err);
         return;
     }
    console.log(newTask);
    return res.redirect('back');
 })
}

