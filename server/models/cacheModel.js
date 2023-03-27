const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cacheSchema = new Schema({
  key: { type: String, required: true },
  text: { type: String, required: true }
}, { collection: 'Cache'});

const Cache = mongoose.model('Cache', cacheSchema);

module.exports = { Cache };
