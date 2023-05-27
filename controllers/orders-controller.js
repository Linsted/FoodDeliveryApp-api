const { Order, joiOrderScheme } = require("../models/order");
const { ctrlWrapper } = require("../decorators/ctrlWrapper");

const { HttpError } = require("../helpers/httpError");

const addOrder = async (req, res) => {
  console.log(req.body);
  const { error } = joiOrderScheme.validate(req.body, { abortEarly: false });
  if (error) {
    throw HttpError(400, "Missing required field");
  }
  const newOrder = await Order.create(req.body);
  res.status(201).json(newOrder);
};

module.exports = { addOrder: ctrlWrapper(addOrder) };
