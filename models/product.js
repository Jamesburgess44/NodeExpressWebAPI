const mongoose = require('mongoose');

const productionSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2, maxlength: 255 },
    description: { type: String, required: true },
    category: { type: String, required: true, minlength: 5, maxlength: 50 },
    price: { type: Number, required: true },
    dateModified: { type: Date, default: Date.now}
});