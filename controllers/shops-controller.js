const Shop = require("../models/shop");
const { ctrlWrapper } = require("../decorators/ctrlWrapper");

const fetchAllShops = async (req, res, next) => {
  const allShops = await Shop.find();
  res.json(allShops);
};

const fetchShopById = async (req, res) => {
  const id = req.params.shopId;
  const shopById = await Shop.findById(id);
  if (!shopById) {
    throw HttpError(404);
  }
  res.json(shopById);
};

module.exports = {
  fetchAllShops: ctrlWrapper(fetchAllShops),
  fetchShopById: ctrlWrapper(fetchShopById),
};
