const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    seat: {type: String, required: true},
    price: {type: Number},

})

module.exports = mongoose.model('Ticket', ticketSchema);