const {mongoose} = require('../db/connection.js');
const blogSchema = mongoose.Schema({
    "title":String,
    'category':String,
    "description": String,
    "image":String
});

const Blog = mongoose.model("blog",blogSchema);
module.exports = Blog ;