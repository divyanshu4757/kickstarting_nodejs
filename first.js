

const express = require("express");


const app  = express();

app.use((req,res,next)=>{
               
    console.log('in the middle ware');
    next();//allows request to continue to next middleware

   
})


app.use((req,res,next)=>{
               
    console.log('in another middle ware');
    res.send('<h1>hello</h1>');
})


;

app.listen(9000);
