const taskService = require("../services/taskService");
const { getPagination } = require("../utils/pagination");

const createTask = async (req, res) => {
  try {
    console.log(req.user.userId);
    const task = await taskService.createTask(req.body, req.user.userId);
    res.status(201).json(task);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating task", error: error.message });
  }
};

const getTasks = async (req, res) => {
  try {
    const { status, priority, dueDate, search, page, limit } = req.query;
    const filters = { status, priority, dueDate, search };
    const pagination = getPagination(page, limit);
    const { tasks, totalCount } = await taskService.getTasks(
      req.user.userId,
      filters,
      pagination
    );
    res.json({
      tasks,
      totalPages: Math.ceil(totalCount / pagination.limit),
      currentPage: parseInt(page) || 1,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching tasks", error: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const task = await taskService.updateTask(
      taskId,
      req.user.userId,
      req.body
    );
    res.json(task);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating task", error: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    await taskService.deleteTask(taskId, req.user.userId);
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting task", error: error.message });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.json(tasks);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching tasks", error: error.message });
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  getAllTasks,
};
