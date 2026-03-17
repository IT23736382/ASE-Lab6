class CheckoutService {
    constructor(paymentGateway) {
        this.paymentGateway = paymentGateway;
    }

    process(cart, token) {
        cart.validateItems();
        const amount = cart.total();

        const success = this.paymentGateway.charge(amount, token);

        if (!success) {
            throw new Error('Payment failed');
        }

        return true;
    }
}

module.exports = { CheckoutService };