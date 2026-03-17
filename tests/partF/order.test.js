const { CheckoutService, Order } = require('../../src/PartF/checkout');

test('successful checkout saves an order to the repository', () => {
    const mockCart = {
        items: { 'A1': 2 },
        total: jest.fn().mockReturnValue(20),
        validateItems: jest.fn()
    };

    const mockGateway = {
        charge: jest.fn().mockReturnValue(true)
    };

    const mockRepo = {
        save: jest.fn()
    };

    const checkout = new CheckoutService(mockGateway, mockRepo);
    checkout.process(mockCart, 'token');

    expect(mockRepo.save).toHaveBeenCalledTimes(1);

    const savedOrder = mockRepo.save.mock.calls[0][0];
    expect(savedOrder).toBeInstanceOf(Order);
    expect(savedOrder.total).toBe(20);
    expect(savedOrder.items).toEqual({ 'A1': 2 });
});