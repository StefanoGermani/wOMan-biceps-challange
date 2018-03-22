// Example model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConcorrenteSchema = new Schema({
  codice: String,
  nome: String,
  turno: String,
  ripetute: { type: Number, default: 0 },
  peso: { type: Number, default: 0 }
});

ConcorrenteSchema.virtual('totale').get(function () {
  return this.ripetute * this.peso;
});

ConcorrenteSchema.virtual('date')
  .get(() => this._id.getTimestamp());

mongoose.model('Concorrente', ConcorrenteSchema);

