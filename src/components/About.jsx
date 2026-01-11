import profileImg from "../assets/123.png";
import resumePdf from "../assets/Manish_Kumar_Resume.pdf";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 md:px-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">
          <span className="gradient-text">About Me</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* LEFT CARD */}
          <div className="md:w-1/3 animate-fade-in delay-100">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-1 rounded-2xl">
              <div className="bg-gray-800 rounded-xl p-6 h-full">
                <img
                  src={profileImg}
                  alt="Manish Kumar Baitha"
                  className="w-full h-auto rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Manish Kumar Baitha
                </h3>
                <p className="text-gray-300">
                  AI/ML & Data Science Enthusiast | Frontend Web Developer
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="md:w-2/3 animate-fade-in delay-200">
            <p className="text-lg mb-6 text-justify">
              Hi, I’m Manish Kumar Baitha — an aspiring AI & Machine Learning
              Engineer, Data Science enthusiast, and passionate Frontend Web
              Developer. I enjoy turning ideas into intelligent, data-driven
              solutions and clean, user-friendly web applications.
            </p>

            <p className="text-lg mb-6 text-justify">
              My skillset includes Python, Pandas, NumPy, Matplotlib,
              Scikit-learn, TensorFlow, and SQL for AI, ML, and analytics, along
              with HTML, CSS, JavaScript, React, Node.js, Express.js, and
              MongoDB for web development. I love building predictive models,
              analyzing data, visualizing insights, and creating responsive,
              interactive web tools.
            </p>

            <p className="text-lg mb-6 text-justify">
              Outside of coding, you’ll find me hiking in the hills, enjoying
              coffee while planning new ideas, or playing badminton. I believe
              in continuous learning and pushing boundaries to build meaningful,
              impactful projects.
            </p>

            {/* SKILL TAGS */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-gray-800 px-4 py-2 rounded-lg">
                <i className="fas fa-code text-blue-400 mr-2"></i>
                <span>Web Development</span>
              </div>

              <div className="flex items-center bg-gray-800 px-4 py-2 rounded-lg">
                <i className="fas fa-brain text-purple-400 mr-2"></i>
                <span>Machine Learning</span>
              </div>

              <div className="flex items-center bg-gray-800 px-4 py-2 rounded-lg">
                <i className="fas fa-chart-line text-green-400 mr-2"></i>
                <span>Data Analysis</span>
              </div>

              <div className="flex items-center bg-gray-800 px-4 py-2 rounded-lg">
                <i className="fas fa-mobile-alt text-yellow-400 mr-2"></i>
                <span>Responsive Design</span>
              </div>

              {/* DOWNLOAD CV */}
              <div className="flex mt-10 items-center bg-gray-800 px-4 py-2 rounded-lg">
                <a href={resumePdf} download className="flex items-center">
                  <i className="fas fa-download text-red-400 mr-2"></i>
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
