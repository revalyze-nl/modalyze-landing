import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="bg-blue-50 px-6 md:px-16 py-24 rounded-t-3xl">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Why we built Modalyze
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Every business is unique — so why should they be forced into rigid, one-size-fits-all software?
          Modalyze was born from a simple idea: <br className="hidden md:block" />
          <span className="font-semibold text-blue-600">What if anyone could build the system they need, without writing code?</span>
        </p>

        <blockquote className="bg-white mt-10 px-6 py-6 rounded-xl shadow-inner border-l-4 border-blue-600 italic text-gray-600 text-base">
          “We’ve seen too many teams struggle with tools that just don’t fit. Modalyze gives them freedom to create, not compromise.”
        </blockquote>

        <p className="text-gray-600 text-sm mt-10">💙 Made with care in the Netherlands</p>
      </div>
    </section>
  );
};

export default AboutSection;
