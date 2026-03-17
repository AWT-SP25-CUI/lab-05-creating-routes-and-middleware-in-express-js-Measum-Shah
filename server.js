const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));


app.use(bodyParser.urlencoded({ extended: false }));

app.post('/submit-form', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  res.send(`Name: ${name}, Email: ${email}`);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});