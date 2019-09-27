const express = require('express');
const path =require("path");
const { runQuery, addEmail}=require("./app")
var bodyParser = require('body-parser');

const app=express();
app.use(express.static(path.join(__dirname,"public")));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/data", async (req, res) =>{
    const data = await runQuery();

    console.log(data);

    res.send({
        data:data[0].total
    });
});


app.post("/register",(req,res)=>{
    addEmail(req.body.email);

    console.log(req.body);
    res.send("POST request to the homepage");
});

app.listen(3001,()=>{
    console.log("listening on port 3001")
})