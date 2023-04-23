const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("keyta", "root", "password", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dob: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  timezone: {
    type: DataTypes.STRING,
  },
  isJobScheduled: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }
});

module.exports = User;

(async () => {
  await sequelize.sync({ force: false });
  console.log('User models were synchronized successfully.');
})();