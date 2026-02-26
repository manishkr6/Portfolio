import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FiX,
  FiAward,
  FiCalendar,
  FiExternalLink,
  FiArrowLeft,
  FiArrowRight,
  FiDownload,
  FiBookOpen,
} from "react-icons/fi";
import {
  certificatesData,
  certificateCategories,
} from "../data/certificatesData";

const Certificates = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="certificates"
      className="py-16 px-4 sm:py-20 md:py-24 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute -bottom-20 left-0 right-0 h-96 bg-gradient-to-t from-purple-900/10 to-transparent blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-3 sm:mb-4">
            Certificates & Achievements
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto px-2">
            Professional certifications and courses I've completed
          </p>
        </motion.div>

        {/* Certificates Grid - Initial 3 cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {certificatesData.slice(0, 3).map((cert) => (
              <motion.div
                key={cert.id}
                variants={cardVariants}
                layout
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                onClick={() => navigate(`/certificate/${cert.id}`)}
                className="glass-effect rounded-xl overflow-hidden cursor-pointer group border border-gray-800/40 hover:border-primary-500/40 transition-all duration-300"
              >
                {/* Certificate Image */}
                <div className="relative aspect-[4/3] sm:aspect-[3/2] overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-primary-600/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <FiAward className="text-primary-400" size={20} />
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-primary-400 transition-colors mb-2 line-clamp-2">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 mb-3">
                    <FiCalendar size={14} />
                    <span>{cert.date}</span>
                  </div>
                  <p className="text-gray-400 text-sm sm:text-base line-clamp-2 mb-4">
                    {cert.description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary-400 font-medium">
                      {cert.issuer}
                    </span>
                    <FiExternalLink className="text-gray-400 group-hover:text-primary-400 transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-10 sm:mt-14"
        >
          <button
            onClick={() => navigate("/certificates")}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-primary-500/30 text-sm sm:text-base"
          >
            View All Certificates
            <span className="text-xs sm:text-sm opacity-80">
              ({certificatesData.length})
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
