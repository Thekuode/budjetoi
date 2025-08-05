const mongoose = require('mongoose');

const moneySchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  description: { type: String, required: true, enum: ['palkka', 'lahja'] }
});

module.exports = mongoose.model('Money', moneySchema);