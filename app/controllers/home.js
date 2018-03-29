const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Concorrente = mongoose.model('Concorrente');

module.exports = (app) => {
  app.use('/', router);
};

router.get('/', (req, res, next) => {
  Concorrente.find().distinct('turno').exec()
    .then((turni) => { res.render('index', { turni: turni.sort() }); })
    .catch((err) => next(err));
});
