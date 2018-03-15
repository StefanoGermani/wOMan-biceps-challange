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
  var concorrente = Concorrente.find({ codice: req.body.codice }).exec();
  concorrente.ripetute = req.body.ripetute;
  concorrente.peso = req.body.peso;
  concorrente.update(function(err) {
    if (err) return next(err);
    res.render('gara');
  });
});
