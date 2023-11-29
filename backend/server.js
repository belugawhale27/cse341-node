const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
const uri = 'mongodb+srv://belugawhale27:@shIsRed27@contacts.xyy7rto.mongodb.net/'
const port = process.env.PORT || 8000;
const app = express();

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connect to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
/*
app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
  
});*/