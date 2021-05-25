const { DataTypes } = require("sequelize");
const dbConnection = require("../config/db");

const Commentary = dbConnection.define("Commentary", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
  },
});

module.exports = Commentary;
