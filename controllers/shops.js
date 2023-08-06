
const path  = require('path');

exports.shop =(req,res,next)=>{
    console.log('inside  another lemon middleware');
    res.sendFile(path.join(__dirname,'../','views','shop.html'))
}

exports.contact = (req,res,next)=>{
   
    res.sendFile(path.join(__dirname,'../','views','contact.html'))
}


exports.success = (req,res,next)=>{
   
    res.send('form submitted successfully');
}