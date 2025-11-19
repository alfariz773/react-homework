import axios from "axios";
import { Link } from "react-router-dom";

function ProductListItem({ product, refresh }) {
  if (!product) return null; // ✅ prevents crash

  function deleteProduct() {
    axios.delete("https://worksheet-catalogue.mashupstack.com/products/" + product.id)
      .then(() => {
        alert("Product deleted");
        refresh();
      })
      .catch(err => console.error(err));
  }

  return (
    <div className="card mb-2">
      <div className="card-body">
        <strong>{product.name || "Unnamed Product"}</strong>
        <p>
          Price: ₹{product.price ?? "N/A"} <br />
          Category: {product.category || "N/A"} <br />
          Quantity: {product.quantity ?? 0}
        </p>

        <button className="btn btn-danger float-right" onClick={deleteProduct}>Delete</button>
        <Link to={"/products/edit/" + product.id} className="btn btn-warning float-right mr-2">Edit</Link>
        <Link to={"/products/view/" + product.id} className="btn btn-info float-right">View</Link>
      </div>
    </div>
  );
}

export default ProductListItem;