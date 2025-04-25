import React from "react";
import crmImg from "../assets/crm-components.PNG";
import { motion } from "framer-motion";


const HeroSection = () => {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-white">
            {/* Sol taraf: metinler */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    Design
                </h1>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    Customize
                </h1>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    Scale
                </h1>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    Your Business
                </h1>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    Your Platform
                </h1>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    Your CRM/ERP
                </h1>
                <p className="mt-4 text-gray-600 text-lg">
                    Whether you're managing leads, orders, or internal workflows, Modalyze helps you craft the perfect tool for your team.
                </p>
                <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
                    Get started
                </button>
            </motion.div>

            {/* Sağ taraf: gerçek görsel */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center">
                <img
                    src={crmImg}
                    alt="CRM Preview"
                    className="max-w-full h-auto rounded-lg shadow-md"
                />
            </motion.div>
        </section>
    );
};

export default HeroSection;
