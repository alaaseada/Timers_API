const mongoose = require('mongoose');

const TimerSchema = new mongoose.Schema({
  id: {
    type: mongoose.SchemaTypes.ObjectId,
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
