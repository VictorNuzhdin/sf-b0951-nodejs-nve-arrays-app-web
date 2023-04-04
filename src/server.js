'use strict';

const express = require('express');

// Constants
//const HOST = '0.0.0.0';
//const PORT = 5000;
const { HOST = '0.0.0.0', PORT = '5000' } = process.env


// Build HTML-code
const html_code = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hello from NodeJS from Docker</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="NodeJS Example Page">
  <meta http-equiv="refresh" content="3">

  <style>
    * { padding: 0; margin: 2px; font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 20px; }
    h1 { color: blue; }
    h2 { color: rgb(64, 64, 64); }
    span  { display: block }
    hr    { border-top: 1px solid RGB(200,200,200); }
  </style>

</head>
<body>
  <header>
    <h1>NodeJS Example Page</h1>
  </header>

  <section>
    <h2>Hello Node Express world</h2>
  </section>

</body>
</html>
`;

// Build App
const app = express();
app.get('/', (req, res) => {
  //res.send('Hello Express World2');
  res.send(html_code);
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
