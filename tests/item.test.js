// tests/item.test.js
const request = require('supertest');
const app = require('../app'); // Assuming app.js is your main server file
const Item = require('../models/Item');

describe('CRUD API Tests', () => {
  let itemId;

  it('should create a new item', async () => {
    const res = await request(app)
      .post('/api/items')
      .send({ name: 'Test Item', description: 'This is a test' });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Test Item');
    itemId = res.body._id; // Save the ID for further tests
  });

  it('should retrieve all items', async () => {
    const res = await request(app).get('/api/items');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should update an item', async () => {
    const res = await request(app)
      .put(`/api/items/${itemId}`)
      .send({ name: 'Updated Test Item' });
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('Updated Test Item');
  });

  it('should delete an item', async () => {
    const res = await request(app).delete(`/api/items/${itemId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Item deleted');
  });
});
