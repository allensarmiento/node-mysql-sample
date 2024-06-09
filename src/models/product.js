const db = require('../database');

class Product {
    constructor(id, title, imageUrl, description, price) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        return db.execute(
        'INSERT INTO Products (title, price, image_url, description) VALUES (?, ?, ?, ?)',
        [this.title, this.price, this.imageUrl, this.description]
        );
    }

    static fetchAll() {
        return db.execute('SELECT * FROM Products')
        .then(([rows, fields]) => {
            return rows;
        });
    }

    static findById(id) {
        return db.execute('SELECT * FROM Products WHERE Products.id = ?', [id])
        .then(([rows, fields]) => {
            if (rows.length) {
            return rows[0];
            }
            return null;
        });
    }
};

module.exports = Product;
