require('dotenv').config();
const express = require('express');
const { connect } = require('mongoose');
const cors = require('cors')
const crudRouter = require('./routes/crudTask.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', crudRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Server has been start on port -', port);
  connect('mongodb://localhost:27017/todo', ({ useNewUrlParser: true }), () => {
    console.log('Data base has been created!');
  });
});
