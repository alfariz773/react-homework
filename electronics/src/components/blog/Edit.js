import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../navbar";

function EditProduct() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://worksheet-catalogue.mashupstack.com/products/" + id)
      .then(response => {
        const data = response.data;
        setName(data.name);
        setPrice(data.price);
        setCategory(data.category);
        setQuantity(data.quantity);
      })
      .catch(err => console.error(err));
  }, [id]);

  function updateProduct() {
    axios.put("https://worksheet-catalogue.mashupstack.com/products/" + id, {
      name,
      price: parseFloat(price),
      category,
      quantity: parseInt(quantity)
    })
    .then(() => {
      alert("Product updated");
      navigate("/products");
    })
    .catch(err => console.error(err));
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2 className="text-center mt-4">Edit Product</h2>

        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Category:</label>
          <input
            type="text"
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Quantity:</label>
          <input
            type="number"
            className="form-control"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        <button className="btn btn-primary mt-3" onClick={updateProduct}>
          Update
        </button>
      </div>
    </div>
  );
}

export default EditProduct;