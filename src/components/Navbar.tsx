"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  FiSearch,
  FiUser,
  FiStar,
  FiShoppingCart,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {
  const cartCount = useSelector((state: RootState) => state.cart.items.length);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-3xl font-bold tracking-wide">FASCO</h1>
        </Link>

        <div className="hidden md:flex gap-8 text-lg">
          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link href="/" className="hover:text-blue-500">
            Shop
          </Link>
          <Link href="/" className="hover:text-blue-500">
            Products
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6 text-xl">
          <FiSearch className="cursor-pointer hover:text-blue-500" />
          <FiUser className="cursor-pointer hover:text-blue-500" />
          <FiStar className="cursor-pointer hover:text-blue-500" />
          <Link href="/cart" className="relative">
            <FiShoppingCart className="cursor-pointer hover:text-blue-500" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center gap-4 text-lg">
          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>
          <FiSearch className="cursor-pointer hover:text-blue-500" />
          <FiUser className="cursor-pointer hover:text-blue-500" />
          <FiStar className="cursor-pointer hover:text-blue-500" />
          <Link href="/cart" className="relative flex items-center gap-2">
            <FiShoppingCart className="cursor-pointer hover:text-blue-500" />
            {cartCount > 0 && (
              <span className="bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
