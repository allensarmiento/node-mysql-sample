const express = require('express');
const Product = require('../../models/product');

const router = express.Router();

router.get('/admin/add-product', (req, res) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        editing: false,
    });
});

router.get('/admin/products', (req, res) => {
    Product.fetchAll()
        .then((products) => {
            res.render('admin/products', {
                products: products,
                pageTitle: 'Admin Products',
                path: '/admin/products',
            });
        });
});

module.exports = router;
