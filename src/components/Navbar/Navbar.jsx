import React, { useState } from "react";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-black shadow-md py-4 px-6 flex justify-between items-center relative">
      {/* Logo */}
      <div className='flex gap-5 py-4 md:py-2'>
          <div className='flex'>
            <div className='bg-purple-700 w-10 rounded-full'>
              <div className='bg-white m-1 h-7 w-7 rounded-full'></div>
            </div>
          </div>
          <p className='font-semibold text-xl text-white'>Credit<span className="text-red-700">Buzz</span></p>
        </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-16 relative text-white">
        {["Credit Card", "Loan", "Insurance", "Saving", "Others"].map((menu, index) => (
          <div key={index} className="relative">
            <button
              className="hover:text-red-500 hover:cursor-pointer flex items-center gap-1"
              onClick={() => toggleDropdown(menu)}
            >
              {menu} 
            </button>
            {openDropdown === menu && (
              <div className="absolute left-0 mt-2 w-48 shadow-lg rounded-lg py-2">
                {menu === "Credit Card" && (
                  <div className="bg-black">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-800 text-b">Platinum Card</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-800">Gold Card</a>
                    
                  </div>
                )}
                {menu === "Loan" && (
                  <div className="bg-black">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-800">Home Loan</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-800">Car Loan</a>
                  </div>
                )}
                {menu === "Insurance" && (
                  <div className="bg-black">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-800">Health Insurance</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-800">Life Insurance</a>
                  </div>
                )}
                {menu === "Others" && (
                  <div className="bg-black">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-800">EMI</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-800">Blogs</a>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Login/Signup Button */}
      <button className="bg-white text-black px-4 py-2 rounded-full">
        <span className="hover:cursor-pointer hover:text-red-800">Log In </span> / <span className="hover:cursor-pointer hover:text-red-800">Sign Up</span></button>
    </nav>
  );
};

export default Navbar;
