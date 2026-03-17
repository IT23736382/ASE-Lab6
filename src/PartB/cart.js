class Cart {
    constructor(catalog) {
        this.catalog = catalog;
        this.items = {}; 
    }
    addItem(sku, quantity) {
        if (!Number.isInteger(quantity) || quantity <= 0) {
            throw new Error('Quantity must be an integer > 0');
        }
        const product = this.catalog.find(sku);
        if (!product) {
            throw new Error('Product not in catalog');
        }
        if (this.items[sku]) {
            this.items[sku] += quantity;
        } else {
            this.items[sku] = quantity;
        }
    }
    removeItem(sku) {
        delete this.items[sku];
    }
    total() {
        let sum = 0;
        for (const sku in this.items) {
            const quantity = this.items[sku];
            const product = this.catalog.find(sku);
            sum += product.price * quantity;
        }
        return sum;
    }
}

module.exports = { Cart };