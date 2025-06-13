var mongoose=require('mongoose');
function connectToDatabase(){
    mongoose.connect('mongodb+srv://gladwinjose3:gladwinjose3@cluster0.vwlqjwi.mongodb.net/form')
    .then(()=>{
        console.log('connected to Mongodb');    
    })
}
module.exports = connectToDatabase;