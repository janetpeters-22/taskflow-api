import Task from "../models/task.js";

// GET ALL TASKS
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({
      createdAt: -1,
    });

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET TASK BY ID
export const getTaskById = async (
  req,
  res
) => {
  try {
    const task = await Task.findById(
      req.params.id
    );

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// CREATE TASK
export const createTask = async (
  req,
  res
) => {
  try {
    const {
      text,
      priority,
      dueDate,
    } = req.body;

    const newTask = await Task.create({
      text,
      priority,
      dueDate,
    });

    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE TASK
export const updateTask = async (
  req,
  res
) => {
  try {
    const updatedTask =
      await Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

    if (!updatedTask) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    res.status(200).json(
      updatedTask
    );
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE TASK
export const deleteTask = async (
  req,
  res
) => {
  try {
    const deletedTask =
      await Task.findByIdAndDelete(
        req.params.id
      );

    if (!deletedTask) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    res.status(200).json({
      success: true,
      message:
        "Task deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};