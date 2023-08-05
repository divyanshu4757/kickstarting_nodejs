
const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded())



//use allows us to use new middleware function




app.use('/add-product',(req,res,next)=>{
    
    res.send(`<form action='/product' method="POST"> <input type="text" name="title" placeholder="name"><input type="number" name="size" placeholder="size"><button type="submit">Add Product</button> </form>`)

})


app.post('/product',(req,res,next)=>{

    console.log(req.body);
    res.redirect('/');
    


})

 app.use('/',(req,res,next)=>{
      console.log('inside  another lemon middleware');
      res.send('<h1>hello from express</h1>');
 })


 app.listen(7000);