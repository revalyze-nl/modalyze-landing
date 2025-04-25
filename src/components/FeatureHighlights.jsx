import React from "react";
import { motion } from "framer-motion";

const features = [
    {
        title: "Drag-and-Drop Builder",
        description: "Design complex CRM/ERP systems easily with our visual editor — no coding required.",
        icon: "🧩",
    },
    {
        title: "Instant Deployment",
        description: "Launch your platform in one click. Backend, frontend, and database are automatically set up.",
        icon: "⚡",
    },
    {
        title: "Fully Customizable",
        description: "Define your own fields, logic, user roles, and workflows — total flexibility.",
        icon: "🎛️",
    },
    {
        title: "Secure & Scalable",
        description: "Built with enterprise-grade infrastructure to grow with your business.",
        icon: "🛡️",
    },
];

const FeatureHighlights = () => {
    return (
        <section className="bg-gray-50 px-6 md:px-16 py-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                Highlighted Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-white p-6 rounded-xl shadow text-center"
                    >
                        <div className="text-4xl mb-4">{feature.icon}</div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default FeatureHighlights;
