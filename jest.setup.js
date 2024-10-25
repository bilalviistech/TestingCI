// jest.setup.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// Connect to MongoDB before running tests
beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('MongoDB connected for testing');
});

// Close the connection after tests are done
afterAll(async () => {
  await mongoose.connection.close();
  console.log('MongoDB connection closed after tests');
});
