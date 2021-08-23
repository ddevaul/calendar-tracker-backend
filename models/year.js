const mongoose = require('mongoose');
// Define schema
const Schema = mongoose.Schema;

const YearSchema = new Schema({
  year: {type: Number, required: true},
  months: [{type: Schema.Types.ObjectId, ref: 'Month'}],
});

module.exports = mongoose.model('Year', YearSchema);