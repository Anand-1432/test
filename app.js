const express = require('express');
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb+srv://anand:anand1432@cluster0.q2rn7.mongodb.net/sptrade?retryWrites=true&w=majority").then(()=>{
    console.log("connection established....!");
}).catch((error)=>{
    console.log(error);
})

app.get("/",(req,res)=>{
    res.send("hellow from other side");
})

app.listen(5000,()=>{
    console.log("listening at port 5000");
})