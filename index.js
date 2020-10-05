const express=require('express');
const port=8000;
const app=express();
app.listen(port,function(err){
    if(err){
        console.log(`There is an error in running server:${err}`);
    }
    console.log(`Server is up and running on port:${port}`);
})