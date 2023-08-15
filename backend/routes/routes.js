const express = require("express");
const {ControllarSignup} = require('../controller/ControllarSignup.js');
const {ControllarLogin} = require('../controller/ControllarLogin.js');
const {blogControllar} = require('../controller/blogControllar.js');
const multer = require('multer');


const app = express();
const router = express.Router();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
    cb(null, Date.now()+file.originalname)
    
    }
  })
  
  const upload = multer({ storage: storage })

router.post("/signup", ControllarSignup);
router.post("/login", ControllarLogin);
router.post("/addblog",upload.single('blogImg'), blogControllar);


module.exports = {router} ;