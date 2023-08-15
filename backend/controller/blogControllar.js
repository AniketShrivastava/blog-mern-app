const Blog = require("../model/blog_model.js");
const bcrypt = require("bcrypt");

const blogControllar = async (req,res)=>{
    console.log(req.body)
  const {title,category,description}= req.body;
const result = new Blog({title,category,description});
const data = await result.save()
if(data != null ){
    res.json({message:"add blog", success:true});
}
else{
    res.json({message:"error",success:false});
}
}

module.exports = {blogControllar}

