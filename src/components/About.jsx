import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { SiWebassembly, SiTensorflow, SiPandas } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { personalData } from "../data/personalData";

const About = () => {
  const skills = [
    { name: "Web Development", icon: SiWebassembly, color: "text-blue-400" },
    { name: "Machine Learning", icon: SiTensorflow, color: "text-purple-400" },
    { name: "Data Analysis", icon: SiPandas, color: "text-green-400" },
    { name: "Responsive Design", icon: FaLaptopCode, color: "text-orange-400" },
  ];

  const aboutText = {
    intro:
      "Hi, I'm Manish Kumar Baitha — an aspiring AI & Machine Learning Engineer, Data Science enthusiast, and passionate Web Developer. I enjoy turning ideas into intelligent, data-driven solutions and clean, user-friendly web applications.",
    skills:
      "My skillset includes Python, Pandas, NumPy, Matplotlib, Scikit-learn, TensorFlow, and SQL for AI, ML, and analytics, along with HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB for web development. I love building predictive models, analyzing data, visualizing insights, and creating responsive, interactive web tools.",
    personal:
      "Outside of coding, you'll find me hiking in the hills, enjoying coffee while planning new ideas, or playing badminton. I believe in continuous learning and pushing boundaries to build meaningful, impactful projects.",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-dark-900 to-dark-950"
    >
      {/* Background glows */}
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-16 sm:top-20 right-6 sm:right-10 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-16 sm:bottom-20 left-6 sm:left-10 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-blue-600/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center md:grid md:grid-cols-[auto,1fr] md:gap-10 lg:gap-16"
        >
          {/* Photo + Name + Title (centered on mobile, left on desktop) */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center md:items-start mb-8 md:mb-0"
          >
            <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 rounded-2xl overflow-hidden border-2 border-primary-500/30 shadow-2xl shadow-black/40">
              <img
                src={personalData.profileImage}
                alt="Manish Kumar Baitha"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>

            <div className="mt-5 sm:mt-6 text-center md:text-left">
              <h3 className="text-2xl sm:text-2.5xl md:text-3xl font-bold text-white">
                Manish Kumar Baitha
              </h3>
              <p className="mt-1 sm:mt-2 w-64 sm:w-72 md:w-80 lg:w-96 text-primary-400 font-medium text-base sm:text-lg max-w-[280px] sm:max-w-none">
                AI/ML & Data Science Enthusiast | Web Developer
              </p>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            className="w-full space-y-5 sm:space-y-6 md:space-y-8 text-center md:text-left"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3.5xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-purple-500 bg-clip-text text-transparent"
            >
              About Me
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto md:mx-0 text-justify"
            >
              {aboutText.intro}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto md:mx-0 text-justify"
            >
              {aboutText.skills}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto md:mx-0 text-justify"
            >
              {aboutText.personal}
            </motion.p>

            {/* Skills */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 pt-3 sm:pt-4"
            >
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-dark-800/70 border border-dark-700 rounded-full hover:border-primary-500/60 transition-all duration-300 backdrop-blur-sm"
                  >
                    <Icon className={`text-lg sm:text-xl ${skill.color}`} />
                    <span className="text-gray-200 font-medium text-sm sm:text-base">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </motion.div>

            {/* Download CV Button */}
            
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
