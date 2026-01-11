import Navbar from "../components/Navbar";
import heartImg from "../assets/Heart.jpg";
import movieImg from "../assets/movie-recommendation.png";

const AIprojects = () => {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        <section className="py-20 md:px-16">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl md:text-4xl font-bold">
                AI / ML & Data Science Projects
              </h1>
              <a href="/" className="px-4 py-2 border border-gray-600 rounded-lg">
                ← Back to Home
              </a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Heart Health Predictor */}
              <div className="bg-gray-800 rounded-xl overflow-hidden flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img src={heartImg} className="w-full h-full object-cover" />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">Heart Health Predictor</h3>
                  <p className="text-gray-300 mb-4">
                    An AI-powered health analysis tool that predicts potential heart disease risk using user-provided health metrics.
                  </p>

                  <div className="mt-auto flex space-x-3">
                    <a
                      href="https://heart-health-predictor.streamlit.app/"
                      target="_blank"
                      className="text-sm bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
                    >
                      Live Demo
                    </a>
                    <a
                      href="https://github.com/manishkr6/heart-health-predictor"
                      target="_blank"
                      className="text-sm border border-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Movie Recommendation */}
              <div className="bg-gray-800 rounded-xl overflow-hidden flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img src={movieImg} className="w-full h-full object-cover" />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">Movie Recommendation System</h3>
                  <p className="text-gray-300 mb-4">
                    A machine-learning powered content-based movie recommender built using Python and Streamlit.
                  </p>

                  <div className="mt-auto flex space-x-3">
                    <a
                      href="https://manishkr6-movie-recommendation-system-app-xzcclt.streamlit.app/"
                      target="_blank"
                      className="text-sm bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
                    >
                      Live Demo
                    </a>
                    <a
                      href="https://github.com/manishkr6/movie-recommendation-system"
                      target="_blank"
                      className="text-sm border border-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </>
  );
};

export default AIprojects;
