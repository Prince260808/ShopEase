import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Category = ({ searchText }) => {
  const Url = "https://dummyjson.com/products";
  const [product, setProduct] = useState([]);
  const [sorting, setSorting] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch products
  useEffect(() => {
    fetch(Url)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json.products || []);
        setLoading(false);
      })
      .catch(() => setProduct([]));
  }, []);

  // Sort function
  const sortPrice = (type) => {
    let sorted = [...product];
    if (type === "high") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (type === "low") {
      sorted.sort((a, b) => a.price - b.price);
    }
    setProduct(sorted);
  };

  const filtered = product.filter((p) =>
    (p?.title || "").toLowerCase().includes((searchText || "").toLowerCase())
  );
  

  if (loading) return <div className="p-4">Loading products...</div>;

  return (
    <div className="p-4 max-w-[1200px] mx-auto">
      {/* Sort Dropdown */}
      <select
        value={sorting}
        onChange={(e) => {
          setSorting(e.target.value);
          sortPrice(e.target.value);
        }}
        className="mb-4 p-2 border rounded-md"
      >
        <option value="">Sort By Price</option>
        <option value="high">Highest Price</option>
        <option value="low">Lowest Price</option>
      </select>

      <h1 className="font-bold text-2xl mb-4">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((item) => (
          <Link key={item.id} to={`/product/${item.id}`}>
            <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <h3 className="font-semibold mb-2">{item.title || "No title"}</h3>
              {item.thumbnail ? (
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-48 object-cover mb-2"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 mb-2 flex items-center justify-center">
                  No Image
                </div>
              )}
              <span>
                <b>RS {item.price || 0}</b>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
