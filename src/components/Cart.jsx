import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cart, removeFromCart, incrementQty, decrementQty, } = useContext(CartContext);

  // Total price
  const totalPrice = cart.reduce((acc, item) => {
    const discountedPrice = item.price - (item.price * item.discountPercentage / 100);
    return acc + discountedPrice * item.qty;
  }, 0);
  

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-3">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="border p-3 mb-2 rounded flex justify-between items-center"
            >
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p>Qty: {item.qty}</p>
                <p>Price: ₹{item.price}</p>
                <p>Discount: {item.discountPercentage}%</p>
              </div>
              <div>
              <button
                onClick={() => incrementQty(item.id)}
                className="bg-gray-200 px-2 rounded hover:bg-gray-300"
              >+</button>
              
               <button onClick={() => decrementQty(item.id)} className="bg-gray-200 px-2 rounded hover:bg-gray-300 ms-4">-</button>
               </div>
              <button
                className="bg-red-500 text-white px-2 rounded"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          <h2 className="mt-4 font-bold text-lg">Total: ₹{totalPrice}</h2>
        </>
      )}
    </div>
  );
};

export default Cart;
