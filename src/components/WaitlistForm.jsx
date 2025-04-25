import React, { useState } from "react";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basit regex ile mail doğrulama
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValid) {
      setStatus("error");
      return;
    }

    try {
      // Burada Google Sheets API’ye veya form backend’ine istek gönderilecek
      // await fetch(process.env.GOOGLE_SHEETS_API_URL, {
      //   method: "POST",
      //   body: JSON.stringify({ email }),
      // });

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-white px-6 md:px-16 py-16">
      <div className="max-w-xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Be the first to get access
        </h3>
        <p className="text-gray-600 mb-6 text-sm">
          Join our waitlist and get early updates, sneak peeks, and launch invites.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full sm:w-72 px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-medium shadow transition"
          >
            Join Waitlist
          </button>
        </form>
        {status === "success" && (
          <p className="text-green-600 mt-4 text-sm">You're on the list! 🎉</p>
        )}
        {status === "error" && (
          <p className="text-red-500 mt-4 text-sm">Please enter a valid email address.</p>
        )}
      </div>
    </section>
  );
};

export default WaitlistForm;
