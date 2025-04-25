import React from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "Free",
    features: [
      "1 active project",
      "Basic components",
      "Community support",
    ],
    comingSoon: false,
    popular: false,
  },
  {
    name: "Pro",
    price: "€29/mo",
    features: [
      "Unlimited projects",
      "Advanced modules",
      "Priority support",
    ],
    comingSoon: true,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Dedicated infra",
      "Custom integrations",
      "1-on-1 onboarding",
    ],
    comingSoon: true,
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="bg-white px-6 md:px-16 py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
        Simple & Transparent Pricing
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {plans.map((plan, index) => (
          <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
            className={`relative bg-gray-50 p-8 rounded-2xl border hover:shadow-xl transition-all duration-300 ${
              plan.popular ? "border-blue-600" : "border-gray-200"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-s px-3 py-1 rounded-full shadow">
                Most Popular
              </div>
            )}
            <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
            <p className="text-3xl font-extrabold text-blue-600 mb-6">{plan.price}</p>
            <ul className="space-y-3 text-sm text-gray-600 mb-8">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> {f}
                </li>
              ))}
            </ul>
            {plan.comingSoon ? (
              <button
                disabled
                className="w-full bg-gray-300 text-gray-600 px-4 py-3 rounded-lg cursor-not-allowed"
              >
                Coming Soon
              </button>
            ) : (
              <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
