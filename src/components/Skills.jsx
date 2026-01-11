const Skills = () => {
  return (
    <section id="skills" className="py-20 md:px-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">
          <span className="gradient-text">My Skills</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Frontend */}
          <div className="bg-gray-800 rounded-xl p-6 w-full animate-fade-in delay-100">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <i className="fas fa-laptop-code text-blue-400 mr-2"></i> Frontend
            </h3>
            <div className="space-y-3">
              <div className="flex items-center skill-icon">
                <i className="fab fa-html5 text-orange-500 text-xl mr-3"></i>
                <span>HTML5</span>
              </div>
              <div className="flex items-center skill-icon">
                <i className="fab fa-css3-alt text-blue-500 text-xl mr-3"></i>
                <span>CSS3</span>
              </div>
              <div className="flex items-center skill-icon">
                <i className="fab fa-js-square text-yellow-400 text-xl mr-3"></i>
                <span>JavaScript</span>
              </div>
              <div className="flex items-center skill-icon">
                <i className="fab fa-react text-blue-400 text-xl mr-3"></i>
                <span>React</span>
              </div>
              <div className="flex items-center skill-icon">
                <i className="fas fa-wind text-cyan-400 text-xl mr-3"></i>
                <span>Tailwind CSS</span>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="bg-gray-800 rounded-xl p-6 animate-fade-in delay-200">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <i className="fas fa-server text-purple-400 mr-2"></i> Backend
            </h3>
            <div className="space-y-3">
              <div className="flex items-center skill-icon">
                <i className="fab fa-node-js text-green-500 text-xl mr-3"></i>
                <span>Node.js</span>
              </div>
              <div className="flex items-center skill-icon">
                <i className="fas fa-code text-gray-300 text-xl mr-3"></i>
                <span>Express.js</span>
              </div>
              <div className="flex items-center skill-icon">
                <i className="fas fa-database text-blue-300 text-xl mr-3"></i>
                <span>MongoDB</span>
              </div>
              <div className="flex items-center skill-icon">
                <i className="fas fa-database text-blue-600 text-xl mr-3"></i>
                <span>SQL</span>
              </div>
            </div>
          </div>

          {/* AI/ML */}
          <div className="bg-gray-800 rounded-xl p-6 animate-fade-in delay-300">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <i className="fas fa-robot text-pink-400 mr-2"></i> AI/ML
            </h3>
            <div className="space-y-3">
              <div className="flex items-center skill-icon">
                <i className="fab fa-python text-blue-500 text-xl mr-3"></i>
                <span>Python</span>
              </div>
              <div className="flex items-center skill-icon">
                <i className="fas fa-calculator text-yellow-500 text-xl mr-3"></i>
                <span>NumPy</span>
              </div>
              <div className="flex items-center skill-icon">
                <i className="fas fa-table text-green-500 text-xl mr-3"></i>
                <span>Pandas</span>
              </div>
              <div className="flex items-center skill-icon">
                <i className="fas fa-chart-bar text-red-500 text-xl mr-3"></i>
                <span>Matplotlib</span>
              </div>
              <div className="flex items-center skill-icon">
                <i className="fas fa-brain text-orange-500 text-xl mr-3"></i>
                <span>Scikit-learn</span>
              </div>
            </div>
          </div>

          {/* Tools & Others */}
          <div className="bg-gray-800 rounded-xl p-6 animate-fade-in delay-400">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <i className="fas fa-tools text-yellow-400 mr-2"></i> Tools &
              Others
            </h3>
            <div className="space-y-3">
              <div className="flex items-center skill-icon">
                <i className="fab fa-git-alt text-orange-600 text-xl mr-3"></i>
                <span>Git</span>
              </div>
              <div className="flex items-center skill-icon">
                <i className="fab fa-github text-gray-200 text-xl mr-3"></i>
                <span>GitHub</span>
              </div>
              <div className="flex items-center skill-icon">
                <i className="fab fa-figma text-purple-400 text-xl mr-3"></i>
                <span>Figma</span>
              </div>
              <div className="flex items-center skill-icon">
                <i className="fas fa-terminal text-green-400 text-xl mr-3"></i>
                <span>CLI</span>
              </div>
              <div className="flex items-center skill-icon">
                <i className="fas fa-fire text-orange-400 text-xl mr-3"></i>
                <span>Firebase</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
