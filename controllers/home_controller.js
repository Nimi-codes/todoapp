const Task=require('../models/task')
module.exports.home=function(req,res){
    Task.find({},function(err,tasks){
        if(err){
            console.log('There is an error in fetching data',err);
            return;
        }
        return res.render('home',{
            title:'TODO App',
            task_list:tasks
        })
    })
    
};