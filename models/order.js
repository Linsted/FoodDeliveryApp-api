const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const Joi = require("joi");

const orderSchema = new Schema(
  {
    shop: {
      type: String,
      required: true,
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "shop",
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
