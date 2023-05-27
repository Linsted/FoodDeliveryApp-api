const { model } = require("mongoose");
const { Shop } = require("../models/order");

const fetchAllShops = (req, res, next) => {
  console.log("test");
  res.json("test");
};

module.exports = {
  fetchAllShops,
};
