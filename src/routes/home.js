const express = require('express');
const Product = require('../models/product');

const router = express.Router();

router.get('/', (req, res) => {
    Product.fetchAll().then((products) => {
        res.render('home', {
            products: products,
            pageTitle: 'Shop',
            path: '/',
        });
    })
    .catch(err => console.log(err));
});

module.exports = router;
