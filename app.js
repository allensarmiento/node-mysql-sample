const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Test');
});

app.listen(3000);
