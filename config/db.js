const mongoose = require("mongoose");

// Replace this with your MONGOURI.
const db = "mongodb://era1:era12345@localhost:27017/jwt_login";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;