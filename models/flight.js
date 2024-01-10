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
        default: function() {
            const oneYearFromNow = new Date();
            oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
            return oneYearFromNow;
        }
    },
});

module.exports = mongoose.model('Flight', flightSchema);