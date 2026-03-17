# TDD Take-Home Activity: E-Commerce Platform

**Student Name:** K.M Thejandeera Sandeepana
**Student ID:** IT23736382

## Project Overview

This project is a small, testable slice of an e-commerce platform. It was built using JavaScript and the Jest testing framework.

The entire project was developed strictly following the Test-Driven Development (TDD) approach:

* **RED:** Write a failing test first.
* **GREEN:** Write the minimal code to make the test pass.
* **REFACTOR:** Improve the code while keeping the tests passing.

## Core Requirements Completed

### Part A - Product & Catalog

Created a Product model with price validation and a Catalog to store and search for products using their SKU.

### Part B - Shopping Cart

Implemented a Cart that allows adding/removing items and calculating the total price. Used mock catalogs to isolate cart tests.

### Part C - Inventory Reservation

Used Dependency Injection to pass a fake inventory service into the cart to ensure users cannot add more items than are currently in stock.

### Part D - Discount Engine

Created rules to apply a 10% bulk discount (for 10+ identical items) and a 5% order discount (for totals over $1000).

### Part E - Checkout Service

Built an orchestrator to validate the cart, calculate the final total, and charge a mocked external Payment Gateway.

### Part F - Order Persistence

Created an Order record and saved it to a mocked Repository upon a successful checkout, completing the transaction history.

## Advanced Challenges Completed

In addition to the core requirements, I also completed the advanced testing challenges:

* **Property-Based Testing:** Used fast-check to throw hundreds of random quantities and prices at the Cart to mathematically prove that the total is always correct.

* **Concurrency Testing:** Simulated a race condition using asynchronous JavaScript (Promise.all) to prove why simple stock checks fail when two users try to buy the last item at the exact same time.

* **Integration Testing:** Replaced the fake repository with a real, in-memory SQLite database (better-sqlite3) to run an end-to-end test of the checkout flow saving real data.

* **Continuous Integration (CI):** Wrote a GitHub Actions workflow (.github/workflows/test.yml) so that all Jest tests automatically run in the cloud whenever code is pushed to the repository.

## How to Run the Tests

1. Open the terminal in the project folder.

2. Install the dependencies:

```bash
npm install
```

3. Run all the core and advanced tests:

```bash
npm test
```
