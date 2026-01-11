import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useSmoothScroll from "../hooks/useSmoothScroll";
import useScrollSpy from "../hooks/useScrollSpy";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const smoothScroll = useSmoothScroll();

  // Scroll spy for homepage sections
  const spyActive = useScrollSpy(
    ["home", "about", "skills", "certificates", "projects", "contact"],
    { threshold: 0.6 }
  );

  useEffect(() => {
    // If we're not on the home page, set active based on pathname
    if (pathname !== "/") {
      if (pathname.startsWith("/projects")) setActive("projects");
      else if (pathname.startsWith("/certificates")) setActive("certificates");
      else setActive("");
      return;
    }

    // On home page, use the spy
    if (spyActive) setActive(spyActive);
  }, [pathname, spyActive]);

  const linkClass = (id) => `nav-link ${active === id ? "active" : ""}`;

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setOpen(false);

    // If already on home, smooth scroll directly
    if (pathname === "/") {
      smoothScroll(id);
      setActive(id);
      return;
    }

    // If on other route, navigate to home with hash so ScrollToTop handles it
    navigate(`/${id ? `#${id}` : ""}`);
  };

  return (
    <header className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-sm md:px-16">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="text-2xl font-bold gradient-text"
          >
            Manish.
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              className={linkClass("home")}
              aria-current={active === "home" ? "page" : undefined}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              className={linkClass("about")}
              aria-current={active === "about" ? "page" : undefined}
            >
              About
            </a>
            <a
              href="#skills"
              onClick={(e) => handleNavClick(e, "skills")}
              className={linkClass("skills")}
              aria-current={active === "skills" ? "page" : undefined}
            >
              Skills
            </a>
            <a
              href="#certificates"
              onClick={(e) => handleNavClick(e, "certificates")}
              className={linkClass("certificates")}
              aria-current={active === "certificates" ? "page" : undefined}
            >
              Certificate
            </a>
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, "projects")}
              className={linkClass("projects")}
              aria-current={active === "projects" ? "page" : undefined}
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className={linkClass("contact")}
              aria-current={active === "contact" ? "page" : undefined}
            >
              Contact
            </a>
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-3">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, "home")}
                className={`${linkClass("home")} py-2`}
                aria-current={active === "home" ? "page" : undefined}
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, "about")}
                className={`${linkClass("about")} py-2`}
                aria-current={active === "about" ? "page" : undefined}
              >
                About
              </a>
              <a
                href="#skills"
                onClick={(e) => handleNavClick(e, "skills")}
                className={`${linkClass("skills")} py-2`}
                aria-current={active === "skills" ? "page" : undefined}
              >
                Skills
              </a>
              <a
                href="#certificates"
                onClick={(e) => handleNavClick(e, "certificates")}
                className={`${linkClass("certificates")} py-2`}
                aria-current={active === "certificates" ? "page" : undefined}
              >
                Certificate
              </a>
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, "projects")}
                className={`${linkClass("projects")} py-2`}
                aria-current={active === "projects" ? "page" : undefined}
              >
                Projects
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className={`${linkClass("contact")} py-2`}
                aria-current={active === "contact" ? "page" : undefined}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
