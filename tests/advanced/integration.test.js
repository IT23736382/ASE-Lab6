const Database = require('better-sqlite3');
const { CheckoutService } = require('../../src/PartF/checkout');

test('end-to-end checkout saves order to real sqlite database', () => {
    const db = new Database(':memory:');
    db.exec('CREATE TABLE orders (id INTEGER PRIMARY KEY, total REAL)');

    const sqliteRepo = {
        save: (order) => {
            const stmt = db.prepare('INSERT INTO orders (total) VALUES (?)');
            stmt.run(order.total);
        }
    };

    const mockCart = {
        total: () => 99.99,
        validateItems: () => true,
        items: {}
    };

    const mockGateway = {
        charge: () => true
    };

    const checkout = new CheckoutService(mockGateway, sqliteRepo);
    checkout.process(mockCart, 'token');

    const row = db.prepare('SELECT * FROM orders').get();

    expect(row.total).toBe(99.99);

    db.close();
});