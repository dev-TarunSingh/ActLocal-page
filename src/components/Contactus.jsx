import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";


const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function ContactForm() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    app: "ActLocal",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICEID,
        import.meta.env.VITE_TEMPLATEID,
        form.current,
        import.meta.env.VITE_PUBLICKEY // Replace with your public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setSending(false);
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("Failed to send message. Please try again.");
          setSending(false);
        }
      );
  };

  return (
    <motion.div
      className="mt-24 bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      custom={7}
    >
      <h2 className="text-3xl font-bold mb-6 text-center dark:text-white">
        Contact Us
      </h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-2xl mx-auto space-y-6"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-3 border bg-white dark:bg-gray-700 rounded-xl dark:border-gray-600"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full p-3 border bg-white dark:bg-gray-700 rounded-xl dark:border-gray-600"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={5}
          required
          className="w-full p-3 border bg-white dark:bg-gray-700 rounded-xl dark:border-gray-600"
        />
        <button
          type="submit"
          disabled={sending}
          className="px-6 py-3 bg-primary text-white rounded-full hover:bg-blue-700 transition disabled:opacity-60"
        >
          {sending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </motion.div>
  );
}
