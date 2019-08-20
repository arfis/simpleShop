var Product = require('../models/product.model')

exports.getProducts = async function (query, page, limit) {

    try {
        var products = await Product.find(query)
        return products;
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users')
    }
}
