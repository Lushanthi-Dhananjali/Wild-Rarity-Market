const port = 5000;
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const app = express();

const cartRoutes = require("./routes/cart");
app.use("/cart", cartRoutes);



// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(
   "mongodb+srv://lushanthidananjali5:Lushanthi@cluster0.0y0jhhs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

)
.then(() => console.log(" MongoDB Connected"))
.catch((err) => console.error(" MongoDB Connection Error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("Express App is running");
});

// Multer storage config (for images)
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  },
});
const upload = multer({ storage });

// Serve images folder
app.use("/images", express.static("upload/images"));

// Image upload route
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: true,
    image_path: `/images/${req.file.filename}` // relative path only
  });
});

// Product Schema
const Product = mongoose.model("Product", {
  id: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true }, // only path
  category: { type: String, required: true },
  new_price: { type: Number, required: true },
  old_price: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  available: { type: Boolean, default: true },
});

// Create - Add product
app.post("/addproduct", async (req, res) => {
  try {
    let products = await Product.find({});
    let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;

    const product = new Product({
      id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    });

    await product.save();
    console.log(" Product Saved:", product.name);

    res.json({ success: true, product });
  } catch (err) {
    console.error(" Add Product Error:", err);
    res.status(500).json({ success: false, message: "Error adding product" });
  }
});

// Read - Get all products
app.get("/allproducts", async (req, res) => {
  try {
    let products = await Product.find({});
    console.log(" All Products Fetched");
    res.json(products);
  } catch (err) {
    console.error(" Fetch Products Error:", err);
    res.status(500).json({ success: false, message: "Error fetching products" });
  }
});

// Update - Edit product
app.put("/updateproduct/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    console.log(`✏️ Product Updated: ID ${req.params.id}`);
    res.json({ success: true, product: updatedProduct });
  } catch (err) {
    console.error(" Update Product Error:", err);
    res.status(500).json({ success: false, message: "Error updating product" });
  }
});

// Delete - Remove product
app.post("/removeproduct", async (req, res) => {
  try {
    await Product.findOneAndDelete({ id: req.body.id });
    console.log(` Product Removed: ID ${req.body.id}`);

    res.json({ success: true });
  } catch (err) {
    console.error(" Remove Product Error:", err);
    res.status(500).json({ success: false, message: "Error removing product" });
  }
});

// Start server
app.listen(port, (error) => {
  if (!error) {
    console.log(` Server Running on Port ${port}`);
  } else {
    console.log(" Server Error:", error);
  }
});
