const express = require('express');
const Product = require('../models/product');

const router = express.Router();

router.get('/products', (req, res, next) => {
    Product.fetchAll()
        .then((products) => {
            res.render('product-list', {
                products: products,
                pageTitle: 'All Products',
                path: '/products',
            });
        })
        .catch(err => console.log(err));
});

router.get('/products/:productId', (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId)
        .then((product) => {
            res.render('product-detail', {
                product: product,
                pageTitle: product.title,
                path: '/products',
            });
        })
        .catch(err => console.log(err));
});

module.exports = router;
