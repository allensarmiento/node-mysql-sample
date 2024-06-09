const cart = {products: [], totalPrice: 0};

class Cart {
    static addProduct(id, productPrice) {
        const existingProduct = cart.products.find(product => product.id === id);

        // Add new product / increase quantity
        if (existingProduct) {
            existingProduct.qty += 1;
        } else {
            cart.products.push({id: id, qty: 1});
        }

        cart.totalPrice += Number(producePrice);
    }

    static getCart(callback) {
        callback(cart);
    }
}

module.exports = Cart;
