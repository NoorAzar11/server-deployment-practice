'use strict';

const express = require('express');

const app=express();


const notFoundHandler=require('./handlers/404');
const errorHandeler=require('./handlers/500');



function start(port){
    app.listen(port,()=>
        console.log(`Hello from the Other side : ${port}`));
    
}

app.get('/',(req,res)=>{
    res.send('Welcome To Home Page')
});

app.post('/badreq',(req,res)=>{
    let number=12;
    number.forEach((x)=>console.log(x));
    res.send("bad requset try again")
});

app.get('/data',(req,res)=>{
    res.json({
        id:541,
        name:"noor azar",
        email:"noorazar@yahoo.com",
    });
});

app.use('*',notFoundHandler);
app.use(errorHandeler);

module.exports={
    app:app,
    start,
};