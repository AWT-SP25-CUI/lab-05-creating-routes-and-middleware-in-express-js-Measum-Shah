const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 3000;

app.use(bodyParser.json());
app.post('/submit-json', (req, res) => {
  const data = req.body;

  console.log(data);

  res.json({
    message: 'JSON data received',
    data: data
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});