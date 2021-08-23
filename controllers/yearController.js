
const Year = require('../models/year.js');


exports.getYear = (req, res) => {
  Year.find({ _id: req.params.id }).populate({
    path: 'months',
    populate: {
        path: 'days', 
        model: 'Day',
    }
 }).exec((err, year) => {
    if (err) return res.json(err);
    res.json(year);
  });
}

exports.getYearId = (req, res) => {
  Year.find({ year: 2021 }).exec((err, year) => {
    if (err) return res.json(err);
    res.json(year);
  });
}
