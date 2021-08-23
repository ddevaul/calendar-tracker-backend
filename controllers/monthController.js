const Month = require('../models/month.js');

exports.getMonth = (req, res) => {
  Month.find({ _id: req.params.id }).populate('days').exec((err, month) => {
    if (err) return res.json(err);
    res.json(month);
  });
}
