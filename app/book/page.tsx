"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Booking() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "photography_services",
        "template_a010th7",
        form.current,
        "fd8SzeymLJ0jX9MS0"
      )
      .then(
        () => {
          setIsSuccess(true);
          setStatus("Booking request sent successfully! ✅");
          form.current?.reset();
        },
        () => {
          setIsSuccess(false);
          setStatus("Failed to send booking request ❌");
        }
      );
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white px-6 py-12">
      <div className="w-full max-w-lg p-8 rounded-2xl border border-gray-800">
        
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
          Book a Session
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Fill the details below to confirm your event booking
        </p>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-yellow-400 outline-none"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-yellow-400 outline-none"
            required
          />

          <input
            type="tel"
            name="user_phone"
            placeholder="Phone Number"
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-yellow-400 outline-none"
          />

          <select
            name="service"
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-yellow-400 outline-none"
            required
          >
            <option value="">Select Service</option>
            <option value="cinematic wedding">Wedding Photography</option>
            <option value="Pre-Wedding">Pre-Wedding Shoot</option>
            <option value="meternity">Birthday Event</option>
            <option value="potraits">Corporate Event</option>
            <option value="corporate">Baby Shoot</option>
          </select>

          <input
            type="date"
            name="event_date"
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-yellow-400 outline-none"
            required
          />

          <textarea
            name="message"
            placeholder="Additional Details"
            rows={4}
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-yellow-400 outline-none"
          />

          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold 
hover:scale-105 
hover:shadow-lg hover:shadow-yellow-400/50 
transition duration-300">
  Submit Booking
</button>

        </form>

        {status && (
          <p
            className={`mt-6 text-center font-medium ${
              isSuccess ? "text-green-400" : "text-red-400"
            }`}
          >
            {status}
          </p>
        )}
      </div>
    </main>
  );
}