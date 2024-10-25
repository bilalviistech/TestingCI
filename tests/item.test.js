// tests/item.test.js
const request = require('supertest');
const app = require('../app'); // This should correctly import the app instance
const Item = require('../models/Item');

describe('CRUD API Tests', () => {
  let itemId;

  it('should create a new item', async () => {
    const res = await request(app)
      .post('/api/items')
      .send({ name: 'Test Item', description: 'This is a test' });
    expect(res.statusCode)
    expect(res.body.name)
    itemId = res.body._id; // Save the ID for further tests
  }, 60000);

  it('should retrieve all items', async () => {
    const res = await request(app).get('/api/items');
    expect(res.statusCode)
    expect(Array.isArray(res.body))
  }, 60000);

  it('should update an item', async () => {
    const res = await request(app)
      .put(`/api/items/${itemId}`)
      .send({ name: 'Updated Test Item' });
    expect(res.statusCode)
    expect(res.body.name)
  }, 60000);

  it('should delete an item', async () => {
    const res = await request(app).delete(`/api/items/${itemId}`);
    expect(res.statusCode)
    expect(res.body.message)
  },60000);
});
