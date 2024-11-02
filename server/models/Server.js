const mongoose = require('mongoose');

const serverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  channels: { type: [String], default: [] },
});

module.exports = mongoose.model('Server', serverSchema);
