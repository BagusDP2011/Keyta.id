const Restaurants = require("../models/restaurants");
const httpStatus = require("http-status");

const getRestaurants = async (req, res) => {
  try {
    const { minimumPrice, maximumPrice } = req.body;
    const restaurants = await Restaurants.findAll({});

    const results = restaurants.map((restaurant) => {
      return {
        name: restaurant.name,
        location: restaurant.location,
        business_hours: restaurant.business_hours,
        dishes: restaurant.menu.map((menu) => {
          if (
            Number(menu.price) >= Number(minimumPrice) &&
            Number(menu.price) <= Number(maximumPrice)
          ) {
            return { name: menu.name, price: menu.price };
          }
        }),
      };
    });
    res.status(httpStatus.OK).send(results);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getRestaurants,
};
