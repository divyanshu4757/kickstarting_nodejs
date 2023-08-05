const express = require('express');
const path  = require('path');


const router = express.Router();

router.get('/',(req,res,next)=>{
    console.log('inside  another lemon middleware');
    res.sendFile(path.join(__dirname,'../','views','shop.html'))
})


router.get('/contact',(req,res,next)=>{
   
    res.sendFile(path.join(__dirname,'../','views','contact.html'))
})




router.get('/success',(req,res,next)=>{
   
    res.send('form submitted successfully');
})



module.exports = router