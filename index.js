var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var checkAuth = require('./auth')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/health',(req,res)=>{
    res.send({"msg":"CHILD OK"})
})

app.get('/s1', checkAuth,(req, res) => {
    res.send("DATA FROM S1")
})

app.post('/s1', checkAuth,(req, res) => {
    res.send("Transaction on  S1")
})

console.log("S1 - localhost:3001")

app.listen(3001);