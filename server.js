// server.js
const express = require('express');
const { db } = require('./firebaseconfig');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Handle message sending
app.post('/send-message', async (req, res) => {
  try {
    const { sender, recipient, message } = req.body;
    const timestamp = new Date();

    // Save message to Firestore
    await db.collection('messages').add({
      sender,
      recipient,
      message,
      timestamp
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
