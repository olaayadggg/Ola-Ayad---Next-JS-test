"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { fetchProducts } from "@/store/productsSlice";
import ProductCard from "./ProductCard";
import Link from "next/link";

const ProductList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    items: products,
    status,
    error,
  } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 mt-5">
      {products.map((product) => (
        <div key={product.id} >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
