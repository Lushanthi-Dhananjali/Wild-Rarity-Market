import React, { useState, useEffect } from "react";

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    category: "",
    new_price: 0,
    old_price: 0,
    image: "",
  });
  const [imageFile, setImageFile] = useState(null);

  // Fetch all products from backend
  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:4000/allproducts");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Fetch products error:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Upload image
  const uploadImage = async () => {
    if (!imageFile) return;
    const form = new FormData();
    form.append("product", imageFile);

    const res = await fetch("http://localhost:4000/upload", {
      method: "POST",
      body: form,
    });
    const data = await res.json();
    return data.image_path; // returns /images/filename
  };

  // Add new product
  const handleAddProduct = async () => {
    try {
      const imagePath = await uploadImage();
      const newProduct = { ...formData, image: imagePath };

      const res = await fetch("http://localhost:4000/addproduct", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });
      const data = await res.json();
      if (data.success) {
        fetchProducts();
        setFormData({ id: null, name: "", category: "", new_price: 0, old_price: 0, image: "" });
        setImageFile(null);
      }
    } catch (err) {
      console.error("Add product error:", err);
    }
  };

  // Update product
  const handleUpdateProduct = async () => {
    try {
      let imagePath = formData.image;
      if (imageFile) imagePath = await uploadImage();

      const updatedProduct = { ...formData, image: imagePath };
      const res = await fetch(`http://localhost:4000/updateproduct/${formData.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct),
      });
      const data = await res.json();
      if (data.success) {
        fetchProducts();
        setFormData({ id: null, name: "", category: "", new_price: 0, old_price: 0, image: "" });
        setImageFile(null);
      }
    } catch (err) {
      console.error("Update product error:", err);
    }
  };

  // Delete product
  const handleDeleteProduct = async (id) => {
    try {
      const res = await fetch("http://localhost:4000/removeproduct", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (data.success) fetchProducts();
    } catch (err) {
      console.error("Delete product error:", err);
    }
  };

  // Edit button click
  const handleEditClick = (product) => {
    setFormData(product);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Panel - Product Management</h1>

      {/* Product Form */}
      <div style={{ marginBottom: "30px" }}>
        <h2>{formData.id ? "Update Product" : "Add New Product"}</h2>
        <input
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          placeholder="Category"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        />
        <input
          placeholder="New Price"
          type="number"
          value={formData.new_price}
          onChange={(e) => setFormData({ ...formData, new_price: Number(e.target.value) })}
        />
        <input
          placeholder="Old Price"
          type="number"
          value={formData.old_price}
          onChange={(e) => setFormData({ ...formData, old_price: Number(e.target.value) })}
        />
        <input type="file" onChange={(e) => setImageFile(e.target.files[0])} />
        <button onClick={formData.id ? handleUpdateProduct : handleAddProduct}>
          {formData.id ? "Update Product" : "Add Product"}
        </button>
      </div>

      {/* Products List */}
      <div>
        <h2>All Products</h2>
        {products.map((p) => (
          <div key={p.id} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <img src={`http://localhost:4000${p.image}`} alt={p.name} width={60} height={60} />
            <p style={{ margin: "0 10px" }}>{p.name}</p>
            <p style={{ margin: "0 10px" }}>${p.new_price}</p>
            <p style={{ margin: "0 10px" }}>{p.category}</p>
            <button onClick={() => handleEditClick(p)} style={{ marginRight: "5px" }}>
              Edit
            </button>
            <button onClick={() => handleDeleteProduct(p.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
