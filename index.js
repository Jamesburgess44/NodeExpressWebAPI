const mongoose = require('mongoose');
const config = require('config');

mongoose
    .connect('mongoURI',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB... Cowabunga Dude!'))
    .catch((err) => console.log(`Could not connect to MongoDB. ERROR: ${err}`));