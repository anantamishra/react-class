import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="flex w-full justify-center bg-white shadow-lg py-6">
      <div className="flex justify-between w-[90%] items-center">
        <img src="/logo512.png" alt="" className="h-12" />
        <ul className="flex gap-8 font-semibold">
          <li className="cursor-pointer hover:text-gray-500">
            <Link to="/home">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-500">About</li>
          <li className="cursor-pointer hover:text-gray-500">Services</li>
          <li className="cursor-pointer hover:text-gray-500">FAQs</li>
          <li className="cursor-pointer hover:text-gray-500">Privacy Policy</li>
          <li className="cursor-pointer hover:text-gray-500">Contact Us</li>
        </ul>
        <Link to="/login">
          <button className="text-white font-bold  bg-blue-700 px-8 py-3 rounded-full">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}
