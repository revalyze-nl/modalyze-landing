import React from "react";
import logo from "../assets/modalyze-logo.png"; // görseli import et

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-sm">
      <div className="flex items-center">
        <img src={logo} alt="Modalyze Logo" className="h-8 md:h-20 mt-10 ml-10" />
      </div>
      <nav className="hidden md:flex gap-6 items-center text-gray-700 text-sm mr-20">
        <a href="#about" className="hover:text-blue-600 transition">About</a>
        <a href="#pricing" className="hover:text-blue-600 transition">Pricing</a>
        <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        <button className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
          Sign up
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
