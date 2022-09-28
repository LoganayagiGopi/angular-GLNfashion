const mongoose = require('mongoose');


const VendorSchema = mongoose.Schema({
    Shopname: String,
    Vendorname: String,
    EmailID: String,
    Mobileno: String,
    Pass: String,
    Cpass:String,
    Ad:String,
    Gst:String
});

module.exports = mongoose.model('Vendor',VendorSchema);
