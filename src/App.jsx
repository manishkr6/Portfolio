import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import AllCertificates from "./pages/AllCertificates";
import AIProjects from "./pages/AIprojects";
import WebProjects from "./pages/WebDevProjects";
import WebDevProjects from "./pages/WebDevProjects";
import AIprojects from "./pages/AIprojects";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certificates" element={<AllCertificates />} />
        <Route path="/projects/ai" element={<AIprojects />} />
        <Route path="/projects/web" element={<WebDevProjects />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
