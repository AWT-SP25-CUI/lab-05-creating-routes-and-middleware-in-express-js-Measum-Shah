const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
let items = [
  { id: 1, title: 'Item1' },
  { id: 2, title: 'Item2' }
];
app.get('/items', (req, res) => {
  res.json(items);
});
app.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const item = items.find((i) => i.id === id);

  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});
app.post('/items', (req, res) => {
  const newItem = {
    id: items.length + 1,
    title: req.body.title
  };

  items.push(newItem);

  res.status(201).json(newItem);
});
app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const itemIndex = items.findIndex((i) => i.id === id);

  if (itemIndex > -1) {
    items[itemIndex].title = req.body.title;
    res.json(items[itemIndex]);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});
app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const itemIndex = items.findIndex((i) => i.id === id);

  if (itemIndex > -1) {
    items.splice(itemIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});