const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Concorrente = mongoose.model('Concorrente');

module.exports = (app) => {
  app.use('/classifica', router);
};

router.get('/', (req, res, next) => {
  Concorrente.find().limit(20).sort({ ripetute: 'desc' }).exec((err, concorrenti) => {
    if (err) return next(err);
    res.render('classifica', {
      concorrenti1: concorrenti.slice(0, 10),
      concorrenti2: concorrenti.slice(10, 21),
      title: `Classifica Generale`,
      autorefresh: true
    });
  });
});

router.get('/turno/:turno', (req, res, next) => {
  Concorrente.find({ turno: req.params.turno }).limit(20).sort({ ripetute: 'desc' }).exec((err, concorrenti) => {
    if (err) return next(err);
    res.render('classifica', {
      concorrenti1: concorrenti.slice(0, 10),
      concorrenti2: concorrenti.slice(10, 21),
      title: `Turno ${req.params.turno}`,
      autorefresh: true
    });
  });
});

router.get('/over55', (req, res, next) => {
  var date = new Date();
  date.setFullYear(date.getFullYear() - 55);
  Concorrente.find().where('dataNascita').lt(date).limit(20).sort({ ripetute: 'desc' }).exec((err, concorrenti) => {
    if (err) return next(err);
    res.render('classifica', {
      concorrenti1: concorrenti.slice(0, 10),
      concorrenti2: concorrenti.slice(10, 21),
      title: `Over 55`,
      autorefresh: true
    });
  });
});

router.get('/under17', (req, res, next) => {
  var date = new Date();
  date.setFullYear(date.getFullYear() - 17);
  Concorrente.find().where('dataNascita').gt(date).limit(20).sort({ ripetute: 'desc' }).exec((err, concorrenti) => {
    if (err) return next(err);
    res.render('classifica', {
      concorrenti1: concorrenti.slice(0, 10),
      concorrenti2: concorrenti.slice(10, 21),
      title: 'Under 17',
      autorefresh: true
    });
  });
});
