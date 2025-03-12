import React from "react";

const StepsSection = () => {
  return (
    <>
    <section className="py-16 px-6 md:px-20 bg-gray-400 text-gray-800 text-center">
      <h2 className="text-3xl font-bold mb-6">Getting the Card</h2>
      <div className="flex flex-col md:flex-row justify-around">
        <div>
          <h3 className="text-4xl font-semibold"><a href="#">📄</a></h3>
          <h3 className="text-xl font-semibold">Online Application</h3>
          <p>Fill in the form and apply online.</p>
        </div>
        <div>
          <h3 className="text-4xl font-semibold"><a href="#">✔</a></h3>
          <h3 className="text-xl font-semibold">Get Approval</h3>
          <p>We will inform you immediately.</p>
        </div>
        <div>
          <h3 className="text-4xl font-semibold"><a href="#">🚚</a></h3>
          <h3 className="text-xl font-semibold">Card Delivery</h3>
          <p>Get your card delivered at home.</p>
        </div>
      </div>
    </section>
    <div className="bg-gradient-to-r from-blue-600 via-yellow-500 to-green-500 text-transparent bg-clip-text">
    Copyright &copy;2025; All rights reserved</div>
    </>
  );
};

export default StepsSection;

