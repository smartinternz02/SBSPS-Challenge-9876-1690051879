const express = require('express');
const bodyParser = require('body-parser');
//const mongoose = require('mongoose');

const app = express();

app.set('view engine','ejs')

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname + "/public"))
app.use(express.static(__dirname + "/public"))

PORT = 3000

app.get("/",function(req,res){
    res.render('homepage')
    console.log("Homepage")
})

app.get("/defectdetection",function(req,res){
    res.render("defectdetection")
    console.log("defectdetection")
})

app.get("/aircraft",function(req,res){
    res.render("aircraft")
    console.log("aircraft")
})

app.get("/aedd",function(req,res){
    res.render("aedd")
    console.log("aedd")
})

app.listen(PORT,function(){
    console.log("Server running at port "+PORT)
})
