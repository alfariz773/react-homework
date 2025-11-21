import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../store/productSlice";
import { useNavigate } from "react-router-dom";

function ListProduct() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((s) => s.auth.user?.token);
  const products = useSelector((s) => s.product.list);

  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState([]);

  function fetchProducts() {
    axios
      .get("https://worksheet-product.mashupstack.com/product", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        dispatch(setProducts(res.data));
        setFiltered(res.data);
      });
  }

  // eslint-disable-next-line
  useEffect(() => {
    if (token) {
      fetchProducts();
    } else {
      navigate("/login");
    }
  }, [token]);

  function handleSearch() {
    if (searchTerm.trim() === "") setFiltered(products);
    else
      setFiltered(
        products.filter((p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
  }

  return (
    <div>
      <Navbar />
      <div className="container mt-4">

        <h2>Product Catalog</h2>

        <input
          className="form-control"
          placeholder="Search product name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button className="btn btn-success mt-2" onClick={handleSearch}>
          Search
        </button>
        
        <ul className="list-group mt-3">
          {filtered.map((product) => (
            <li key={product.id}
                className="list-group-item d-flex justify-content-between">
              <div>
                <b>{product.name}</b>
                <p>{product.description}</p>
              </div>

              <button
                className="btn btn-primary"
                onClick={() => navigate(`/products/view/${product.id}`)}
              >
                View
              </button>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default ListProduct;