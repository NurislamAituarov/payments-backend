const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/route');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

async function start(req, res, next) {
  try {
    await mongoose.connect(
      'mongodb+srv://Nurislam:2016Granta@cluster0.p2scd.mongodb.net/myFirstDatabase',
    );

    app.listen(PORT, () => {
      console.log('listening on port' + PORT);
    });
  } catch (e) {
    console.log(e);
  }
}
start();
