const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new mongoose.Schema({
    airline: { 
        type: String, 
        enum: ['American', 'Southwest', 'United'],
    },
    airport: {
        type: String,
        enum: ["AUS", "DFW", "DEN", "LAX", "SAN", "PDX"],
    },
    flightNo:{
        type: Number,
        min: 10,
        max: 9999,
        required: true,
    },
    depart: {
        type: Date,
        default: () => Date.now() + 365*24*60*60000,
    }
});

module.exports = mongoose.model('Flight', flightSchema);