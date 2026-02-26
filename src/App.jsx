import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProjectDetails from "./pages/ProjectDetails";
import AllCertificates from "./pages/AllCertificates";
import CertificateDetails from "./pages/CertificateDetails";
import ProjectCategory from "./pages/ProjectCategory";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-dark-500 min-h-screen relative">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:categoryId" element={<ProjectCategory />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/certificates" element={<AllCertificates />} />
            <Route path="/certificate/:id" element={<CertificateDetails />} />
          </Routes>
        </main>
        <Footer />
        <Cursor />
      </div>
    </Router>
  );
}

export default App;
