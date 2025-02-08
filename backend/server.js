// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Feedback = require('./models/Feedback.js');
require('dotenv').config(); // Load environment variables from .env

// Initialize the express app
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json()); // This will let you send JSON data in requests

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Sample route (this will be the home route of your backend API)
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Custom route for testing
app.get('/custombackend', (req, res) => {
  res.send('Hello from the custom backend!');
});

// Route to handle feedback submission
app.post('/api/feedback', async (req, res) => {
  try {
    const { message } = req.body;

    // Ensure feedback message is provided
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Create a new feedback document
    const newFeedback = new Feedback({
      message,
    });

    // Save the feedback document to MongoDB
    await newFeedback.save();

    // Send success response
    return res.status(201).json({ message: 'Feedback saved successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Something went wrong' });
  }
});

// Start the backend server
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
module.exports = app;