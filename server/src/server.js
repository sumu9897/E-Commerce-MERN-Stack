const  express = require("express");
const  morgan = require("morgan");
const  app= express();

app.use(morgan('dev'));

const isLoggedIn =(req, res,next) =>{

};
app.get("/test",(req,res)=>{
    res.status(200).send({
        message:'api is working fineee'
    });
});

app.get("/user",(req,res)=>{
    res.status(200).send({
        message:'User Profile'
    });
});



app.listen(3001,()=>{
    console.log(`server is running at http://localhost:3001`);
});