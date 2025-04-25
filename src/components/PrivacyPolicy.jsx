import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-white px-6 md:px-16 py-20 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h2>
      <p className="text-gray-700 mb-4 text-sm leading-relaxed">
        At Modalyze, we take your privacy seriously. This Privacy Policy outlines the type of
        personal information we collect and how we use, store, and protect it.
      </p>
      <h3 className="font-semibold text-gray-800 mt-6 mb-2">Information We Collect</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        When you join our waitlist, we collect your email address. That's it — no names, no phone numbers.
      </p>
      <h3 className="font-semibold text-gray-800 mt-6 mb-2">How We Use It</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        We use your email only to notify you about Modalyze updates, beta invites, and news.
        We do not share your information with third parties.
      </p>
      <h3 className="font-semibold text-gray-800 mt-6 mb-2">Your Control</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        You can unsubscribe from emails at any time by contacting us. We will immediately remove your data from our system.
      </p>
      <p className="text-gray-500 text-xs mt-10 italic">
        This policy may be updated as Modalyze grows. Last updated: April 2025
      </p>
    </section>
  );
};

export default PrivacyPolicy;
