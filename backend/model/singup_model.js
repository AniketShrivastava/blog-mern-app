const {mongoose} = require('../db/connection.js');
const signupSchema = mongoose.Schema({
    "name":String,
    'email':String,
    "password": String
});

const Signup = mongoose.model("signup",signupSchema);
module.exports = Signup ;