const Tickets = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
};

async function create(req, res) {
    try {
        const newTicket = await Tickets.create(req.body);
        const currentFlight = await Flight.findById(req.params.flightId);

        currentFlight.tickets.push(newTicket._id);
        await currentFlight.save();

        res.redirect(`/flights/${currentFlight._id}`);
    } catch (err) {
        console.error(err);
        res.render('tickets/new', { currentFlight: {}, errorMsg: err.message });
    }
}

async function newTicket(req, res) {
    const currentFlight = await Flight.findById(req.params.id);
    res.render('tickets/new', { currentFlight, errorMsg: '' });
}