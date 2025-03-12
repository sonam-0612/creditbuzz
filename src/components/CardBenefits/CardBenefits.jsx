import React from "react";
import card from "../../assets/img/creditcard.jpg";

const CardBenefits = () => {
    return (
        <section className="py-16 px-6 md:px-20 bg-gray-100 text-gray-800 flex flex-col items-center mt-5">

            <div className="flex justify-between md:justify-center md:space-x-56 w-full">
                <div>
                   
                    <img
                        src={card}
                        alt="Credit Card"
                        className="w-80 md:w-[500px] mb-6 shadow-lg rounded-lg"
                    />
                </div>

                <div>
                    <div>
                    
                        <h2 className="text-3xl font-bold mb-6">Card Benefits</h2>
                        {/* Benefits List */}
                        <ul className="list-disc ml-6 space-y-2 text-left">
                            <li>Up to <span className="text-green-700 font-bold">3%</span> rebate on Online Fashion and Travel</li>
                            <li>Up to<span className="text-green-700 font-bold">16% </span> rebate on Dining & Entertainment</li>
                            <li>Up to <span className="text-green-700 font-bold">10%</span> SMARTS rebate at over 400 merchants</li>
                            <li>Kickstart your investment journey</li>
                        </ul>
                    </div>
                    <div>
                        {/* Annual Fees */}
                        <h3 className="text-2xl font-bold mt-8">Annual Fees</h3>
                        <p>Principal Card: Free for the first year</p>
                        <p>Supplementary Card: Free for the first card</p>

                    
                        <button className="bg-purple-700 text-white px-6 py-3 rounded-full shadow-lg shadow-purple-600 mt-6 hover:bg-blue-900 hover:cursor-pointer transition">
                            Fill Out Application Form
                        </button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default CardBenefits;