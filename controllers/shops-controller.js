const Shop = require("../models/shop");
const { ctrlWrapper } = require("../decorators/ctrlWrapper");

const fetchAllShops = async (req, res, next) => {
  const allShops = await Shop.find();
  res.json(allShops);
};

module.exports = {
  fetchAllShops: ctrlWrapper(fetchAllShops),
};
