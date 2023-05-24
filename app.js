const express = require('express');
const api_router = require('./routes/api');
const db_connection = require('./db/connect');

const app = express();

app.use(express.json());
app.use('/api/v1/', api_router);

db_connection
  .then(() => {
    app.listen(3000, () => {
      console.log(
        'Connection established, and the server is listening to port 3000'
      );
    });
  })
  .catch((err) => 'Something went wrong');
