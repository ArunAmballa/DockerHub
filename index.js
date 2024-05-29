const express=require("express")
const dotenv=require("dotenv")

const app=express();
dotenv.config();

const PORT=process.env.PORT

app.get("/",(req,res)=>{
    res.json({message:"Welcome to Docker"})
})
app.listen(PORT,()=>{
    console.log(`Server is Listening on PORT ${PORT}`)
})

