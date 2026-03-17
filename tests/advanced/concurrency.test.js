class AsyncInventory {
    constructor(stock) {
        this.stock = stock;
    }

    async reserve(qty) {
        if (this.stock >= qty) {
            await new Promise(resolve => setTimeout(resolve, 10));
            this.stock -= qty;
            return true;
        }
        return false;
    }
}

test('concurrent reservations expose race conditions in naive implementations', async () => {
    const inventory = new AsyncInventory(10);

    const req1 = inventory.reserve(8);
    const req2 = inventory.reserve(8);

    const results = await Promise.all([req1, req2]);

    expect(results).toEqual([true, true]);
    expect(inventory.stock).toBe(-6);
});