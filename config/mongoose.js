//require the library
const mongoose=require('mongoose');
//connect to database
mongoose.connect("mongodb://localhost/task_list_db");
//acquire the connection to check if it is successful
const db=mongoose.connection;
//Check if their is an error
db.on('error',console.error.bind(console,'Error connecting to DB'));
//if no error
db.once('open',function(){
    console.log('Successfully connected to the database');
})