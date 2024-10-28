// models/Task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },                // Task date
  startTime: { type: String, required: true },          // Start time as string (e.g., "09:00")
  endTime: { type: String, required: true },            // End time as string (e.g., "10:00")
  status: { type: String, enum: ['Open', 'Completed'], default: 'Open' },  // Task status
  priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Low' }  // Task priority
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
