import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FiAward,
  FiCalendar,
  FiExternalLink,
  FiArrowLeft,
} from "react-icons/fi";
import {
  certificatesData,
  certificateCategories,
} from "../data/certificatesData";

const AllCertificates = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const displayedCerts = activeCategory === "all"
    ? certificatesData
    : certificatesData.filter((cert) => cert.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-dark-500 pt-24 pb-20 px-4">
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/#certificates")}
          className="flex items-center gap-2 text-primary-400 hover:text-primary-300 mb-8 font-medium transition-colors"
        >
          <FiArrowLeft size={20} />
          Back to Portfolio
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-4">
            Professional Certifications
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive list of certifications and courses I have completed to enhance my skills.
          </p>
        </motion.div>

        {/* Filter Categories */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {certificateCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-primary-600 text-white shadow-lg shadow-primary-500/30"
                  : "bg-gray-800/60 text-gray-300 hover:bg-gray-700/80 border border-gray-700"
              }`}
            >
              {category.name}
              <span className="ml-2 opacity-60 text-xs">
                ({category.count})
              </span>
            </button>
          ))}
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayedCerts.map((cert) => (
              <motion.div
                key={cert.id}
                variants={cardVariants}
                layout
                whileHover={{ y: -8 }}
                onClick={() => navigate(`/certificate/${cert.id}`)}
                className="glass-effect rounded-2xl overflow-hidden cursor-pointer group border border-gray-800/40 hover:border-primary-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-primary-600/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <FiAward className="text-primary-400" size={24} />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors mb-3 line-clamp-2">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                    <FiCalendar size={16} />
                    <span>{cert.date}</span>
                  </div>
                  <p className="text-gray-400 text-sm md:text-base line-clamp-3 mb-6">
                    {cert.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary-400 font-bold">
                      {cert.issuer}
                    </span>
                    <FiExternalLink className="text-gray-400 group-hover:text-primary-400 transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default AllCertificates;
