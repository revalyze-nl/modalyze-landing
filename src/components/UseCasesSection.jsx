import React from "react";

const cases = [
  {
    title: "Sales CRM",
    description: "Track leads, manage pipelines, and close deals faster with a CRM built just for your sales team.",
    emoji: "💼",
  },
  {
    title: "Inventory Management",
    description: "Create a custom ERP to manage stock levels, suppliers, and logistics — your way.",
    emoji: "📦",
  },
  {
    title: "HR Platform",
    description: "Design internal HR systems to handle employee records, time off, and performance reviews.",
    emoji: "🧑‍💻",
  },
  {
    title: "Client Portals",
    description: "Build secure, branded portals for your customers with custom access and workflows.",
    emoji: "🔐",
  },
];

const UseCasesSection = () => {
  return (
    <section className="bg-white px-6 md:px-16 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
        Why teams choose Modalyze
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cases.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition"
          >
            <div className="text-3xl mb-4">{item.emoji}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UseCasesSection;
