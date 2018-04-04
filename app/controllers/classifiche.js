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
      concorrenti,
      title: `Classifica Generale`
    });
  });
});

router.get('/turno/:turno', (req, res, next) => {
  Concorrente.find({ turno: req.params.turno }).limit(20).sort({ ripetute: 'desc' }).exec((err, concorrenti) => {
    if (err) return next(err);
    res.render('classifica', {
      concorrenti: concorrenti,
      title: `Turno ${req.params.turno}`
    });
  });
});

router.get('/over55', (req, res, next) => {
  var date = new Date();
  date.setFullYear(date.getFullYear() - 55);
  Concorrente.find().where('dataNascita').lt(date).limit(20).sort({ ripetute: 'desc' }).exec((err, concorrenti) => {
    if (err) return next(err);
    res.render('classifica', {
      concorrenti: concorrenti,
      title: `Over 55`
    });
  });
});

router.get('/under17', (req, res, next) => {
  var date = new Date();
  date.setFullYear(date.getFullYear() - 17);
  Concorrente.find().where('dataNascita').gt(date).limit(20).sort({ ripetute: 'desc' }).exec((err, concorrenti) => {
    if (err) return next(err);
    res.render('classifica', {
      concorrenti: concorrenti,
      title: 'Under 17'
    });
  });
});
