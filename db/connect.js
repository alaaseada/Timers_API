const mongoose = require('mongoose');
require('dotenv').config();

const connect = async () => {
  const connection = await mongoose.connect(process.env.DATABASE_URL);
  return connection;
};

const connection = connect();

module.exports = connection;
