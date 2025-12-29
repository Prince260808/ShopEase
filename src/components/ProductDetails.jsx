import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import { CartContext } from "./CartContext";
import { useLocalStorage } from "../../useLocalStorage";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useLocalStorage("product",[]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <h1>Loading...</h1>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} width="300" className="my-4" />
      <p>{product.description}</p>
      <p className="font-semibold mt-2">Brand: {product.brand}</p>
      <p className="font-semibold">Category: {product.category}</p>
      <p className="font-semibold">Price: ₹{product.price}</p>
      <p className="font-semibold">Stock: {product.stock}</p>
      <p className="font-semibold">Rating: {product.rating}</p>
      <p className="font-semibold">Discount: {product.discountPercentage}%</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
