const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require('dotenv').config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CNN);
    console.log("db conectada");
  } catch (error) {
    console.log("error al conectar db");
  }
};


module.exports = {connect}