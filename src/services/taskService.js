const { Op } = require("sequelize");
const { Task, User } = require("../models");

const createTask = async (taskData, userId) => {
  const task = await Task.create({ ...taskData, UserId: userId });
  return task;
};

const getTasks = async (userId, filters, pagination) => {
  const where = { UserId: userId };

  if (filters.status) where.status = filters.status;
  if (filters.priority) where.priority = filters.priority;
  if (filters.dueDate) where.dueDate = filters.dueDate;
  if (filters.search) {
    where[Op.or] = [
      { title: { [Op.iLike]: `%${filters.search}%` } },
      { description: { [Op.iLike]: `%${filters.search}%` } },
    ];
  }

  const { count, rows } = await Task.findAndCountAll({
    where,
    ...pagination,
    order: [["createdAt", "DESC"]],
  });

  return { tasks: rows, totalCount: count };
};

const updateTask = async (taskId, userId, updates) => {
  const task = await Task.findOne({ where: { id: taskId, UserId: userId } });
  if (!task) {
    throw new Error("Task not found");
  }
  await task.update(updates);
  return task;
};

const deleteTask = async (taskId, userId) => {
  const task = await Task.findOne({ where: { id: taskId, UserId: userId } });
  if (!task) {
    throw new Error("Task not found");
  }
  await task.destroy();
};

const getAllTasks = async () => {
  return Task.findAll({ include: User });
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  getAllTasks,
};
