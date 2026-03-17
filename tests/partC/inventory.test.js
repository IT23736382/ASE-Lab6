const { Cart } = require('../../src/PartC/cart');

const mockCatalog = {
    find: jest.fn((sku) => {
        if (sku === 'A1') return { sku: 'A1', name: 'Apple', price: 10 };
        return undefined;
    })
};

test('adding more items than available throws an error', () => {

    const mockInventory = {
        getAvailable: jest.fn((sku) => {
            if (sku === 'A1') return 5;
            return 0;
        })
    };


    const cart = new Cart(mockCatalog, mockInventory);
    expect(() => cart.addItem('A1', 10)).toThrow('Insufficient inventory');
});