const { Product, Catalog } = require('../../src/PartA/shop');

test('creating a product with negative price throws an error', () => {
    expect(() => new Product('A1', 'Apple', -5)).toThrow('Price cannot be negative');
});

test('catalog can add and find a product', () => {
    const catalog = new Catalog();
    const prod = new Product('A1', 'Apple', 10);
    catalog.add(prod);

    expect(catalog.find('A1')).toBe(prod);
    expect(catalog.find('B2')).toBeUndefined();
});