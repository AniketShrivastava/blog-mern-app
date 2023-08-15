const Signup = require("../model/singup_model.js");
const bcrypt = require("bcrypt");

const ControllarSignup = async (req, res) => {
    //   console.log("controllar",req.body);
    try {
        const { name,email,password} = req.body;
        const user = await Signup.findOne({email:req.body.email});
        // const data = user.save();
        if (user != null) {
            res.json({ massage: "Email Already Exits", success: true });
           
        }
        else {
            bcrypt.hash(req.body.password,10,async (error, hash) => {
                if (error) {
                    console.log(error);
                }
                else {
                   const password = hash ;
                    const users = new Signup({ name,email,password });
                    const result = await users.save();
                    if (result != null) {
                        res.json({ massage: "signup successfully", success: true })
                    }
                    else {
                        res.json({ massage: "error", success: false });
                    }
                }
            })
        }
    } catch (error) {
        console.log(error);
    }


}
module.exports = { ControllarSignup }