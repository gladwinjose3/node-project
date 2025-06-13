
const mongoose = require('mongoose');
const userscheme = new mongoose.Schema({
    name:String,
    email:String,
    password:String,

})
const User = mongoose.model("user",userscheme);

module.exports=User;

 
 