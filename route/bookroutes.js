const express=require("express")
const router=express.Router()
const multer=require("multer")
const path=require("path")
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(__dirname,"../public/uploads"))
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname))
    }
})
const upload=multer({storage:storage})
const Book=require("../models/bookmodel")



router.get("/" ,async(req,res)=>{
    const books=await Book.find()
    res.render("home",{books})
})
router.get("/add",(req,res)=>{
    res.render("addbook")
})

router.get("/details/:id",async(req,res)=>{
    const book=await Book.findById(req.params.id)
    res.render("details",{book})
})
router.post("/add",upload.single("image"),async(req,res)=>{
    const{ title, author, category, year, rating,price, description }=req.body
    let image = ""

    if (req.file) {
    image = req.file.filename
}
    const newBook= new Book({
        title,
        author,
        category,
        year,
        rating,
        price,
        description,
        image


    })
    await newBook.save()
    res.redirect("/books")
})




module.exports=router