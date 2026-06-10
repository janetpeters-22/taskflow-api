import { tasks } from "../data/tasks.js";

let nextId = 2;

// GET ALL TASKS
export const getAllTasks = (req, res) => {
  res.status(200).json(tasks);
};

// GET TASK BY ID
export const getTaskById = (req, res) => {
  const task = tasks.find(
    task => task.id === Number(req.params.id)
  );

  if (!task) {
    return res.status(404).json({
      success: false,
      message: "Task not found"
    });
  }

  res.status(200).json(task);
};

// CREATE TASK
export const createTask = (req, res) => {
  const {
    text,
    priority,
    dueDate
  } = req.body;

  const newTask = {
    id: nextId++,
    text,
    completed: false,
    priority: priority || "Medium",
    dueDate: dueDate || "",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
};

// UPDATE TASK
export const updateTask = (req, res) => {
  const task = tasks.find(
    task => task.id === Number(req.params.id)
  );

  if (!task) {
    return res.status(404).json({
      success: false,
      message: "Task not found"
    });
  }

  const {
    title,
    description,
    priority,
    completed
  } = req.body;

  if (title !== undefined)
    task.title = title;

  if (description !== undefined)
    task.description = description;

  if (priority !== undefined)
    task.priority = priority;

  if (completed !== undefined)
    task.completed = completed;

  task.updatedAt =
    new Date().toISOString();

  res.status(200).json(task);
};

// DELETE TASK
export const deleteTask = (req, res) => {
  const index = tasks.findIndex(
    task => task.id === Number(req.params.id)
  );

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Task not found"
    });
  }

  tasks.splice(index, 1);

  res.status(200).json({
    success: true,
    message: "Task deleted successfully"
  });
};