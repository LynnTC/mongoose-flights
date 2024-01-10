const { models } = require('mongoose');
const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,
};

async function index(req, res){
    const flights = await Flight.find({});
    res.render('flights/index', {flights});
}

function newFlight(req, res){
    res.render('flights/new', { errorMsg: ''});
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save()
        .then(() => {
            console.log(flight);
            res.redirect('/flights');
        })
        .catch(err => {
            console.error(err);
            res.redirect('/flights/new');
        });
}