"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Tasks", "UserId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Users", // Name of the table that UserId references
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Tasks", "UserId");
  },
};
