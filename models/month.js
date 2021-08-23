const mongoose = require('mongoose');
// Define schema
const Schema = mongoose.Schema;

const MonthSchema = new Schema({
  month: {type: Number, required: true},
  name: {type: String, required: true, enum: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'December']},
  days: [{type: Schema.Types.ObjectId, ref: 'Day'}],
});

module.exports = mongoose.model('Month', MonthSchema );