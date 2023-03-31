const express = require('express');
const reservationController = require('../controller/reservationController');

const router = express.Router();

router.post('/', reservationController.createReservation);

router.get('/', reservationController.getAllReservations);

router.get('/:id', reservationController.getReservationById);

router.patch('/:id', reservationController.updateReservation);

router.delete('/:id', reservationController.deleteReservation);

module.exports = router;
