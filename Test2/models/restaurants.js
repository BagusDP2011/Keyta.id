const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("keyta", "root", "password", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

const Restaurants = sequelize.define(
  "Restaurants",
  {
    //   id: {
    //     type: DataTypes.INTEGER,
    //     autoIncrement: true,
    //     allowNull: false,
    //     primaryKey: true,
    //   },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    balance: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    business_hours: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    menu: {
      type: DataTypes.ARRAY(Sequelize.STRING),
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Restaurants;

(async () => {
  await sequelize.sync({ force: false });
  console.log("User restaurants were synchronized successfully.");
})();
