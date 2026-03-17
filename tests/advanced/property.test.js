const fc = require('fast-check');
const { Cart } = require('../../src/PartB/cart');

test('cart total is always exactly quantity multiplied by price', () => {
    fc.assert(
        fc.property(
            fc.integer({ min: 1, max: 100 }),
            fc.integer({ min: 1, max: 1000 }),
            (qty, price) => {
                const mockCatalog = {
                    find: () => ({ price: price })
                };

                const cart = new Cart(mockCatalog);
                cart.addItem('A1', qty);

                expect(cart.total()).toBe(qty * price);
            }
        )
    );
});