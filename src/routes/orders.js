const express = require('express');

const router = express.Router();

router.get('/orders', (req, res) => {
    res.render('orders', {
        path: '/orders',
        pageTitle: 'Your Orders',
    });
});

module.exports = router;
