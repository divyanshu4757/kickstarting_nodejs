/*

const express = require('express')
const fs = require('fs');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');



const app = express()

app.use(bodyParser.urlencoded());
app.use(cookieParser());

app.use('/login',(req, res, next) =>{

   
    res.send(`<form action='/' method="POST"> 
    <input type="text" name="title" placeholder="Enter Your Name"><button type="submit">Register</button> </form>`)
    
})


app.post('/', (req, res) => {
    const userName = req.body.title;
    res.cookie('userName', userName);
    res.send(`<h1>Hello, ${userName}!</h1>`);
  });



/*
app.get('/',(req, res, next) =>{

    res.send(`<form action='/' method="POST"> 
    <input type="text" name="message" placeholder="Write anything"><button type="submit">send</button> </form>`)
    
})



app.post('/',(req, res, next) =>{

     fs.readFile('text.txt',(err, data) =>{
        const message = req.body.message;
        console.log(message);
        
        fs.appendFile('text.txt' ,`${message}\n`,(err)=>{
    
        })

        res.send(`<p>${data}<p><form action='/' method="POST"> 
        <input type="text" name="message" placeholder="Write anything"><button type="submit">send</button> </form>`)

     })


 
    
})


*/

const http=require('http');
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const fs=require('fs')
const data=[]

app.use(bodyParser.urlencoded({extended:false}))

app.use('/login',(req,res,next)=>{
    res.send('<form onsubmit="localStorage.setItem(`username`,document.getElementById(`username`).value)" action="/message" method="POST"><input type="text" id="username" name="username"></input><button type="submit">Login</button></form>')
})

app.get('/message',(req,res,next)=>{
    fs.readFile('message.txt',(err,data)=>{
    res.send(`<form onsubmit="document.getElementById('username').value=localStorage.getItem('username');" action="/message" method="POST"><h4>${data}</h4><input type="text" name="message" id="message"></input><input type ="hidden" name="username" id="username"></input><button type="submit">send</button></form>`)

    })
})

app.post('/message',(req,res,next)=>{

    const message = `${req.body.username}:${req.body.message}`

    fs.appendFile('message.txt',message,(err)=>{  
        res.redirect('/message')

    })

  
})




app.listen(9000);

