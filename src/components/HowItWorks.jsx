import React from "react";
import { motion } from "framer-motion";

const steps = [
    {
        step: "1",
        title: "Design your platform",
        description: "Use our visual builder to drag and drop components, define fields, and shape your ideal system.",
        icon: "🛠️",
    },
    {
        step: "2",
        title: "Click to deploy",
        description: "Backend, frontend, and database are generated instantly — no manual setup required.",
        icon: "🚀",
    },
    {
        step: "3",
        title: "Start using it",
        description: "Invite your team, add real data, and get to work immediately. Modify anytime.",
        icon: "✅",
    },
];

const HowItWorks = () => {
    return (
        <section className="bg-white px-6 md:px-16 py-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                How Modalyze Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-gray-50 p-6 rounded-xl shadow text-center"
                    >
                        <div className="text-4xl mb-4">{step.icon}</div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{step.description}</p>
                    </motion.div>
                ))}

            </div>
        </section>
    );
};

export default HowItWorks;
