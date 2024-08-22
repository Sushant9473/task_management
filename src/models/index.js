const sequelize = require("../config/database");
const User = require("./User");
const Task = require("./Task");

User.hasMany(Task);
Task.belongsTo(User);

module.exports = {
  sequelize,
  User,
  Task,
};
