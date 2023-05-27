const express = require("express");
const router = express.Router();

const {
  fetchAllShops,
  fetchShopById,
} = require("../controllers/shops-controller");

router.get("/", fetchAllShops);
router.get("/:shopId", fetchShopById);

module.exports = router;
