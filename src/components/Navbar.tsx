import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <a href="#home">MyLogo</a>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-white">
          <li className="hover:text-gray-300">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-gray-300">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-gray-300">
            <a href="#services">Services</a>
          </li>
          <li className="hover:text-gray-300">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
