const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Concorrente = mongoose.model('Concorrente');

module.exports = (app) => {
  app.use('/', router);
};

router.get('/', (req, res, next) => {
  Concorrente.find().sort({ codice: 'desc' }).exec((err, concorrenti) => {
    if (err) return next(err);
    res.render('index', {
      concorrenti: concorrenti
    });
  });
});

