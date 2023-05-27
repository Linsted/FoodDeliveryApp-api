const express = require("express");
const router = express.Router();

const { fetchAllShops } = require("../controllers/shops-controller");

router.get("/", fetchAllShops);

module.exports = router;
