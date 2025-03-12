import React from "react";
import { FaCreditCard, FaChartLine, FaShieldAlt } from "react-icons/fa";
import { featuresData } from "../../data/features";


const icons = {
    FaCreditCard: <FaCreditCard className="text-purple-600" size={30} />,
    FaChartLine: <FaChartLine className="text-white" size={30} />,
    FaShieldAlt: <FaShieldAlt className="text-purple-600" size={30} />,
};

const Services = () => {
    return (
        <div className="bg-gray-50 py-16 px-8">
            <div className="text-center mb-12">
                <p className="text-purple-700 uppercase font-semibold">Our Features</p>
                <h2 className="text-3xl font-bold">
                    Empowering Your Financial Journey
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuresData.map((feature, index) => (
                    <div
                        key={index}
                        className={`p-6 rounded-md  hover:shadow-lg transition-shadow duration-300 ${feature.bgColor === "bg-white" ? "bg-white border" : `${feature.bgColor} text-white`}`}
                    >
                        <div className="flex gap-2 mt-3 mb-4">
                            <div className={`p-2 rounded-full ${feature.iconBgColor}`}>
                                {icons[feature.icon]}
                            </div>
                            <h3 className="flex text-lg font-bold mb-2">{feature.title}</h3>
                        </div>
                        <p className="text-xl mb-4">{feature.description}</p>
                        <a
                            href={feature.link}
                            className="text-sm font-bold flex items-center text-purple-900 gap-1 hover"
                        >
                            Learn More <span>&rarr;</span>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
