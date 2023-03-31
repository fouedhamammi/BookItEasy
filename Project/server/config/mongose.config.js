const mongoose = require('mongoose');

mongoose
  .connect('mongodb://127.0.0.1/bokingtest')
  .then(() =>
    console.log(`Database connection establish, ${mongoose.connection.name}`)
  )
  .catch((err) => console.log('Something went wrong with DB ', err));
