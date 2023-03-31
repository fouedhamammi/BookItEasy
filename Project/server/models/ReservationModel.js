const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    date: {
      type: Date,
      required: true,
      validate: {
        validator: function(date) {
          // Check if the reservation date is in the future
          return date > new Date();
        },
        message: 'Désoler, date invalide'
      }
    },
    weddingHallId: String,
    phone: String,
    price: Number,
    status: { type: String, default: 'pending' }
  });
const Reservation = mongoose.model('reservations', ReservationSchema);

module.exports = Reservation;
