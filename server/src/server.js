const  express = require("express");
const  morgan = require("morgan");
const  app= express();

app.use(morgan('dev'));
app.get("/test",(req,res)=>{
    res.status(200).send({
        message:'api is working fineee'
    });
});


app.post("/test",(req,res)=>{
    res.status(200).send({
        message:'Post: api is working fineee'
    });
});

app.put("/test",(req,res)=>{
    res.status(200).send({
        message:'Update: api is working fineee'
    });
});

app.delete("/test",(req,res)=>{
    res.status(200).send({
        message:'Delete: api is working fineee'
    });
});
// app.get("/products",(req,res)=>{
//     res.status(200).send({
//         message:'product are returned'
//     });
// });

app.listen(3001,()=>{
    console.log(`server is running at http://localhost:3001`);
});