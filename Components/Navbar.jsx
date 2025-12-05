"use client";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex py-4 px-6 shadow-md justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">Todo App</h1>

      <ul className="flex gap-10 text-lg">
        <li className="cursor-pointer hover:text-blue-500">Home</li>
        <li className="cursor-pointer hover:text-blue-500">Products</li>
        <li className="cursor-pointer hover:text-blue-500">About</li>
        <li className="cursor-pointer hover:text-blue-500">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
