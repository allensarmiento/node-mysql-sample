const Product = require('../models/product');

class ShopController {
    static getProducts(req, res, next) {
        Product.fetchAll()
        .then(([rows, fieldData]) => {
          res.send(rows);
        })
        .catch(err => console.log(err));
    }
}

module.exports = ShopController;
