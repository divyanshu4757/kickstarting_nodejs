
const express = require('express');
const bodyParser = require('body-parser');


const adminRoutes = require('./routes/admin.js');

const shopRoutes = require('./routes/shop.js');
const app = express();
const path = require('path');



app.use(bodyParser.urlencoded())

app.use(express.static(path.join(__dirname, 'public'  )))




//use allows us to use new middleware function



app.use('/admin',adminRoutes);// now all the paths starting with /admin will go to admin routes paths

app.use('/shop',shopRoutes);


app.use((req, res, next) =>{
    res.status(404).sendFile(path.join(__dirname ,'views','404.html'))
})
 


 app.listen(7000);

 


 










