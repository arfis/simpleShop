var mongoose = require('mongoose')

const ProductSchema  = new mongoose.Schema({
    name: String,
    picture: String,
    text: String
})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product;
