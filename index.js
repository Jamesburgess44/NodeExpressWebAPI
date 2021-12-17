const mongoose = require('mongoose');

mongoose
    .connect('mongodb+srv://jamesb:Water123@jamesdcc.l5s3m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB... Cowabunga Dude!'))
    .catch((err) => console.log(`Could not connect to MongoDB. ERROR: ${err}`));