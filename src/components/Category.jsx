import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../../useLocalStorage";
import { FaSortAmountUp, FaSortAmountDown, FaRupeeSign } from "react-icons/fa";

const Category = ({ searchText }) => {
  const Url = "https://dummyjson.com/products";

  const [product, setProduct] = useLocalStorage("products", []);
  const [sorting, setSorting] = useLocalStorage("sorting", "");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (product.length > 0) {
      setLoading(false);
      return;
    }

    fetch(Url)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json.products || []);
        setLoading(false);
      })
      .catch(() => {
        setProduct([]);
        setLoading(false);
      });
  }, []);

  const sortPrice = (type) => {
    let sorted = [...product];

    if (type === "high") sorted.sort((a, b) => b.price - a.price);
    if (type === "low") sorted.sort((a, b) => a.price - b.price);

    setProduct(sorted);
    setSorting(type);
  };

  const filtered = product.filter((p) =>
    (p?.title || "").toLowerCase().includes((searchText || "").toLowerCase())
  );

  if (loading) return <div className="p-6 text-center">Loading products...</div>;

  return (
    <div className="p-4 max-w-[1200px] mx-auto">
      
      {/* SORT BAR */}
      <div className="bg-white shadow-sm rounded-xl p-4 mb-6 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <FaRupeeSign className="text-green-600" />
          Sort By Price
        </h2>

        <div className="flex gap-3">
          <button
            onClick={() => sortPrice("low")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition
              ${sorting === "low"
                ? "bg-green-600 text-white"
                : "bg-gray-50 hover:bg-gray-100"}`}
          >
            <FaSortAmountDown />
            Low to High
          </button>

          <button
            onClick={() => sortPrice("high")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition
              ${sorting === "high"
                ? "bg-green-600 text-white"
                : "bg-gray-50 hover:bg-gray-100"}`}
          >
            <FaSortAmountUp />
            High to Low
          </button>
        </div>
      </div>

      {/* PRODUCTS */}
      <h1 className="font-bold text-2xl mb-4">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filtered.map((item) => (
          <Link key={item.id} to={`/product/${item.id}`}>
            <div className="bg-white rounded-xl shadow hover:shadow-xl transition duration-300 overflow-hidden group">
              
              <div className="relative">
                {item.thumbnail ? (
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                    No Image
                  </div>
                )}

                <span className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  ₹ {item.price}
                </span>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-800 truncate">
                  {item.title || "No title"}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
