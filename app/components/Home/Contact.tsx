"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setSuccess("Message sent successfully!");
      setFormData({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="px-5 py-12">
      <div className="mx-auto max-w-[1200]">
        <h2 className="text-center text-[48px] font-semibold text-[#FFFFFF]">
          Get in touch
        </h2>
        <form onSubmit={handleSubmit} className="mx-auto mt-[68] max-w-[520]">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full border-b border-[#4F4F4F] bg-transparent px-1 py-2 text-[14px] text-white placeholder:text-[#4F4F4F] outline-none focus:border-[#00c878]"
              />
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name"
                className="w-full border-b border-[#4F4F4F] bg-transparent px-1 py-2 text-[14px] text-white placeholder:text-[#4F4F4F] outline-none focus:border-[#00c878]"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full border-b border-[#4F4F4F] bg-transparent px-1 py-2 text-[14px] text-white placeholder:text-[#4F4F4F] outline-none focus:border-[#00c878]"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="w-full border-b border-[#4F4F4F] bg-transparent px-1 py-2 text-[14px] text-white placeholder:text-[#4F4F4F] outline-none focus:border-[#00c878]"
              />
            </div>
          </div>
          <div className="mt-10">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Message"
              required
              className="w-full resize-none border border-[#4F4F4F] bg-transparent px-2 py-2 text-[14px] text-white placeholder:text-[#4F4F4F] outline-none focus:border-[#00c878]"
            />
          </div>
          <div className="mt-5 flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="rounded-[2] border border-[#FFFFFF] px-10 py-2.5 text-[14px] font-medium text-[#FFFFFF] transition duration-300 hover:border-[#27AE60] hover:bg-[#27AE60] hover:text-[#FFFFFF] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Sending..." : "Submit now"}
            </button>
          </div>
          {success && (
            <p className="mt-5 text-center text-[#27AE60]">{success}</p>
          )}
          {error && <p className="mt-5 text-center text-red-500">{error}</p>}
        </form>
      </div>
    </section>
  );
}
