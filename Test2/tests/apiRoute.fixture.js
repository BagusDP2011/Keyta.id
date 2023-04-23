const User = require("../models/user");

const newUser = {
  id: 1,
  first_name: "John",
  last_name: "Lenon",
  dob: "2023-04-23",
  location: "Indonesia",
  createdAt: "2023-04-23",
  timezone: "Asia/Jakarta",
  isJobSchedule: false,
};

const insertUser = async (user) => {
  await User.bulkCreate(user);
};

module.exports = {
  newUser,
  insertUser,
};
