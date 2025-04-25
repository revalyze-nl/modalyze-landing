import React from "react";
import { motion } from "framer-motion";

const faqs = [
    {
        question: "Do I need to know how to code?",
        answer:
            "Nope! Modalyze is built for non-technical users. You can create complex CRM/ERP systems with simple drag-and-drop tools.",
    },
    {
        question: "Can I export or self-host my system?",
        answer:
            "The first version will be hosted by us, but we plan to support exports and private hosting in later versions.",
    },
    {
        question: "Is there a free version?",
        answer:
            "Yes! You can start with the Starter plan to test the platform and build one active project.",
    },
    {
        question: "Can I use Modalyze for client projects?",
        answer:
            "Absolutely. You can build white-labeled systems for your clients and manage them under your Pro or Enterprise plan.",
    },
];

const FAQSection = () => {
    return (
        <section className="bg-gray-50 px-6 md:px-16 py-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
                Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(0, 0, 255, 0.15)" }}
                        className="group bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
                    >
                        <div className="flex items-start gap-3">
                            <span className="text-blue-600 text-2xl">❓</span>
                            <div>
                                <h3 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                                    {faq.question}
                                </h3>
                                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default FAQSection;
