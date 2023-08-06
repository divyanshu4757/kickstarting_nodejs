const path = require('path');



exports.addProduct = (req,res,next)=>{
    
    res.sendFile(path.join(__dirname , '../' , 'views', 'add-product.html'))
 };
