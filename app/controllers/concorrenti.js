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
  var conc = new Concorrente({
    nome: req.body.name,
    codice: req.body.codice,
    turno: req.body.turno,
    dataNascita: req.body.birthday
  });
  conc.save(function (err) {
    if (err) return next(err);
    res.render('addConcorrenti');
  });
});
