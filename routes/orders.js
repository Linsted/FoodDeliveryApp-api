const express = require("express");
const router = express.Router();
const { addOrder } = require("../controllers/orders-controller");

router.post("/", addOrder);
module.exports = router;
