import React, { useState } from 'react';
import { Car } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex items-center">
        <Car className="w-8 h-8 mr-2" />
        <h1 className="text-2xl font-bold">TorqueX</h1>

        <div className="hidden lg:flex flex-grow justify-center">
          {/* Navigation Links */}
          <ul
            className={`hidden lg:flex space-x-8 text-white ml-auto ${
              isOpen ? 'block' : 'hidden'
            } lg:block`}
          >
            <li className="hover:text-gray-300">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="block lg:hidden ml-auto">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="space-y-4 text-white text-center mt-4">
          <li className="hover:text-gray-300">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray-300">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-gray-300">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
