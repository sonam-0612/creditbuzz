import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex bg-black shadow-md py-4 px-6 justify-between items-center">
        {/* Logo */}
        <div className="flex gap-5">
          <div className="bg-purple-700 w-10 h-10 rounded-full flex items-center justify-center">
            <div className="bg-white h-7 w-7 rounded-full"></div>
          </div>
          <p className="font-semibold text-xl text-white">
            Credit<span className="text-red-700">Buzz</span>
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-20 text-white">
          {["Credit Card", "Loan", "Insurance", "Saving", "Others"].map((menu, index) => (
            <div key={index} className="relative">
              <button
                className="hover:text-red-500 flex items-center gap-1"
                onClick={() => toggleDropdown(menu)}
              >
                {menu}
              </button>
              {openDropdown === menu && (
                <div className="absolute left-0 mt-2 w-48 bg-black shadow-lg rounded-lg py-2">
                  {menu === "Credit Card" && (
                    <>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-800">Platinum Card</a>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-800">Gold Card</a>
                    </>
                  )}
                  {menu === "Loan" && (
                    <>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-800">Home Loan</a>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-800">Car Loan</a>
                    </>
                  )}
                  {menu === "Insurance" && (
                    <>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-800">Health Insurance</a>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-800">Life Insurance</a>
                    </>
                  )}
                  {menu === "Others" && (
                    <>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-800">EMI</a>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-800">Blogs</a>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Login/Signup Button */}
        <button className="bg-white text-black px-4 py-2 rounded-full">
          <span className="hover:text-red-900 hover:cursor-pointer">Log In</span> | <span className="hover:text-red-900 hover:cursor-pointer">Sign Up</span>
        </button>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden bg-black shadow-md py-4 px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex gap-5">
          <div className="bg-purple-700 w-10 h-10 rounded-full flex items-center justify-center">
            <div className="bg-white h-7 w-7 rounded-full"></div>
          </div>
          <p className="font-semibold text-xl text-white">
            Credit<span className="text-red-700">Buzz</span>
          </p>
        </div>

        {/* Hamburger Menu */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white text-2xl">
          {mobileMenuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black text-white py-4 px-6 space-y-4">
          {["Credit Card", "Loan", "Insurance", "Saving", "Others"].map((menu, index) => (
            <div key={index}>
              <button
                className="w-full text-left hover:text-red-500"
                onClick={() => toggleDropdown(menu)}
              >
                {menu}
              </button>
              {openDropdown === menu && (
                <div className="mt-2 pl-4 space-y-2">
                  {menu === "Credit Card" && (
                    <>
                      <a href="#" className="block hover:text-red-500">Platinum Card</a>
                      <a href="#" className="block hover:text-red-500">Gold Card</a>
                    </>
                  )}
                  {menu === "Loan" && (
                    <>
                      <a href="#" className="block hover:text-red-500">Home Loan</a>
                      <a href="#" className="block hover:text-red-500">Car Loan</a>
                    </>
                  )}
                  {menu === "Insurance" && (
                    <>
                      <a href="#" className="block hover:text-red-500">Health Insurance</a>
                      <a href="#" className="block hover:text-red-500">Life Insurance</a>
                    </>
                  )}
                  {menu === "Others" && (
                    <>
                      <a href="#" className="block hover:text-red-500">EMI</a>
                      <a href="#" className="block hover:text-red-500">Blogs</a>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
          <button className="block w-full text-center bg-white text-black py-2 rounded-full">
          <span className="hover:text-red-900 hover:cursor-pointer">Log In</span> | <span className="hover:text-red-900 hover:cursor-pointer">Sign Up</span>
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
