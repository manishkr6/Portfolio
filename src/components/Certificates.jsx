import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [selectedCert, setSelectedCert] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  // Reliable body scroll lock + scroll position restoration
  useEffect(() => {
    let scrollY = 0;

    if (showAll || selectedCert) {
      // Capture current scroll position before locking
      scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

      // Compensate for scrollbar width (prevents layout shift)
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;

      // Lock body scroll
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflowY = "hidden";
    } else {
      // Retrieve saved scroll position
      const savedScrollY = document.body.style.top
        ? -parseInt(document.body.style.top, 10)
        : scrollY;

      // Reset body styles
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.paddingRight = "";
      document.body.style.overflowY = "";

      // Restore exact scroll position instantly
      window.scrollTo({
        top: savedScrollY,
        left: 0,
        behavior: "instant",
      });
    }

    // Cleanup on unmount or when dependencies change
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.paddingRight = "";
      document.body.style.overflowY = "";
    };
  }, [showAll, selectedCert]);

  const displayedCerts = showAll
    ? activeCategory === "all"
      ? certificatesData
      : certificatesData.filter((cert) => cert.category === activeCategory)
    : certificatesData.slice(0, 3);

  // For navigation in modal
  const currentIndex = selectedCert
    ? displayedCerts.findIndex((c) => c.id === selectedCert.id)
    : -1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedCert(displayedCerts[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < displayedCerts.length - 1) {
      setSelectedCert(displayedCerts[currentIndex + 1]);
    }
  };

  const handleDownload = () => {
    if (!selectedCert?.image) return;
    const link = document.createElement("a");
    link.href = selectedCert.image;
    link.download = `${selectedCert.title.replace(/\s+/g, "_")}_certificate.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
    <section id="certificates" className="py-16 px-4 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute -bottom-20 left-0 right-0 h-96 bg-gradient-to-t from-purple-900/10 to-transparent blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        {!showAll && (
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
        )}

        {/* Certificates Grid - Initial 3 cards or full list */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayedCerts.map((cert) => (
              <motion.div
                key={cert.id}
                variants={cardVariants}
                layout
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                onClick={() => setSelectedCert(cert)}
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
                    <span className="text-primary-400 font-medium">{cert.issuer}</span>
                    <FiExternalLink className="text-gray-400 group-hover:text-primary-400 transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        {!showAll && displayedCerts.length < certificatesData.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-10 sm:mt-14"
          >
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-primary-500/30 text-sm sm:text-base"
            >
              View All Certificates
              <span className="text-xs sm:text-sm opacity-80">({certificatesData.length})</span>
            </button>
          </motion.div>
        )}
      </div>

      {/* Full-Page All Certificates View */}
      <AnimatePresence>
        {showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
              <motion.button
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => {
                  setShowAll(false);
                  setActiveCategory("all");
                }}
                className="flex items-center gap-2 text-primary-400 hover:text-primary-300 mb-8 font-medium text-lg"
              >
                <FiArrowLeft size={20} />
                Back
              </motion.button>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-10 sm:mb-12"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-3">
                  All Certificates
                </h2>
                <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
                  Professional certifications and completed courses
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
              >
                {certificateCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all ${
                      activeCategory === category.id
                        ? "bg-primary-600 text-white shadow-lg shadow-primary-500/30"
                        : "bg-gray-800/60 text-gray-300 hover:bg-gray-700/80 border border-gray-700"
                    }`}
                  >
                    {category.name}
                    <span className="ml-1.5 opacity-70 text-xs sm:text-sm">({category.count})</span>
                  </button>
                ))}
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pb-12"
              >
                <AnimatePresence mode="popLayout">
                  {displayedCerts.map((cert) => (
                    <motion.div
                      key={cert.id}
                      variants={cardVariants}
                      layout
                      whileHover={{ y: -8 }}
                      onClick={() => setSelectedCert(cert)}
                      className="glass-effect rounded-xl overflow-hidden cursor-pointer group border border-gray-800/40 hover:border-primary-500/40 transition-all duration-300"
                    >
                      <div className="relative aspect-[4/3] sm:aspect-[3/2] overflow-hidden">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute top-3 right-3 w-10 h-10 bg-primary-600/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <FiAward className="text-primary-400" size={20} />
                        </div>
                      </div>

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
                          <span className="text-primary-400 font-medium">{cert.issuer}</span>
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
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedCert(null);
              }
            }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-effect rounded-2xl w-full max-w-lg sm:max-w-4xl max-h-[90vh] overflow-y-auto relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
                aria-label="Close"
              >
                <FiX size={24} />
              </button>

              {/* Navigation Arrows */}
              {currentIndex > 0 && (
                <button
                  onClick={handlePrev}
                  className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
                  aria-label="Previous certificate"
                >
                  <FiArrowLeft size={24} />
                </button>
              )}

              {currentIndex < displayedCerts.length - 1 && (
                <button
                  onClick={handleNext}
                  className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
                  aria-label="Next certificate"
                >
                  <FiArrowRight size={24} />
                </button>
              )}

              {/* Image */}
              <div className="relative aspect-[4/3] sm:aspect-video overflow-hidden rounded-t-2xl">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {selectedCert.title}
                </h2>
                <p className="text-primary-400 font-medium mb-5 sm:mb-6">
                  {selectedCert.issuer}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6 text-sm sm:text-base">
                  <div>
                    <p className="text-gray-500 mb-1">Issue Date</p>
                    <p className="text-white font-medium">{selectedCert.date}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Credential ID</p>
                    <p className="text-white font-medium font-mono break-all">
                      {selectedCert.credentialId}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-gray-500 mb-2 text-sm sm:text-base">Description</p>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    {selectedCert.description}
                  </p>
                </div>

                <div className="flex flex-wrap justify-between items-center gap-4">
                  <div>
                    <p className="text-gray-500 mb-3 text-sm sm:text-base">Skills Covered</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedCert.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary-900/30 text-primary-300 border border-primary-800/40 text-xs sm:text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Download Button */}
                  <button
                    onClick={handleDownload}
                    className="flex items-center gap-2 px-5 py-2.5 bg-primary-600 hover:bg-primary-500 text-white font-medium rounded-lg transition-colors text-sm sm:text-base"
                  >
                    <FiBookOpen size={18} />
                    View Full Certificate
                  </button>
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