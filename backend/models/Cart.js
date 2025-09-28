// models/Cart.js
const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // or guest id
  items: [
    {
      productId: Number,
      quantity: Number,
    },
  ],
});

module.exports = mongoose.model("Cart", CartSchema);