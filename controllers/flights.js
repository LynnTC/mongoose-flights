const { models } = require('mongoose');
const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newFlight,
    create,
    show,
};

async function index(req, res){
    const flights = await Flight.find({});
    res.render('flights/index', {flights});
}

function newFlight(req, res){
    res.render('flights/new', { errorMsg: ''});
}

async function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
      }
    const flight = new Flight(req.body);
    try {
            const flight = await Flight.create(req.body);
            res.redirect(`/flights/${flight._id}`);
        } catch (err){
            console.error(err);
            res.render('flights/new', {errorMsg: err.message});
        }
}


async function show(req, res) {
    try {
        const flight = await Flight.findById(req.params.id).populate('tickets');
        res.render('flights/show', { flight }); 
    } catch (err) {
        console.error(err);
        res.redirect('/flights');
    }
}