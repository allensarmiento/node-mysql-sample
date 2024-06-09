const express = require('express');
const Product = require('../models/product');

const router = express.Router();

router.get('/products', (req, res, next) => {
    Product.fetchAll()
        .then(([rows, fieldData]) => {
            res.render('product-list', {
                products: rows,
                pageTitle: 'All Products',
                path: '/products',
            });
        })
        .catch(err => console.log(err));
});

router.get('/products/:productId', (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId)
        .then(([product]) => {
            res.render('product-detail', {
                product: product[0],
                pageTitle: product.title,
                path: '/products',
            });
        })
        .catch(err => console.log(err));
});

module.exports = router;
