import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar";
import ProductListItem from "./productListItem";

function ListProducts() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function fetchProducts() {
    axios.get("https://worksheet-catalogue.mashupstack.com/products")
      .then(response => {
        console.log("API response:", response.data); 
        setProducts(response.data);
        setFiltered(response.data);
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  function handleSearch() {
    if (searchTerm.trim() === "") {
      setFiltered(products);
    } else {
      const result = products.filter(p =>
        p?.name?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFiltered(result);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h2>Product Catalog</h2>

        <input
          type="text"
          placeholder="Search product name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        /> &nbsp;
        <button className="btn btn-success" onClick={handleSearch}>Search</button>

        <br /><br />

        <Link to="/products/create" className="btn btn-primary mb-3">Add Product</Link>

        {Array.isArray(filtered) && filtered.length > 0 ? (
          filtered.map(product => (
            <ProductListItem
              key={product.id}
              product={product}
              refresh={fetchProducts}
            />
          ))
        ) : (
          <p>No matching products found.</p>
        )}
      </div>
    </div>
  );
}

export default ListProducts;