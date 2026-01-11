import webImg from "../assets/web_development.jpg";
import aiImg from "../assets/AI.jpeg";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 md:px-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">
          <span className="gradient-text">Featured Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8 animate-fade-in">
          {/* WEB PROJECTS */}
          <Link to={"/projects/web"}
            className="project-category-card block rounded-xl overflow-hidden p-6 bg-gray-800 hover:scale-[1.02] transition transform flex flex-col justify-between min-h-[280px]"
          >
            <div className="card-image h-40 md:h-60 w-full overflow-hidden rounded-md mb-4">
              <img
                src={webImg}
                alt="Web Development"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold">Web Development Projects</h3>
              <p className="text-gray-300 mt-2">
                Crafting responsive, accessible websites and interactive
                single-page applications using modern web technologies and best
                UX practices.
              </p>
            </div>
          </Link>

          {/* AI PROJECTS */}
          <Link to={"/projects/ai"}
            className="project-category-card block rounded-xl overflow-hidden p-6 bg-gray-800 hover:scale-[1.02] transition transform flex flex-col justify-between min-h-[280px]"
          >
            <div className="card-image h-40 md:h-60 w-full overflow-hidden rounded-md mb-4">
              <img
                src={aiImg}
                alt="AI and Data Science"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold">
                AI / ML & Data Science Projects
              </h3>
              <p className="text-gray-300 mt-2">
                Designing predictive models, recommendation systems, and visual
                analytics that transform raw data into clear, actionable
                insights.
              </p>
            </div>
          </Link>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/manishkr6"
            target="_blank"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:opacity-90 transition"
          >
            <i className="fab fa-github mr-2"></i>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
