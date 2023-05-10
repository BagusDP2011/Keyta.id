const User = require("../models/user");
const httpStatus = require("http-status");
const ct = require("countries-and-timezones");
const { getCode } = require("country-list");

const register = async (req, res) => {
  try {
    const { first_name, last_name, dob, location, timezone } = req.body;
    if (!req.body.timezone) {
      const locationCode = getCode(location);
      const country = ct.getCountry(locationCode);
      const timezoneAuto = country.timezones[0].toString();
      req.body.timezone = timezoneAuto;
    }
    const user = await User.create({
      first_name,
      last_name,
      dob,
      location,
      timezone,
    });
    res.status(httpStatus.CREATED).send(user);
  } catch (error) {
    console.log(error);
    res
      .status(httpStatus.BAD_REQUEST)
      .send(
        "Bad Request. Internal problem while creating user. Maybe location is not in our book"
      );
  }
};

const deleteUser = async (req, res) => {
  const user = await User.destroy({ where: { id: req.params.id } });
  if (!user) {
    throw new Error(`User ${req.params.id} not found`);
  }
  res.status(httpStatus.NO_CONTENT).send();
};

const putUser = async (req, res) => {
  try {
    const { first_name, last_name, bod, location } = req.body;
    const user = User.update(
      { first_name, last_name, bod, location },
      { where: { id: req.params.id } }
    );
    if (!user) {
      throw new Error(`User ${req.params.id} not found`);
    }
    res.status(httpStatus.OK).send(user);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  register,
  deleteUser,
  putUser,
};
