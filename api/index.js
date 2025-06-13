 const express=require("express");
const cors=require("cors");
const app=express();
app.use(cors());
const connectToDatabase=require('../mongodbconfig.js');
const User = require("../mongodbmodel/userscheme.js");
app.use(express.json());

app.get("/getuserdata/:id",(req,res)=>{
    console.log(req.params.id);
    res.send("Hello World");
});

app.post("/createdata",async(req,res)=>{
    const name =req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    const user=new User({
        name:name,
        email:email,
        password:password,
    });
   await user.save();
    res.send("data recieved");
})

connectToDatabase();

const port=3001;
app.listen(port,()=>{
    console.log("server running on port",{port})
        });


    
