import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../navbar";

function ViewProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null); // start as null
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://worksheet-catalogue.mashupstack.com/products/" + id)
      .then(response => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="container mt-4">
          <h3>Loading product...</h3>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div>
        <Navbar />
        <div className="container mt-4">
          <h3>Product not found</h3>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h3>{product.name}</h3>
              </div>
              <div className="card-body">
                <p><strong>Price: </strong> ₹{product.price}</p>
                <p><strong>Category: </strong> {product.category}</p>
                <p><strong>Quantity: </strong> {product.quantity}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;