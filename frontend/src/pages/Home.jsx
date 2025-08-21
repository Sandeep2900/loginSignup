import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
      
      {/* Animated Welcome Heading */}
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg"
      >
        Welcome Back 🎉
      </motion.h1>

      {/* Animated Subtitle */}
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-lg md:text-2xl text-center max-w-2xl"
      >
        You’ve successfully logged in. Let’s build something amazing today 🚀
      </motion.p>

      {/* Button with Hover Animation */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-8 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-xl hover:bg-gray-100 transition"
      >
        Get Started
      </motion.button>

      {/* Floating Background Circles */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2, scale: [1, 1.5, 1] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute w-64 h-64 rounded-full bg-white top-20 left-10 blur-3xl"
      ></motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2, scale: [1, 1.5, 1] }}
        transition={{ repeat: Infinity, duration: 8, delay: 2 }}
        className="absolute w-80 h-80 rounded-full bg-yellow-300 bottom-20 right-10 blur-3xl"
      ></motion.div>
    </div>
  );
};

export default Home;
