import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiDownload, FiInstagram } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";
import { personalData } from "../data/personalData";

const Hero = () => {
  const socialLinks = [
    { icon: FiGithub, url: personalData.github, label: "GitHub" },
    { icon: FiLinkedin, url: personalData.linkedin, label: "LinkedIn" },
    { icon: FiInstagram, url: personalData.instagram, label: "Instagram" },
    { icon: FiMail, url: `mailto:${personalData.email}`, label: "Email" },
  ];

  // Typing effect professions
  const professions = [
    "AI/ML Engineer",
    "Data Scientist",
    "Full Stack Developer",
  ];

  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);

  // Typing animation logic
  useEffect(() => {
    const handleTyping = () => {
      const currentProfession = professions[currentIndex];
      const shouldDelete = isDeleting;

      setCurrentText((prev) => {
        if (shouldDelete) {
          return prev.slice(0, prev.length - 1);
        }
        return currentProfession.slice(0, prev.length + 1);
      });

      // Speed adjustments
      if (!shouldDelete && currentText === currentProfession) {
        setTypingSpeed(1500); // Pause at end of word
        setIsDeleting(true);
      } else if (shouldDelete && currentText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % professions.length);
        setTypingSpeed(80);
      } else {
        setTypingSpeed(isDeleting ? 40 : 80);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, typingSpeed]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 pb-12 md:pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary-500/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center md:items-center"
        >
          {/* Text Content */}
          <div className="space-y-5 sm:space-y-6 md:space-y-8 text-center md:text-left w-full">
            <motion.div variants={itemVariants}>
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight"
            >
              Hi, I'm{" "}
              <span className="text-gradient animate-gradient bg-gradient-to-r from-primary-400 via-purple-400 to-primary-500">
                {personalData.name}
              </span>
            </motion.h1>

            {/* Typing Effect Profession */}
            <motion.div variants={itemVariants} className="min-h-[1.5em]">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-medium flex items-center justify-center md:justify-start gap-2">
                <span className="text-primary-400 font-semibold">→</span>
                <span className="typing-text">
                  {currentText}
                  <span className="animate-pulse">|</span>
                </span>
              </p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0"
            >
              {personalData.description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center md:justify-start gap-2 text-gray-400 text-sm sm:text-base"
            >
              <HiLocationMarker className="text-primary-400" size={20} />
              <span>{personalData.location}</span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 pt-4 sm:pt-6"
            >
              <a
                href={personalData.resume}
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-primary-500 text-dark-500 rounded-lg font-semibold hover:bg-primary-400 transition-all duration-300 flex items-center gap-2 hover-glow group text-sm sm:text-base"
              >
                <FiDownload className="group-hover:animate-bounce" size={18} />
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-5 sm:px-6 py-2.5 sm:py-3 glass-effect rounded-lg font-semibold hover:border-primary-400 transition-all duration-300 text-sm sm:text-base"
              >
                Get in Touch
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex justify-center md:justify-start gap-3 sm:gap-4 pt-4 sm:pt-6"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-effect flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-400 transition-all duration-300 hover-glow"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div variants={itemVariants} className="relative mt-8 md:mt-0">
            <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse" />

              {/* Image Container */}
              <div className="relative glass-effect rounded-full p-2 sm:p-3 animate-float">
                <div className="relative rounded-full overflow-hidden aspect-square border-2 border-primary-500/20">
                  <img
                    src={personalData.profileImage}
                    alt={personalData.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-500/50 to-transparent" />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-16 sm:w-24 h-16 sm:h-24 border-4 border-primary-500 rounded-full opacity-30" />
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-20 sm:w-32 h-20 sm:h-32 border-4 border-purple-500 rounded-full opacity-20" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;