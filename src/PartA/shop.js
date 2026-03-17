class Product {
    constructor(sku, name, price) {
        if (price < 0) {
            throw new Error('Price cannot be negative');
        }
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
}

class Catalog {
    constructor() {
        this.products = {};
    }

    add(product) {
        this.products[product.sku] = product;
    }

    find(sku) {
        return this.products[sku];
    }
}
module.exports = { Product, Catalog };