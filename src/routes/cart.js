const express = require('express');
const Cart = require('../models/cart');
const Product = require('../models/product');

const router = express.Router();

router.get('/cart', (req, res) => {
    Cart.getCart(cart => {
        Product.fetchAll().then((products) => {
            const cartProducts = [];
            for (const product of products) {
                const cartProductData = cart.products.find(cartProduct => cartProduct.id === product.id)
                if (cartProductData) {
                    cartProducts.push({productData: product, qty: cartProductData.qty});
                }
            }

            res.render('cart', {
                path: '/cart',
                pageTitle: 'Your Cart',
                products: cartProducts,
            });
        });
    });
});

router.post('/cart', (req, res) => {
    const {productId} = req.body;
    Product.findById(productId).then((product) => {
        if (product) {
            Cart.addProduct(product.id, product.price);
        }
    });
    res.redirect('/cart');
});

router.delete('/cart', (req, res) => {
    const {productId} = req.body;
    Product.findById(productId).then((product) => {
        Cart.deleteProduct(productId, product.price);
        res.redirect('/cart');
    });
});

module.exports = router;
