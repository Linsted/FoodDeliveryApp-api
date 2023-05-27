const { Schema, model } = require("mongoose");

const orderSchema = new Schema({});

const Order = model("order", orderSchema);
