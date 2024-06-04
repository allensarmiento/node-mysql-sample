const pool = require('../database');

class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return pool.execute(
      'INSERT INTO Products (title, price, imageUrl, description) VALUES (?, ?, ?, ?)',
      [this.title, this.price, this.imageUrl, this.description]
    );
  }

  static fetchAll() {
    return pool.execute('SELECT * FROM Products');
  }

  static findById(id) {
    return pool.execute('SELECT * FROM products WHERE Products.id = ?', [id]);
  }
};

module.exports = Product;
