const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = '4040';

app.post('./login',(req,res)=>{
    const username = req.body.username;
    res.json({username});
})

app.listen(port,(req,res)=>{
    console.log(`listening on port number ${port}`);
})