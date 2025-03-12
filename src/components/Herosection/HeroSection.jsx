import React from 'react';
import { FaCreditCard, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import card from '../../assets/img/credit.webp';

const HeroSection = () => {
  return (
    <>
      <div className="md:flex mt-5 p-5 ml-5 justify-center md:space-x-28 relative">
        <div className="w-full">
          <h1 className="text-5xl font-semibold w-full px-2 mt-10">
            Take <span className="text-purple-500">Control</span> of Your  
            <span className="text-purple-500 ml-3">Credit</span> &  
            <span className="text-purple-500"> Financial Future</span>
          </h1>
          <div className="mt-4 space-y-10">
            <p className="md:w-[450px] text-gray-800">
              Unlock better financial opportunities with the right credit decisions.  
              Stay informed, stay ahead.
            </p>
            <div className="flex gap-8">
              <button className="bg-purple-800 p-3 px-6 rounded-md text-white hover:cursor-pointer hover:bg-purple-400 ">Order card</button>
              <button className="bg-purple-200 p-3 px-6 rounded-md text-purple-800 font-bold hover:cursor-pointer hover:bg-purple-400">How it works</button>
            </div>
          </div>
        </div>

        <div className="flex p-4 w-full justify-center relative">
          <img 
            src={card} 
            alt="Credit Card" 
            className="relative z-10 w-[400px] h-[400px] object-cover rounded-full shadow-lg shadow-purple-500" 
          />

          {/* Floating Elements */}
          <div className="absolute top-[50px] left-[-10px] bg-white shadow-md  border border-purple-300 rounded-lg p-4 flex items-center gap-4 z-20">
            <FaCreditCard className="text-purple-600 text-3xl" />
            <div>
              <p className="text-xl font-bold text-gray-800">5K+</p>
              <p className="text-sm text-gray-500">Credit Cards Issued</p>
            </div>
          </div>

          <div className="absolute bottom-[140px] right-[10px] bg-white shadow-md border border-purple-300 rounded-lg p-4 flex items-center gap-4 z-20">
            <FaChartLine className="text-purple-600 text-3xl" />
            <div>
              <p className="text-xl font-bold text-gray-800">10K+</p>
              <p className="text-sm text-gray-500">Financial Growth</p>
            </div>
          </div>

          
          <div className="absolute bottom-[-10px] left-[100px] bg-white shadow-md border border-purple-300 rounded-lg p-4 flex items-center gap-4 z-20 ">
            <FaShieldAlt className="text-purple-600 text-3xl" />
            <div>
              <p className="text-xl font-bold text-gray-800">Secure</p>
              <p className="text-sm text-gray-500">Reliable Transactions</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
