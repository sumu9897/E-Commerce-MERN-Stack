const  express = require("express");
const  app= express();

app.get("/",(req,res)=>{
    res.send('Welcome to the Server');
})
app.get("/products",(req,res)=>{
    res.send('product are returned');
})

app.listen(3001,()=>{
    console.log(`server is running at http://localhost:3001`);
});