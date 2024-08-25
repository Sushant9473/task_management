const authService = require("../services/authService");

const register = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const user = await authService.register(username, password, role || "user");
    res
      .status(201)
      .json({ message: "User registered successfully", userId: user.id });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error registering user", error: error.message });
  }
};

const login = async (req, res) => {
  try {
    console.log(req.body);
    const { username, password } = req.body;
    const token = await authService.login(username, password);
    res.json({ token });
  } catch (error) {
    res.status(400).json({ message: "Error logging in", error: error.message });
  }
};

module.exports = {
  register,
  login,
};
