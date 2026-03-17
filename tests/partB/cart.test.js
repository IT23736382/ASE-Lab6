const { Cart } = require('../../src/PartB/cart');

const mockCatalog = {
    find: jest.fn((sku) => {
        if (sku === 'A1') return { sku: 'A1', name: 'Apple', price: 10 };
        return undefined; 
    })
};
test('cart can add items and calculate total', () => {
    const cart = new Cart(mockCatalog);
    cart.addItem('A1', 2);
    expect(cart.total()).toBe(20);
});
test('cart can remove items', () => {
    const cart = new Cart(mockCatalog);
    cart.addItem('A1', 2);
    cart.removeItem('A1');
    expect(cart.total()).toBe(0);
});
test('adding an unknown product throws an error', () => {
    const cart = new Cart(mockCatalog);
    expect(() => cart.addItem('MISSING', 1)).toThrow('Product not in catalog');
});
test('adding an invalid quantity throws an error', () => {
    const cart = new Cart(mockCatalog);
    expect(() => cart.addItem('A1', 0)).toThrow('Quantity must be an integer > 0');
    expect(() => cart.addItem('A1', -5)).toThrow('Quantity must be an integer > 0');
    expect(() => cart.addItem('A1', 1.5)).toThrow('Quantity must be an integer > 0');
});