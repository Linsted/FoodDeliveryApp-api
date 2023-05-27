const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const Joi = require("joi");

const allowedShopNames = [
  "Fresh Delights",
  "Gourmet Haven",
  "Foodie's Paradise",
  "Tasty Treats",
  "Flavors Galore",
];

const orderSchema = new Schema(
  {
    shop: {
      type: String,
      required: true,
      enum: allowedShopNames,
    },
    products: [
      {
        type: String,
        required: true,
      },
    ],
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const joiOrderScheme = Joi.object({
  shop: Joi.string().required(),
  products: Joi.array().items(Joi.string().required()),
  email: Joi.string().email().required(),
  phoneNumber: Joi.string().required(),
  address: Joi.string().required(),
});

const Order = model("order", orderSchema);

module.exports = { Order, joiOrderScheme };
