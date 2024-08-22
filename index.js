const cors = require('cors');
const express = require('express');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json()); 

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hi Bye!' });
});

app.post('/api/message', (req, res) => {
  const newMessage = req.body.message;
  res.json({ message: `Message received: ${newMessage}`});
});

app.put('/api/message', (req, res) => {
  const updatedMessage = req.body.message;
  res.json({ message: `Message updated to: ${updatedMessage}`});
});

app.delete('/api/message', (req, res) => {
  res.json({ message: 'Message deleted!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
