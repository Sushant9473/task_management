const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

const register = async (username, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ username, password: hashedPassword });
  return user;
};

const login = async (username, password) => {
  const user = await User.findOne({ where: { username } });
  if (!user) {
    throw new Error("Invalid credentials");
  }
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    throw new Error("Invalid credentials");
  }
  const token = jwt.sign(
    { userId: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  return token;
};

module.exports = {
  register,
  login,
};
