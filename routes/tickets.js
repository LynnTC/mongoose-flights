const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

router.get('/flights/:id/tickets/new', ticketsCtrl.new);
router.post('/flights/:flightId/tickets', ticketsCtrl.create);
// router.post('/flights/:flightId/tickets/new', ticketsCtrl.addtoFlight)

module.exports = router;