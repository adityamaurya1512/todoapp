
const Task = require('../models/Task');


const getTasksByDate = async (req, res) => {
  try {
    
    const { date } = req.query;

   
    const tasks = await Task.find({
      $expr: {
        $eq: [
          { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
          date
        ]
      }
    });

    res.json(tasks);
  } catch (error) {
    console.error("Error fetching tasks by date:", error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { getTasksByDate };
