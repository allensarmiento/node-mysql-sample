const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const adminProductRoutes = require('./routes/admin/products');
const cartRoutes = require('./routes/cart');
const checkoutRoutes = require('./routes/checkout');
const homeRoutes = require('./routes/home');
const orderRoutes = require('./routes/orders');
const productRoutes = require('./routes/products');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminProductRoutes);
app.use(cartRoutes);
app.use(checkoutRoutes);
app.use(homeRoutes);
app.use(orderRoutes);
app.use(productRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found', path: '/404'});
});

app.listen(3000);
