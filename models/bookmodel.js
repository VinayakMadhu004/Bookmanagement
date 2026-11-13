const express=require("express")
const mongoose=require("mongoose")
const bookSchema=new mongoose.Schema({
    title:String,
    author:String,
    category:String,
    year:Number,
    rating:Number,
    price:Number,
    description:String,
    image:String
})
const Book=mongoose.model("book",bookSchema)
module.exports=Book
