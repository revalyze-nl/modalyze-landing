import React from "react";
import editorImg from "../assets/drag-editor.PNG"; // placeholder image

const FeatureSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 bg-gray-50">
      {/* Sol taraf: metin */}
      <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
        <div className="inline-block bg-orange-100 text-orange-800 text-xl font-semibold px-10 py-4 rounded-full uppercase tracking-wide mb-4">
          Coming soon
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Build your own CRM/ERP
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Easily create your perfect platform with our intuitive editor.
        </p>
      </div>

      {/* Sağ taraf: görsel */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={editorImg}
          alt="CRM Builder"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};

export default FeatureSection;
