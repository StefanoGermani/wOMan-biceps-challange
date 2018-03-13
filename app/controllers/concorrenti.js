const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Concorrente = mongoose.model('Concorrente');

module.exports = (app) => {
  app.use('/concorrenti', router);
};

router.get('/', (req, res, next) => {
  res.render('addConcorrenti');
});

router.post('/', (req, res, next) => {
  Concorrente.find((err, concorrenti) => {
    if (err) return next(err);
    res.render('index', {
      concorrenti: concorrenti
    });
  });
});
