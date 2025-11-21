import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../Navbar";

function Viewproduct() {

  const { id } = useParams();

  const product = useSelector((s) =>
    s.product.list.find((p) => p.id === id)
  );

  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h2>{product.name}</h2>
        <p><b>Description:</b> {product.description}</p>
        <p><b>Price:</b> {product.price}</p>
        <p><b>Quantity:</b> {product.quantity}</p>
      </div>
    </div>
  );
}

export default Viewproduct;
