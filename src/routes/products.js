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

router.post('/products', (req, res, next) => {
    const {title, imageUrl, price, description} = req.body;
    const product = new Product(null, title, imageUrl, description, price);
    product.save()
        .then(() => {
            res.redirect('/');
        })
        .catch(err => console.log(err));
});

router.get('/products/:productId', (req, res, next) => {
    const {productId} = req.params;
    Product.findById(productId)
        .then((product) => {
            res.render('product-detail', {
                product: product,
                pageTitle: product.title,
                path: '/products',
            });
        })
        .catch(err => console.log(err));
});

router.get('/add-product', (req, res) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/add-product',
    });
});

module.exports = router;
