const express=require("express")
const app=express()
const mongoose=require("mongoose")
const bookroutes=require("./route/bookroutes")
mongoose.connect("mongodb://localhost:27017/Bookmanagement")
.then(()=>{
    console.log("MongoDB Connected Succesfully!")
})
.catch((error)=>{
    console.log("Unexpected Error Occured")
})
app.set("view engine","hbs")
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use("/books",bookroutes)








app.listen(3000,()=>{
    console.log("Server is running on port 3000 Succesfully")
})