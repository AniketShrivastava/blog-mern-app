const Signup = require("../model/singup_model.js");
const bcrypt = require("bcrypt");

const ControllarLogin = async (req, res) => {
    try {
        const user = await Signup.findOne({ email: req.body.email })
        if (user != null) {
            bcrypt.compare(req.body.password, user.password, (error, data) => {
                if (error) {
                    res.json({ message: "error", success: false })

                }
                else {
                    if (data) {
                        res.json({ message: "login successfully", success: true })

                    }
                }
            })
        }
        else{
            res.json({ message: "error", success: false })
        }
    } catch (error) {
        console.log(error);
    }
}
module.exports = { ControllarLogin }