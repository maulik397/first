const { log } = require('console');
let mongoose=require('mongoose');
let connectDB=async()=>{
    await mongoose.connect('mongodb+srv://hopebetter444:TcLxgIcg8Vjm2dGb@cluster0.xnrki6w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log('Connected to db')
}
module.exports=connectDB;