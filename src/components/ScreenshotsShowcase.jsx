import React from "react";
import chat from "../assets/screenshots/Chat-SS.jpg";
import homeScreen from "../assets/screenshots/HomeScreen-SS.jpg";
import post from "../assets/screenshots/Post-SS.jpeg";
import postdetails from "../assets/screenshots/PostDetails-SS.jpeg";
import signup from "../assets/screenshots/Signup-SS.jpg";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const screenshots = [
  {
    section: "Feature",
    title: "Geolocation-Based Search",
    description: "Find nearby service providers using your location.",
    image: homeScreen,
  },
  {
    section: "Feature",
    title: "Instant in Chat Booking",
    description:
      "Quickly book appointments with just a chat. Providing a comfortable experience at your terms.",
    image: chat,
  },
  {
    section: "Feature",
    title: "Seamless Signup",
    description:
      "Join the community effortlessly with our easy signup process.",
    image: signup,
  },
  {
    section: "Live Listing",
    title: "Details of a Listing",
    description:
      "Explore the details of a listing, just make sure it's for you.",
    image: postdetails,
  },
  {
    section: "Post",
    title: "Post a Listing",
    description:
      "Easily create and manage your listings with our user-friendly interface.",
    image: post,
  },
];

const ScreenshotsShowcase = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <Helmet>
        <meta
          name="title"
          content="ActLocal - Find Trusted Local Services Near You"
        />
        <meta
          name="description"
          content="ActLocal is a hyperlocal app that connects you with nearby service providers like electricians, tutors, and cleaners or post your own services. Book instantly."
        />
        <meta
          name="keywords"
          content="local services, service providers near me, home services app, ActLocal, hire plumber, nearby electrician, rent tools, verified handyman, local marketplace, ActLocal, local services app, hire nearby handyman, home service marketplace, book local electricians, local plumber near me, nearby carpenter service, find local workers, hyperlocal service platform, verified service providers, home repair services app, local technician booking, on-demand local services, service provider app India, neighborhood service hiring, hire home cleaner, trusted service experts, nearby service providers, ActLocal app download, hyperlocal job platform
, local service booking, find local service providers, hire local professionals, ActLocal services, local service marketplace, home service app India, ActLocal app features"
        />
        <meta name="author" content="ActLocal Team" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://actlocal.live/" />
        <meta
          property="og:title"
          content="ActLocal - Find Trusted Local Services Near You"
        />
        <meta
          property="og:description"
          content="Empowering informal workers and helping you book verified local services with ease."
        />
        <meta property="og:image" content="https://actlocal.app/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://actlocal.live/" />
        <meta
          property="twitter:title"
          content="ActLocal - Find Trusted Local Services Near You"
        />
        <meta
          property="twitter:description"
          content="Book local services instantly. Verified, affordable, and nearby. Empowering local workers with digital visibility."
        />
        <meta
          property="twitter:image"
          content="https://actlocal.app/twitter-image.png"
        />
      </Helmet>
      <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">
        📱 App Showcase
      </h2>

      <div className="space-y-24">
        {screenshots.map((shot, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            key={index}
            className={`flex flex-col lg:flex-row items-center ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            } gap-10`}
          >
            {/* Text Block */}
            <div className="lg:w-1/2">
              <p className="text-lg text-indigo-500 font-bold mb-2">
                {shot.section}
              </p>
              <h3 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                {shot.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-2xl">
                {shot.description}
              </p>
            </div>

            {/* Screenshot Block with mock phone */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="w-[250px] h-[500px] rounded-3xl shadow-xl border-8 border-gray-800 overflow-hidden bg-black">
                <img
                  src={shot.image}
                  alt={shot.title}
                  className="w-60 h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ScreenshotsShowcase;
