import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certificate from "../components/Certificate";
import Contact from "../components/Contact";
import HomeSection from "../components/HomeSection";

const Home = () => {
  return (
    <>
      <HomeSection />
      <About />
      <Skills />
      <Certificate />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
