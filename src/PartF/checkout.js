class Order {
    constructor(items, total) {
        this.items = items;
        this.total = total;
        this.timestamp = new Date();
    }
}

class CheckoutService {
    constructor(paymentGateway, orderRepo = null) {
        this.paymentGateway = paymentGateway;
        this.orderRepo = orderRepo;
    }

    process(cart, token) {
        cart.validateItems();
        const amount = cart.total();

        const success = this.paymentGateway.charge(amount, token);

        if (!success) {
            throw new Error('Payment failed');
        }

        if (this.orderRepo) {
            const order = new Order(cart.items, amount);
            this.orderRepo.save(order);
        }

        return true;
    }
}

module.exports = { CheckoutService, Order };