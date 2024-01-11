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
const flightSchema = new mongoose.Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
    },
    airport: {
        type: String,
        enum: ["AUS", "DFW", "DEN", "LAX", "SAN", "PDX"],
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        required: true,
    },
    depart: {
        type: Date,
        default: function () { return Date.now() + (365 * 24 * 60 * 60000) }
    },
    arrival: [arrivalSchema]
});

module.exports = mongoose.model('Flight', flightSchema);