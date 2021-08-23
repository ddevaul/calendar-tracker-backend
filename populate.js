const Day = require("./models/day.js");
const Month = require("./models/month.js");
const Year = require("./models/year.js");


//Import the mongoose module
const mongoose = require('mongoose');
require('dotenv').config()
//Set up default mongoose connection
const mongoDB = `mongodb+srv://desi:${process.env.MONGODB_KEY}@cluster0.86crs.mongodb.net/calendar?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
//Get the default connection
const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const populate = () => {
  const year = 2021;
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  let months = []
  for (let month = 0; month < 12; month++) {
    const numDaysInMonth = new Date(year, month + 1, 0).getDate();
    let days = []
    for (let day = 0; day < numDaysInMonth; day++) {
      const tempDate = new Date(year, month, day + 1);
      const tempDay = new Day({
        date: tempDate
      });
      tempDay.save();
      days.push(tempDay);
    }
    let tempMonth = new Month({
      name: monthNames[month],
      month,
      days
    })
    tempMonth.save();
    months.push(tempMonth);
  }
  const tempYear = new Year({
    year,
    months,
  })
  tempYear.save();
}

const callPopulate = async () => {
  await populate();
  console.log("done")
}
callPopulate();