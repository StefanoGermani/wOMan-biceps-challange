const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Concorrente = mongoose.model('Concorrente');

module.exports = (app) => {
  app.use('/gara', router);
};

router.get('/', (req, res, next) => {
  res.render('gara');
});

router.post('/', (req, res, next) => {
  Concorrente.update({ codice: req.body.codice }, { $set: { ripetute: req.body.ripetute, peso: req.body.peso }}, (err) => {
    if (err) return next(err);
    res.render('gara');
  });
});
