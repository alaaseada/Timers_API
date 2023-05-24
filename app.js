const express = require('express');
const api_router = require('./routes/api');
const db_connect = require('./db/connect');
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = express();

app.use(express.json());
app.use('/api/v1/', api_router);

const start = () => {
  db_connect(process.env.DATABASE_URL)
    .then(() => {
      app.listen(process.env.PORT, () => {
        console.log(
          `Connection established, and the server is listening to port ${process.env.PORT}`
        );
      });
    })
    .catch((err) => 'Something went wrong');
};

start();
