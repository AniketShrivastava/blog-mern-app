const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const { router }= require('./routes/routes');
dotenv.config();



app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())
app.use(router);


app.get("/",(req,res)=>{
    console.log("testing")
});

app.listen(process.env.PORT,()=>{
    console.log(`server is running in ${process.env.Server} is ${process.env.PORT} port`);
})

