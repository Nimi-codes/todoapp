const express=require('express');
const router=express.Router();
const taskController=require('../controllers/task_controller');
router.post("/create_task",taskController.createTask);

module.exports=router;