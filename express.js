
const express = require('express');
const bodyParser = require('body-parser');


const adminRoutes = require('./routes/admin.js');

const shopRoutes = require('./routes/shop.js');
const app = express();


app.use(bodyParser.urlencoded())





//use allows us to use new middleware function



app.use('/admin',adminRoutes);// now all the paths starting with /admin will go to admin routes paths

app.use('/shop',shopRoutes);


app.use((req, res, next) =>{
    res.status(404).send(`<h1>page not found</h1>`)
})
 


 app.listen(7000);