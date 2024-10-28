// controllers/taskController.js
const Task = require('../models/Task');

// Add a new task
const addTask = async (req, res) => {
  
  try {
    const { title, description, date, startTime, endTime, status, priority } = req.body;
    const newTask = new Task({ title, description, date, startTime, endTime, status, priority });
    const savedTask = await newTask.save();
    res.status(201).json({ message: 'Task added successfully', task: savedTask });
  } catch (error) {
    res.status(500).json({ message: 'Error adding task', error });
  }
};

module.exports = { addTask };
