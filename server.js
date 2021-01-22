const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

//bodyParser MiddleWare

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
        limit: '50mb',
        extended: true,
        parameterLimit:50000
      }));

//DB COONFIG
const db = require('./config/keys').mongoURI;
//CONNECT TO MONGO
mongoose
        .connect(db)
        .then(() => console.log('MongoDB Connected...'))
        .catch(err => console.log(err));

//USE ROUTES
app.use('/api/items', items);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));