import Navbar from "../components/Navbar";

const WebDevProjects = () => {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        <section className="py-20 md:px-16">
          <div className="container mx-auto px-6">
            {/* HEADER */}
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl md:text-4xl font-bold">
                Web Development Projects
              </h1>
              <a
                href="/"
                className="px-4 py-2 border border-gray-600 rounded-lg"
              >
                ← Back to Home
              </a>
            </div>

            {/* PROJECTS GRID */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* IT Asset Request Management */}
              <div className="bg-gray-800 rounded-xl overflow-hidden project-card flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                    alt="IT Asset Request Management System"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">
                    IT Asset Request Management
                  </h3>

                  <p className="text-gray-300 mb-4">
                    A multi-role workflow management application that
                    streamlines IT asset requests, approvals, and tracking
                    within organizations.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                      React
                    </span>
                    <span className="text-xs bg-green-900/50 text-green-300 px-2 py-1 rounded">
                      Node.js
                    </span>
                    <span className="text-xs bg-yellow-900/50 text-yellow-300 px-2 py-1 rounded">
                      MongoDB
                    </span>
                    <span className="text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded">
                      Tailwind CSS
                    </span>
                  </div>

                  <div className="mt-auto flex space-x-3">
                    <a
                      href="#"
                      target="_blank"
                      className="text-sm bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
                    >
                      Live Demo
                    </a>
                    <a
                      href="https://github.com/manishkr6/govt-it-asset-management"
                      target="_blank"
                      className="text-sm border border-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Hotel Booking */}
              <div className="bg-gray-800 rounded-xl overflow-hidden project-card flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1630&q=80"
                    alt="Hotel Booking System"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">Hotel Booking</h3>

                  <p className="text-gray-300 mb-4">
                    A hotel room booking platform with dedicated user and admin
                    interfaces.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded">
                      React.js
                    </span>
                    <span className="text-xs bg-teal-900/50 text-teal-300 px-2 py-1 rounded">
                      React Router
                    </span>
                    <span className="text-xs bg-pink-900/50 text-pink-300 px-2 py-1 rounded">
                      Tailwind CSS
                    </span>
                  </div>

                  <div className="mt-auto flex space-x-3">
                    <a
                      href="https://hotel-booking-frontend-gules.vercel.app/"
                      target="_blank"
                      className="text-sm bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
                    >
                      Live Demo
                    </a>
                    <a
                      href="https://github.com/manishkr6/Hotel-Booking-Frontend"
                      target="_blank"
                      className="text-sm border border-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* GITHUB BUTTON */}
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
      </main>
    </>
  );
};

export default WebDevProjects;
