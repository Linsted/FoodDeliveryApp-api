const { Schema, model } = require("mongoose");

const allowedShopNames = [
  "Fresh Delights",
  "Gourmet Haven",
  "Foodie's Paradise",
  "Tasty Treats",
  "Flavors Galore",
];

const ShopSchema = new Schema({
  name: {
    type: String,
    required: true,
    enum: allowedShopNames,
  },
  products: [
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      description: String,
    },
  ],
});
const Shop = model("shop", ShopSchema);

module.exports = { Shop };
