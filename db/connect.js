const mongoose = require('mongoose');
require('dotenv').config();

const connect = async (url) => {
  const connection = await mongoose.connect(url);
  return connection;
};

module.exports = connect;
