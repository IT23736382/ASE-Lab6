class DiscountEngine {

    calculateLineItemTotal(unitPrice, quantity) {
        const subtotal = unitPrice * quantity;

        if (quantity >= 10) {
            return subtotal * 0.90;
        }
        return subtotal;
    }

    calculateCartTotal(cartSubtotal) {
        if (cartSubtotal >= 1000) {
            return cartSubtotal * 0.95;
        }
        return cartSubtotal;
    }
}

module.exports = { DiscountEngine };