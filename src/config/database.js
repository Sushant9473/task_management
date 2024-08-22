const { Sequelize } = require("sequelize");

// Log the DATABASE_URL to ensure it's being loaded correctly
console.log("DATABASE_URL:", process.env.DATABASE_URL);

let sequelize;

try {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    logging: false,
  });
  console.log("Sequelize initialized successfully");
} catch (error) {
  console.error("Error initializing Sequelize:", error);
}

module.exports = sequelize;
