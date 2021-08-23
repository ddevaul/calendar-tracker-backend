const express = require('express');
const router = express.Router();
const dayController = require('../controllers/dayController');
const monthController = require('../controllers/monthController');
const yearController = require('../controllers/yearController');

// in a production app this first route wouldn't exist, you would instead
// get a user's year
router.get('/year', yearController.getYearId);
router.get('/year/:id', yearController.getYear);
router.get('/month/:id', monthController.getMonth);
router.get('/day/:id', dayController.getDay);
router.put('/day/:id', dayController.updateDay);

module.exports = router;
