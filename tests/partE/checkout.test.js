const { CheckoutService } = require('../../src/PartE/checkout');

test('successful checkout charges gateway and returns true', () => {
    const mockCart = {
        total: jest.fn().mockReturnValue(100),
        validateItems: jest.fn().mockReturnValue(true)
    };

    const mockGateway = {
        charge: jest.fn().mockReturnValue(true)
    };

    const checkout = new CheckoutService(mockGateway);
    const result = checkout.process(mockCart, 'valid_token');

    expect(result).toBe(true);
    expect(mockGateway.charge).toHaveBeenCalledWith(100, 'valid_token');
});

test('failed payment throws an error', () => {
    const mockCart = {
        total: jest.fn().mockReturnValue(100),
        validateItems: jest.fn().mockReturnValue(true)
    };

    const mockGateway = {
        charge: jest.fn().mockReturnValue(false)
    };

    const checkout = new CheckoutService(mockGateway);

    expect(() => checkout.process(mockCart, 'invalid_token')).toThrow('Payment failed');
});