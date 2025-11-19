import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar";

function CreateProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");

  const navigate = useNavigate();

  function addProduct() {
    axios.post("https://worksheet-catalogue.mashupstack.com/products", {
      name,
      price: parseFloat(price),
      category,
      quantity: parseInt(quantity)
    })
    .then(() => {
      alert("Product added");
      navigate("/products");
    })
    .catch(err => console.error(err));
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2 className="text-center mt-4">Add Product</h2>

        <div className="form-group">
          <label>Name:</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Price:</label>
          <input type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Category:</label>
          <input type="text" className="form-control" value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Quantity:</label>
          <input type="number" className="form-control" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </div>

        <button className="btn btn-primary mt-3" onClick={addProduct}>Submit</button>
      </div>
    </div>
  );
}

export default CreateProduct;