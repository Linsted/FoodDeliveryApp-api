const { Schema, model } = require("mongoose");

const ShopSchema = new Schema({
  name: {
    type: String,
    required: true,
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

module.exports = Shop;
