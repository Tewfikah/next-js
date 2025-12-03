"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full shadow-md bg-white">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-600">Todo App</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-lg font-medium">
          <li className="hover:text-blue-600 transition"><Link href="/">Home</Link></li>
          <li className="hover:text-blue-600 transition"><Link href="/products">Products</Link></li>
          <li className="hover:text-blue-600 transition"><Link href="/about">About</Link></li>
          <li className="hover:text-blue-600 transition"><Link href="/contact">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="flex flex-col md:hidden bg-gray-100 px-6 py-4 gap-4 text-lg font-medium">
          <li className="hover:text-blue-600 transition"><Link href="/">Home</Link></li>
          <li className="hover:text-blue-600 transition"><Link href="/products">Products</Link></li>
          <li className="hover:text-blue-600 transition"><Link href="/about">About</Link></li>
          <li className="hover:text-blue-600 transition"><Link href="/contact">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
