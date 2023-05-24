const mongoose = require('mongoose');
const Timer = require('../models/timer');
const { StatusCodes } = require('http-status-codes');
const { findByIdAndUpdate } = require('../models/timer');

const getAllTimers = async (req, res) => {
  const timers = await Timer.find();
  res.status(StatusCodes.OK).json({ timers });
};

const addTimer = async (req, res) => {
  const timer = await Timer.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ timer });
};

const getTimerById = async (req, res) => {
  const { id } = req.params;
  const timer = await Timer.findById(id);
  res.status(StatusCodes.OK).json({ timer });
};

const deleteTimer = async (req, res) => {
  const { id } = req.params;
  const timer = await Timer.findByIdAndDelete(id);
  res.status(StatusCodes.OK).send({ timer });
};

const updateTimer = async (req, res) => {
  const { id } = req.params;
  const timer = await Timer.findByIdAndUpdate(
    id,
    { ...req.body },
    { new: true, runValidators: true }
  );
  res.status(StatusCodes.OK).json({ timer });
};

const startTimer = async (req, res) => {
  const { id } = req.params;
  const timer = await Timer.findByIdAndUpdate(id, { runningSince: Date.now() });
  res.status(StatusCodes.OK).json(timer);
};

const stopTimer = async (req, res) => {
  const { id } = req.params;
  const timer = await Timer.findById(id);
  const updated_timer = await Timer.findByIdAndUpdate(id, {
    runningSince: null,
    elapsed: timer.elapsed + (Date.now() - timer.runningSince),
  });
  res.status(StatusCodes.OK).json(timer);
};

module.exports = {
  getAllTimers,
  addTimer,
  getTimerById,
  deleteTimer,
  updateTimer,
  startTimer,
  stopTimer,
};
