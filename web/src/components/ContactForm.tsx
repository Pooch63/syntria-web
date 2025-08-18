"use client";
import React, { useState } from "react";
import FloatingInput from "./input";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=hello@syntria.org&su=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;

    window.open(mailtoLink, "_blank");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-hcontrast shadow-2xl rounded-3xl p-10 max-w-2xl mx-auto space-y-8 border border-gray-200"
      style={{
        boxShadow:
          "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)",
      }}
    >
      <h2 className="text-3xl font-bold text-light-bg text-center">
        Improve Your Mind Today
      </h2>

      <FloatingInput
        name="name"
        type="text"
        placeholder="Name*"
        value={formData.name}
        onChange={handleChange}
        required
        className="p-4 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-light-bg focus:border-transparent shadow-sm"
      />

      <FloatingInput
        name="email"
        type="email"
        placeholder="Email*"
        value={formData.email}
        onChange={handleChange}
        required
        className="p-4 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-light-bg focus:border-transparent shadow-sm"
      />
      <FloatingInput
        name="subject"
        type="text"
        placeholder="Subject*"
        value={formData.subject}
        onChange={handleChange}
        required
        className="p-4 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-light-bg focus:border-transparent shadow-sm"
      />

      <div className="flex flex-col">
        <label className="text-light-bg mb-2 font-medium">Message*</label>
        <textarea
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="p-4 text-dark-bg bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-light-bg focus:border-transparent shadow-sm resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full cursor-pointer py-4 bg-light-bg text-hcontrast rounded-full font-semibold shadow-lg hover:bg-opacity-90 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >
        Open Gmail to Send
      </button>
    </form>
  );
}
