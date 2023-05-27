const { Order, joiOrderScheme } = require("../models/order");

const addOrder = async (req, res, next) => {
  console.log("test order");
  res.json("test order");
};

module.exports = { addOrder };
