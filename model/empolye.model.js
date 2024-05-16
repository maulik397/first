let mongoose=require('mongoose');

const EmployeSchema = new mongoose.Schema({
    name:{
        type: String, 
        unique:true,
        required:true
    },
    email:{
        type: String, 
       
        required:true
    },
    password:String

})
const EmployeModel = mongoose.model("employees",EmployeSchema);
module.exports= EmployeModel;