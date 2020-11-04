const mongoose = require('mongoose');

var url = 'mongodb://bdr:bdr0286@ds237723.mlab.com:37723/bdr';

module.exports = {
  db: mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
};