const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Concorrente = mongoose.model('Concorrente');

module.exports = (app) => {
  app.use('/', router);
};

router.get('/', (req, res, next) => {
  Concorrente.find().limit(20).sort({ totale: 'desc' }).exec((err, concorrenti) => {
    if (err) return next(err);
    res.render('index', {
      concorrenti: concorrenti
    });
  });
});

router.get('/turno/:turno', (req, res, next) => {
  Concorrente.find({ turno: req.params.turno }).limit(20).sort({ totale: 'desc' }).exec((err, concorrenti) => {
    if (err) return next(err);
    res.render('index', {
      concorrenti: concorrenti
    });
  });
});
