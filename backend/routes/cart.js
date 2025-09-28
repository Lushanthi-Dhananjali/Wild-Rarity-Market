const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");

// GET cart by userId
router.get("/:userId", async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.json(cart || { userId: req.params.userId, items: [] });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch cart" });
  }
});

// POST cart (Add or Update)
router.post("/:userId", async (req, res) => {
  try {
    const { items } = req.body;
    let cart = await Cart.findOne({ userId: req.params.userId });

    if (!cart) {
      cart = new Cart({ userId: req.params.userId, items });
    } else {
      cart.items = items;
    }

    await cart.save();
    res.json({ success: true, cart });
  } catch (err) {
    res.status(500).json({ error: "Failed to update cart" });
  }
});

// DELETE single item from cart
router.delete("/:userId/:productId", async (req, res) => {
  try {
    let cart = await Cart.findOne({ userId: req.params.userId });
    if (!cart) return res.status(404).json({ error: "Cart not found" });

    cart.items = cart.items.filter(item => item.productId !== Number(req.params.productId));
    await cart.save();

    res.json({ success: true, cart });
  } catch (err) {
    res.status(500).json({ error: "Failed to remove item" });
  }
});

// DELETE entire cart
router.delete("/:userId", async (req, res) => {
  try {
    await Cart.findOneAndDelete({ userId: req.params.userId });
    res.json({ success: true, message: "Cart cleared" });
  } catch (err) {
    res.status(500).json({ error: "Failed to clear cart" });
  }
});

module.exports = router;
