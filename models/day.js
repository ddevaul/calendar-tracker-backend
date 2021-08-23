const mongoose = require('mongoose');
// Define schema
const Schema = mongoose.Schema;

const DaySchema = new Schema({
  date: {type: Date, required: true},
  description: {type: String},
  feeling: {type: String, enum: ["Bad", "Average", "Amazing", "Best Day Ever"]},
  rating: {type: Number, enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
});

module.exports = mongoose.model('Day', DaySchema );