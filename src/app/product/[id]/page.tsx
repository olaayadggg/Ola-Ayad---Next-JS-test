"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { addToCart } from "@/store/cartSlice";
import { FaShippingFast } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { BsShieldLockFill } from "react-icons/bs";

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.items);
  const product = products.find((p) => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);

  if (!product)
    return <p className="text-center text-gray-600">Product not found.</p>;

  return (
    <main className="container mx-auto p-6 mt-5">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-md object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="lg:w-1/2">
          <p className="text-gray-600 mb-2">Fasco</p>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-2xl font-bold">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-lg text-gray-600 line-through">
              ${(product.price * 1.2).toFixed(2)}
            </span>
            <span className="text-sm bg-red-600 text-white px-2 py-1 rounded-full">
              SAVE 20%
            </span>
          </div>

          <p className="mt-4">{product.description}</p>

          <p className="mt-8 text-gray-600 font-semibold">
            Only <span className="font-bold">9</span> item(s) left in stock!
          </p>

          <div className="mt-8">
            <span className="block mb-2 font-medium">Quantity</span>
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-md px-2 py-1.5">
                <button
                  onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                  className="px-3 text-lg font-semibold text-gray-700 hover:text-black"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  readOnly
                  className="w-12 text-center bg-transparent border-none focus:outline-none"
                />
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="px-3 cursor-pointer text-lg font-semibold text-gray-700 hover:text-black"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => dispatch(addToCart({ ...product }))}
                className="border cursor-pointer border-gray-700 text-gray-700 hover:bg-gray-100 px-6 py-2 rounded-md font-semibold w-full "
              >
                Add to cart
              </button>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-gray-600 cursor-pointer">
            <IoIosShareAlt size={20} />
            <span>Share</span>
          </div>

          <div className="mt-6 border-t pt-4 text-gray-700 space-y-3">
            <div className="flex items-center gap-2">
              <FaShippingFast size={20} />
              <span>Estimated Delivery: Jul 30 - Aug 03</span>
            </div>
            <div className="flex items-center gap-2">
              <BsShieldLockFill size={20} className="text-green-600" />
              <span>Free Shipping & Returns on all orders over $75</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage;
