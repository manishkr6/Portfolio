import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiX,
  FiAward,
  FiCalendar,
  FiExternalLink,
  FiArrowLeft,
} from "react-icons/fi";
import {
  certificatesData,
  certificateCategories,
} from "../data/certificatesData";

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  const displayedCerts = showAll
    ? activeCategory === "all"
      ? certificatesData
      : certificatesData.filter((cert) => cert.category === activeCategory)
    : certificatesData.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="certificates" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header - Only show when not in fullscreen mode */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4">
              Certificates & Achievements
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Professional certifications and courses completed to enhance my
              skills
            </p>
          </motion.div>
        )}

        {/* Initial 3 Certificates Display */}
        {!showAll && (
          <>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {displayedCerts.map((cert) => (
                  <motion.div
                    key={cert.id}
                    variants={cardVariants}
                    layout
                    whileHover={{ y: -10 }}
                    onClick={() => setSelectedCert(cert)}
                    className="glass-effect rounded-xl overflow-hidden hover-glow cursor-pointer group"
                  >
                    {/* Certificate Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-500 to-transparent opacity-80" />
                      <div className="absolute top-4 right-4 w-12 h-12 bg-primary-500/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <FiAward className="text-primary-400" size={24} />
                      </div>
                    </div>

                    {/* Certificate Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors mb-2 line-clamp-2">
                        {cert.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                        <FiCalendar size={14} />
                        <span>{cert.date}</span>
                      </div>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {cert.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-primary-400 font-medium">
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
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12"
            >
              <button
                onClick={() => setShowAll(true)}
                className="px-8 py-4 bg-primary-500 text-dark-500 rounded-lg font-semibold hover:bg-primary-400 transition-all duration-300 hover-glow inline-flex items-center gap-2"
              >
                View All Certificates
                <span className="text-sm">({certificatesData.length})</span>
              </button>
            </motion.div>
          </>
        )}
      </div>

      {/* Full-Page All Certificates View */}
      <AnimatePresence>
        {showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-40 overflow-y-auto"
          >
            <div className="max-w-7xl mt-12 mx-auto px-4 py-12 relative">
              {/* Back Button */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => {
                  setShowAll(false);
                  setActiveCategory("all");
                }}
                className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors mb-8 font-semibold"
              >
                <FiArrowLeft size={20} />
                Back
              </motion.button>

              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4">
                  All Certificates & Achievements
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  Professional certifications and courses completed to enhance
                  my skills
                </p>
              </motion.div>

              {/* Category Filter */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap justify-center gap-3 mb-12"
              >
                {certificateCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? "bg-primary-500 text-dark-500"
                        : "glass-effect text-gray-300 hover:border-primary-400"
                    }`}
                  >
                    {category.name}
                    <span className="ml-2 text-sm opacity-75">
                      ({category.count})
                    </span>
                  </button>
                ))}
              </motion.div>

              {/* Certificates Grid - Fullscreen */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12"
              >
                <AnimatePresence mode="popLayout">
                  {displayedCerts.map((cert) => (
                    <motion.div
                      key={cert.id}
                      variants={cardVariants}
                      layout
                      whileHover={{ y: -10 }}
                      onClick={() => setSelectedCert(cert)}
                      className="glass-effect rounded-xl overflow-hidden hover-glow cursor-pointer group"
                    >
                      {/* Certificate Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-500 to-transparent opacity-80" />
                        <div className="absolute top-4 right-4 w-12 h-12 bg-primary-500/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <FiAward className="text-primary-400" size={24} />
                        </div>
                      </div>

                      {/* Certificate Info */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors mb-2 line-clamp-2">
                          {cert.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                          <FiCalendar size={14} />
                          <span>{cert.date}</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                          {cert.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-primary-400 font-medium">
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
          </motion.div>
        )}
      </AnimatePresence>

      {/* Certificate Detail Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-effect rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-dark-400/50 hover:bg-dark-400 flex items-center justify-center text-gray-400 hover:text-white transition-all"
              >
                <FiX size={24} />
              </button>

              {/* Certificate Image */}
              <div className="relative h-96 rounded-t-2xl overflow-hidden">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Certificate Details */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-display font-bold text-white mb-2">
                      {selectedCert.title}
                    </h2>
                    <p className="text-lg text-primary-400 font-medium">
                      {selectedCert.issuer}
                    </p>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-primary-500/20 flex items-center justify-center">
                    <FiAward className="text-primary-400" size={32} />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Issue Date</p>
                    <p className="text-white font-medium">
                      {selectedCert.date}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Credential ID</p>
                    <p className="text-white font-medium font-mono">
                      {selectedCert.credentialId}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-gray-500 mb-2">Description</p>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedCert.description}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-3">Skills Covered</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 rounded-full bg-primary-500/20 text-primary-400 border border-primary-500/30 text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
