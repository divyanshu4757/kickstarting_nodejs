const express = require('express');
const router = express.Router();

const path = require('path');

const productController = require('../controllers/products.js')



router.get('/add-product',productController.addProduct)


router.get('/product',(req,res,next)=>{

    //console.log(req.body);
    res.redirect('/shop');
    


})




module.exports = router