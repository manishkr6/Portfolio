import { useEffect, useState } from "react";
import profileImg from "../assets/profile.png";

const HomeSection = () => {
  const texts = ["AI / ML Enthusiast", "Data Analytics", "Web Developer"];

  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const current = texts[textIndex];

    if (!isDeleting && displayText === current) {
      // pause before deleting (a bit longer so users can read)
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      // move to next text after deleting
      setIsDeleting(false);
      setTextIndex((i) => (i + 1) % texts.length);
    } else {
      // make typing feel smoother by varying speed small amounts
      const delta = Math.round(
        isDeleting ? 40 + Math.random() * 40 : 80 + Math.random() * 40
      ); // typing / deleting speed (ms)

      timeout = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? current.substring(0, prev.length - 1)
            : current.substring(0, prev.length + 1)
        );
      }, delta);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 md:px-16"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* LEFT CONTENT */}
          <div className="md:w-1/2 mb-12 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">Manish Kumar Baitha</span>
            </h1>

            <h2
              className="text-2xl md:text-2xl lg:text-3xl font-semibold mb-6"
              aria-live="polite"
            >
              <span className="typing">{displayText}</span>
            </h2>

            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              I design engaging, responsive web applications and create machine
              learning solutions that turn data into impactful, real-world
              results.
            </p>

            <div className="flex space-x-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:opacity-90 transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-6 py-3 border border-gray-600 rounded-lg font-medium hover:bg-gray-800 transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="md:w-1/3 animate-fade-in delay-100">
            <div className="relative max-w-md mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-75"></div>

              <div className="relative bg-gray-800 rounded-xl overflow-hidden">
                <img
                  src={profileImg}
                  alt="Manish Kumar Baitha"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
