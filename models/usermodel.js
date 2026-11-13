const express=require("express")
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        
    },
    password:{
        type:String,
        required:true
    }
    
})
const user=mongoose.model("user",userSchema)
module.exports=user