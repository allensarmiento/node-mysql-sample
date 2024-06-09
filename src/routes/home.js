const express = require('express');
const Product = require('../models/product');

const router = express.Router();

router.get('/', (req, res) => {
    Product.fetchAll()
        .then(([rows, fieldData]) => {
            res.render('home', {
                products: rows,
                pageTitle: 'Shop',
                path: '/',
            });
        })
        .catch(err => console.log(err));
});

module.exports = router;
