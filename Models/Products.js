const mongoose = require('mongoose');


const ProductsSchema = mongoose.Schema({
    image: String,
    name: String,
    description: String,
    category: String,
    price: Number
});

module.exports = mongoose.model('Products',ProductsSchema);