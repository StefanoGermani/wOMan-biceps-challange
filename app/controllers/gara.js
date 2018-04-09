const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Concorrente = mongoose.model('Concorrente');
const auth = require('express-authentication');

module.exports = (app) => {
  app.use('/gara', router);
};

router.get('/', auth.required(), (req, res, next) => {
  res.render('gara');
});

router.post('/', auth.required(), (req, res, next) => {
  Concorrente.update({ codice: req.body.codice }, { $set: { ripetute: req.body.ripetute }}, (err) => {
    if (err) return next(err);
    res.render('gara');
  });
});
