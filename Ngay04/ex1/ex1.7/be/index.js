const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.json());

const messages = [
  {
    author: 'SC',
    text: "Rolls complete and a pitch is program. One BRAVO.",
  },
  {
    author: 'PAO',
    text: 'One BRAVO is an abort control model. Altitude is 2 miles.',
  },
  {
    author: 'CAPCOM',
    text: "All is well at Houston. You are good at 1 minute",
  },
];

const messagesRouter = express.Router();

messagesRouter.get('/:forum', (req, res) => {
  if (req.params.forum === 'nasa') {
    return res.send(messages);
  }
  return res.status(404).send({ error: 'Unknown forum' });
});

messagesRouter.post('/:forum', (req, res) => {
  if (req.params.forum === 'nasa') {
    messages.push(req.body);
    return res.send('OK');
  }
  return res.status(404).send({ error: 'Unknown forum' });
});

app.use('/messages', messagesRouter);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => console.log(`Launched on port ${PORT}!`));
