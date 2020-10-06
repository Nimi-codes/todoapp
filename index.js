const express=require('express');
const port=8000;
const db=require('./config/mongoose');
const Task=require('./models/task');
const app=express();
app.set('view engine','ejs');
app.set('views','./views');
app.use('/',require('./routes'));
app.use(express.urlencoded());
app.use(express.static('assets'));
app.listen(port,function(err){
    if(err){
        console.log(`There is an error in running server:${err}`);
    }
    console.log(`Server is up and running on port:${port}`);
})