let express=require('express');
const connectDB = require('./db/connectDB');
const cors = require('cors')
const Employe = require("./model/empolye.model")

const userRouter = require("./routes/user.routes.js") 

let app=express()
app.use(express.json())
app.use(cors())
connectDB()

app.post("/signup",async (req,res)=>{
    try{
        
    const  response = await Employe.create(req.body)
    console.log(response)
 }
catch(err)
{
    console.log(err.message);
}

})
app.use('/users',userRouter)
app.listen(8000,()=>{
    console.log('Listening port 8000');
})  