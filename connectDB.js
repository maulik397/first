const { log } = require('console');
let mongoose=require('mongoose');
let connectDB=async()=>{
    await mongoose.connect();
    console.log('Connected to db')
}
module.exports=connectDB;
