// Example model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConcorrenteSchema = new Schema({
  nome: String,
  turno: String,
  ripetute: Number,
  peso: Number
});

ConcorrenteSchema.virtual('date')
  .get(() => this._id.getTimestamp());

mongoose.model('Concorrente', ConcorrenteSchema);

