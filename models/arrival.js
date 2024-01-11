const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const arrivalSchema = new Schema({
    airport: {
        type: String,
        enum: ["AUS", "DFW", "DEN", "LAX", "SAN", "PDX"],
    },
    depart: {
        type: Date,
    }
});

module.exports = mongoose.model('Arrival', arrivalSchema);