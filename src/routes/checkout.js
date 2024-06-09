const express = require('express');

const router = express.Router();

router.get('/checkout', (req, res) => {
    res.render('checkout', {
        path: '/checkout',
        pageTitle: 'Checkout',
    });
});

module.exports = router;
