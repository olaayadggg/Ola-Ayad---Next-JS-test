"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import Link from "next/link";

interface ProductCardProps {
  product: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="p-4 rounded shadow">
      <Link href={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-100 object-contain"
        />
        <h3 className="text-lg font-bold mt-2 text-ellipsis overflow-hidden whitespace-nowrap">
          {product.title}
        </h3>
        <p >${product.price}</p>
        <p className="text-sm text-gray-500">{product.category}</p>
      </Link>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="bg-blue-500 cursor-pointer text-white px-4 py-2 mt-2 rounded w-full"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
