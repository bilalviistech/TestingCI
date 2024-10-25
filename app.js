// app.js
const express = require('express');
const dotenv = require('dotenv');
const itemRoutes = require('./routes/itemRoutes');

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json()); // Middleware to parse JSON requests

// Use the item routes
app.use('/api/items', itemRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
