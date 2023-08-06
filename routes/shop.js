const express = require('express');
const path  = require('path');
const router = express.Router();
const shopContoller = require('../controllers/shops.js')

router.get('/',shopContoller.shop)


router.get('/contact',shopContoller.contact)




router.get('/success',shopContoller.success)



module.exports = router