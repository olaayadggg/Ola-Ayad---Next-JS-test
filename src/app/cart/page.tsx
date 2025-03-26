"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { removeFromCart, clearCart } from "@/store/cartSlice";

const CartPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="border-t border-gray-300">
          <div className="w-full">
            <div className="grid grid-cols-5 py-4 font-semibold text-gray-700">
              <span className="col-span-2">Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Total</span>
            </div>

            {cartItems.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-5 items-center border-t py-4"
              >
                <div className="flex items-center col-span-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded mr-4"
                  />
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="text-sm cursor-pointer text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <p className="text-gray-700">${item.price.toFixed(2)}</p>

                <div className="flex items-center space-x-2 border rounded w-fit px-2 py-1">
                  <button className="px-2">-</button>
                  <span>1</span>
                  <button className="px-2">+</button>
                </div>

                <p className="text-gray-700">${item.price}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center mt-6 border-t border-gray-300 pt-4">
            <input type="checkbox" className="mr-2" id="gift-wrap" />
            <label htmlFor="gift-wrap" className="text-gray-700">
              For <span className="font-bold">$10.00</span> Please Wrap The Product
            </label>
          </div>

          <div className="mt-6 flex justify-between items-center border-t border-gray-300 pt-4">
            <p className="text-lg font-semibold">Subtotal</p>
            <p className="text-xl font-bold">$100.00</p>
          </div>

          <button className="w-full bg-black cursor-pointer text-white py-3 rounded mt-4 text-lg">
            Checkout
          </button>
        </div>
      )}
    </main>
  );
};

export default CartPage;
