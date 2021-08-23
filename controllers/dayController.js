const Day = require('../models/day.js');
const { body, validationResult } = require("express-validator");

exports.getDay = (req, res) => {
  Day.find({ _id: req.params.id }).exec((err, day) => {
    if (err) return res.json(err);
    res.json(day);
  });
}

// exports.updateDay = (req, res) => {
//   Day.find({ _id: req.params.id }).exec((err, day) => {
//     if (err) return res.json(err);
//     res.json(day);
//   });
// }

// date: {type: Date, required: true},
//   description: {type: String},
//   feeling: {type: String, enum: ["Bad", "Not Great", "Fine", "Good", "Great", "Amazing"]},
//   rating:

exports.updateDay = [
  body("description").trim().escape(),
  body("feeling").trim().escape(),
  body("rating").custom(rating => {
    if (!isNaN(rating) || rating === ""){
      return true
    }
    throw new Error("Invalid rating");
  }).escape(),
  (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors)
      res.status(400);
      res.json('there was an error')
      return;
    } else {
        Day.findById(req.params.id).exec((err, day) => {
          day.description = req.body.description ? req.body.description : day.description;
          day.feeling = req.body.feeling ? req.body.feeling : day.feeling;
          day.rating = req.body.rating ? req.body.rating : day.rating;
          day.save(function (err) {
            if (err) {
              console.log(err);
              return next(err);
            }
            // Day saved
            res.json("Day updated");
          });
        });
        
      }
    }
]
