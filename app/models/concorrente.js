// Example model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConcorrenteSchema = new Schema({
  codice: {
    type: Number,
    unique: true,
    required: true,
    dropDups: true
  },
  nome: {
    type: String,
    required: true
  },
  dataNascita: {
    type: Date,
    required: true
  },
  turno: {
    type: String,
    required: true
  },
  ripetute: {
    type: Number,
    default: 0
  },
  peso: {
    type: Number,
    default: 0
  }
});

ConcorrenteSchema.virtual('totale').get(function () {
  return this.ripetute * this.peso;
});

ConcorrenteSchema.virtual('date')
  .get(() => this._id.getTimestamp());

mongoose.model('Concorrente', ConcorrenteSchema);
