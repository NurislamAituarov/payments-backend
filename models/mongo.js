const { Schema, model } = require('mongoose');

const schema = new Schema({
  CardNumber: { type: String, required: true },
  ExpDate: { type: String, required: true },
  Cvv: { type: String, required: true },
  Amount: { type: String, required: true },
});

module.exports = model('Payments', schema);
