import { motion } from "framer-motion";
import { MapPin, Smartphone, CalendarCheck } from "lucide-react";
import React, { useState } from "react";
import Logo from "./assets/ActLocal-text.svg";

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

const features = [
  {
    icon: <MapPin className="text-primary mb-4" size={40} />,
    title: "Geolocation-Based Search",
    description:
      "Easily discover professionals closest to your location for quicker services.",
  },
  {
    icon: <Smartphone className="text-secondary mb-4" size={40} />,
    title: "Instant Booking",
    description:
      "Book appointments with just a few taps — fast, easy, and convenient.",
  },
  {
    icon: <CalendarCheck className="text-accent mb-4" size={40} />,
    title: "Reliable Service Profiles",
    description:
      "View provider ratings, availability, and past work to make informed choices.",
  },
];

const team = [
  {
    name: "Tarun Singh Chauhan",
    role: "CEO, Developer & Founder",
    description:
      "Visionary behind ActLocal, driving innovation and local empowerment.",
  },
  {
    name: "Karan Sethi",
    role: "Co-CEO & UI/UX Designer",
    description: "Designs intuitive interfaces that elevate user experience.",
  },
];

const services = [
  {
    title: "Scooty Ride to Anywhere in Tricity",
    description: "I can drop you off to anywhere at ₹5/km. Charges fixed.",
    price: "₹5/km",
    user: "Tarun",
  },
  {
    title: "Need a Chef",
    description:
      "Urgently need a chef for hotel branch in tricity. Competitive monthly salary.",
    price: "₹25,000",
    user: "Abhi",
  },
  {
    title: "Technical Help",
    description:
      "I can provide technical help regarding programming, projects, etc.",
    price: "₹500",
    user: "Tarun Singh Chauhan",
  },
  {
    title: "Plumber Website Development",
    description: "I can create landing pages.",
    price: "₹1000",
    user: "Alex",
  },
];

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/40 dark:bg-gray-900/40 border-b border-white/30 dark:border-gray-700/30 shadow-md h-20">
      <div className="max-w-screen-xl mx-auto px-4 h-full flex justify-between items-center">
        <a href="#" className="flex items-center h-full">
          {/* Logo scales up inside its container without affecting header height */}
          <img
            src={Logo}
            alt="ActLocal Logo"
            className="h-24 object-contain"
          />
        </a>
        <a
          href="#download"
          className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-blue-700 transition"
        >
          Get the App
        </a>
      </div>
    </header>
  );
}



export default function ActLocalPromo() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <div className={`${darkMode ? "dark" : ""} overflow-x-hidden`}>
      <div className="min-h-screen bg-gradient-to-br from-white via-secondary-50 to-primary dark:from-gray-900 dark:to-gray-800 text-black dark:text-white">
        <Header />
        <main className="max-w-screen-xl mx-auto px-4 md:px-6 pt-24 pb-10 font-sans">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={1}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-4 tracking-tight">
              ActLocal <br /> Empowering Local Services
            </h1>
            <p className="text-center text-xl mb-12 max-w-3xl mx-auto">
              Discover, book, and connect with trusted local professionals. We
              bring services to your fingertips.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={index + 2}
                className="shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-3xl bg-white p-8 flex flex-col items-center text-center"
              >
                {feature.icon}
                <h2 className="text-2xl font-bold mb-3">{feature.title}</h2>
                <p className="text-gray-600 text-base leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={4}
          >
            <h2 className="text-3xl font-semibold mb-4">Meet Our Team</h2>
            <div className="flex flex-col md:flex-row justify-center gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg w-full md:w-80"
                >
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="font-medium text-gray-500 mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-700 text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="text-center mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={5}
          >
            <h2 className="text-3xl font-semibold mb-4">Live Listings</h2>
            <div className="relative overflow-hidden">
              <div
                className="flex animate-scroll-x space-x-6 px-2 py-4 snap-x snap-mandatory scrollbar-hide"
                style={{ minWidth: "max-content" }}
              >
                {[...services, ...services].map((service, index) => (
                  <div
                    key={index}
                    className="snap-center flex-shrink-0 bg-white rounded-2xl shadow-md p-6 w-80"
                  >
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {service.description}
                    </p>
                    <p className="font-semibold text-blue-600 mb-1">
                      {service.price}
                    </p>
                    <p className="text-sm font-medium text-gray-500">
                      {service.user}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            id="download"
            className="bg-white mt-24 rounded-3xl p-10 shadow-xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={6}
          >
            <h2 className="text-4xl font-bold mb-6">
              Download the ActLocal App
            </h2>
            <p className="text-lg mb-10 max-w-3xl mx-auto">
              Experience ActLocal on the go. Connect with service providers,
              book instantly, and manage tasks with ease.
            </p>
            {/* <div className="flex justify-center gap-6 mb-10">
              <a href="#" className="inline-block">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-14"
                />
              </a>
              <a href="#" className="inline-block">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Apple_app_store_badge.svg"
                  alt="Download on the App Store"
                  className="h-14"
                />
              </a>
            </div> */}
            <img
              src={Logo}
              alt="App Mockup"
              className="mx-auto rounded-xl shadow-2xl"
            />
          </motion.div>

          <footer className="mt-24 py-8 border-t border-gray-300 text-center">
            <div className="mb-4">
              <button
                onClick={toggleDarkMode}
                className="px-4 py-2 bg-blue-500 text-white rounded-full"
              >
                {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              </button>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              © 2025 ActLocal. All rights reserved.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
