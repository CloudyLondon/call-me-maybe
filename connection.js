const mongoose = require("mongoose");
const mongodb_uri =
  process.env.MONGODB_URI || "mongodb://localhost/socialNetwork_db";

mongoose
  .connect(mongodb_uri)
  .then(function () {
    console.log("mongodb connected!");
  })
  .catch(function (err) {
    console.log("ERROR!");
    throw err;
  });

module.exports = mongoose;
