const express = require('express');
const path =require("path");
const { runQuery, addEmail}=require("./app")

const app=express();
app.use(express.static(path.join(__dirname,"public")));

app.get("/data", async (req, res) =>{
    const data = await runQuery();

    console.log(data);

    res.send({
        data:data
    });
});

app.listen(3001,()=>{
    console.log("listening on port 3001")
})