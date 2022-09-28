const mongoose = require('mongoose');


const AdminSchema = mongoose.Schema({
    
    EmailId: String,
    Password: String
});

module.exports = mongoose.model('Admin',AdminSchema); 