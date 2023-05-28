const mongoose = require('mongoose');
const uuid = require('uuid');

const TimerSchema = new mongoose.Schema({
  _id: {
    type: mongoose.SchemaTypes.String,
    required: [true, 'The id is required'],
    default: uuid.v4(),
  },
  title: {
    type: mongoose.SchemaTypes.String,
    required: [true, "Timer's title is required."],
  },
  elapsed: {
    type: mongoose.SchemaTypes.Number,
    default: 0,
  },
  project: {
    type: mongoose.SchemaTypes.String,
    required: [true, 'The project name is required'],
  },
  runningSince: {
    type: mongoose.SchemaTypes.Number,
    default: null,
  },
});

const Timer = mongoose.model('Timer', TimerSchema);

module.exports = Timer;
