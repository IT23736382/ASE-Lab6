class Cart {
    constructor(catalog, inventory = null) {
        this.catalog = catalog;
        this.inventory = inventory;
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
        if (this.inventory) {
            const available = this.inventory.getAvailable(sku);
            const currentQuantityInCart = this.items[sku] || 0;

            if (currentQuantityInCart + quantity > available) {
                throw new Error('Insufficient inventory');
            }
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