const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes (you can define your routes here later)
app.get('/', (req, res) => {
  res.send('Backend Server is running!');
});

// Import product routes
const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
