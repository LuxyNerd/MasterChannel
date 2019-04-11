const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/APIAuthentication', {
  useNewUrlParser: true
});

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

// Routes
app.use('/users', require('./routes/users'));
//weitere Pfade //interfaces def

// Start the server
//process.envt dependet from hosting, like amazon
const port = process.env.PORT || 5000; //5000 because react currently listen to 3000
app.listen(port);

console.log(`Server listening at ${port}`);
