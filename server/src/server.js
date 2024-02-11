const  express = require("express");
const  app= express();

app.get("/test",(req,res)=>{
    res.status(200).send({
        message:'api is working fine'
    });
});
app.get("/products",(req,res)=>{
    res.status(200).send({
        message:'product are returned'
    });
});

app.listen(3001,()=>{
    console.log(`server is running at http://localhost:3001`);
});