const express = require('express');
const {
  getAllTimers,
  addTimer,
  getTimerById,
  deleteTimer,
  updateTimer,
  startTimer,
  stopTimer,
} = require('../controllers/timers');
const router = express.Router();

router.route('/').get(getAllTimers).post(addTimer);
router.route('/:id').get(getTimerById).delete(deleteTimer).patch(updateTimer);
router.patch('/start/:id', startTimer);
router.patch('/stop/:id', stopTimer);

module.exports = router;
