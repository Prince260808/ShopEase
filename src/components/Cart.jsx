import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cart, removeFromCart, incrementQty, decrementQty } =
    useContext(CartContext);

  const totalPrice = cart.reduce((acc, item) => {
    const discountedPrice =
      item.price - (item.price * item.discountPercentage) / 100;
    return acc + discountedPrice * item.qty;
  }, 0);

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-5">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-center mt-10">
          Your cart is empty 🛒
        </p>
      ) : (
        <>
          {cart.map((item) => {
            const discountedPrice =
              item.price - (item.price * item.discountPercentage) / 100;

            return (
              <div
                key={item.id}
                className="border rounded-xl p-4 mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-sm"
              >
                {/* Product Info */}
                <div className="flex-1">
                  <h2 className="font-semibold text-lg">{item.title}</h2>

                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-green-600 font-semibold">
                      ₹{discountedPrice.toFixed(0)}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      ₹{item.price}
                    </span>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                      {item.discountPercentage}% OFF
                    </span>
                  </div>
                </div>

                {/* Quantity Controller */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => decrementQty(item.id)}
                    className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-xl hover:bg-gray-300 transition"
                  >
                    −
                  </button>

                  <span className="w-6 text-center font-semibold">
                    {item.qty}
                  </span>

                  <button
                    onClick={() => incrementQty(item.id)}
                    className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-xl hover:bg-gray-300 transition"
                  >
                    +
                  </button>
                </div>

                {/* Stylish Green Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="border border-green-600 text-green-600 px-4 py-1.5 rounded-full font-medium hover:bg-green-600 hover:text-white transition self-start md:self-auto"
                >
                  Remove
                </button>
              </div>
            );
          })}

          {/* Cart Total */}
          <div className="mt-6 flex justify-end">
            <div className="bg-green-50 border border-green-200 px-6 py-3 rounded-xl">
              <span className="text-gray-600 mr-2">Total:</span>
              <span className="text-xl font-bold text-green-700">
                ₹{totalPrice.toFixed(0)}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
