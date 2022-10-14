const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("hellow from other side");
})

app.listen(5000,()=>{
    console.log("listening at port 5000");
})