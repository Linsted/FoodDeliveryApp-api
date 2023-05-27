const Shop = require("../models/shop");

const fetchAllShops = async (req, res, next) => {
  const allShops = await Shop.find();
  console.log("test");
  res.json(allShops);
};

module.exports = {
  fetchAllShops,
};
