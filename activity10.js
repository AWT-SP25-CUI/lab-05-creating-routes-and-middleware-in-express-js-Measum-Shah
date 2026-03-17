const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const port = 3000;

app.get('/set-cookie', (req, res) => {
  res.cookie('myCookie', 'hello', { 
    maxAge: 900000,
    httpOnly: true
  });

  res.send('Cookie has been set');
});
app.get('/read-cookie', (req, res) => {
  const myCookieValue = req.cookies.myCookie;

  if (myCookieValue) {
    res.send(`Cookie value: ${myCookieValue}`);
  } else {
    res.send('Cookie not found');
  }
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});