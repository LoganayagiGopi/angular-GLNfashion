const mongoose = require('mongoose');


const RegisterSchema = mongoose.Schema({
    Firstname: String,
    Lastname: String,
    EmailId: String,
    MobileNo: Number,
    Password: String,
    Cpassword:String,
    Address:String
});

module.exports = mongoose.model('Register',RegisterSchema);