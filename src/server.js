'use strict';

//..Imports
const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');

//..WebApp Config
const { HOST = '0.0.0.0', PORT = '5000' } = process.env

//..Link with ./dataInput.js and ./dataOutput.js files
let dataInputRoute = require('./dataInput');
let dataOutputRoute = require('./dataOutput');
//let dataInputRoute = require('./routes/dataInput');         // не работает
//let dataInputRoute = require('./controllers/dataInput');    // не работает


//..Build App
const app = express();

//..Confuguring template engine
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', `${__dirname}/views`);

app.use (bodyParser.urlencoded( {extended : true} ) );
app.use ('/', dataInputRoute);
app.use ('/', dataOutputRoute);

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
