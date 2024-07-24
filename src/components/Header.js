
import React from 'react';
import logo from 'C:/Users/aryan/Downloads/New folder (2)/envo-safe-shop/src/components/envosafelogo.png';

const Header = () => {
  return (
    <header className="bg-[#43A047] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="Envo Safe Logo" className="h-20" />
        <nav>
          <ul className="flex space-x-4">
            <li className="hover:text-gray-400"><a href="#">Home</a></li>
            <li className="hover:text-gray-400"><a href="#">Products</a></li>
            <li className="hover:text-gray-400"><a href="#">About</a></li>
            <li className="hover:text-gray-400"><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
