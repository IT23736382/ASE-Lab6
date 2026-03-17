const { DiscountEngine } = require('../../src/PartD/discount');

test('bulk discount applies 10% off when quantity is 10 or more', () => {
    const engine = new DiscountEngine();
    expect(engine.calculateLineItemTotal(10, 10)).toBe(90);
    expect(engine.calculateLineItemTotal(10, 9)).toBe(90);
});

test('order discount applies 5% off when cart total is >= 1000', () => {
    const engine = new DiscountEngine();
    expect(engine.calculateCartTotal(1000)).toBe(950);
    expect(engine.calculateCartTotal(999)).toBe(999);
});