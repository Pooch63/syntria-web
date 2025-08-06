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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=hello@syntria.org&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;

    window.open(mailtoLink, "_blank");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-light-bg shadow-xl rounded-2xl p-8 max-w-2xl mx-auto space-y-6"
    >
      <h2 className="text-3xl font-bold text-dark-bg text-center">Improve Your Mind Today</h2>

    <FloatingInput
        name="name"
        type="text"
        placeholder="Name*"
        value={formData.name}
        onChange={handleChange}
        required
        className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-dark-bg"
    />

    <FloatingInput
        name="email"
        type="email"
        placeholder="Email*"
        value={formData.email}
        onChange={handleChange}
        required
        className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-dark-bg"
    />
    <FloatingInput
        name="subject"
        type="text"
        placeholder="Subject*"
        value={formData.subject}
        onChange={handleChange}
        required
        className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-dark-bg"
    />

      <div className="flex flex-col">
        <label className="text-dark-bg mb-1">Message*</label>
        <textarea
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="p-3 text-dtext rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-dark-bg"
        />
      </div>

      <button
        type="submit"
        className="w-full cursor-pointer py-3 bg-dark-bg text-light-bg rounded-full font-semibold shadow-lg hover:bg-ltrans hover:text-ltext transition"
      >
        Open Gmail to Send
      </button>
    </form>
  );
}
