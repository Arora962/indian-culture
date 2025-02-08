// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Feedback = require('./models/Feedback.js');
require('dotenv').config(); 

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json()); 

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.get('/custombackend', (req, res) => {
  res.send('Hello from the custom backend!');
});

app.post('/api/feedback', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const newFeedback = new Feedback({
      message,
    });

    await newFeedback.save();

    return res.status(201).json({ message: 'Feedback saved successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
module.exports = app;