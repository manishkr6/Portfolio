import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "./ui/Modal";
import { certificatesData } from "../assets/data";

const Certificate = () => {
  const homeCertificates = certificatesData.slice(0, 3);
  const [modalImg, setModalImg] = useState(null);

  return (
    <section id="certificates" className="py-20 md:px-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">
          <span className="gradient-text">Certificates</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-fade-in delay-100 certificate-grid">
          {homeCertificates.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <img
                src={cert.image}
                alt={cert.title}
                className="certificate-img cursor-zoom-in"
                loading="lazy"
                onClick={() => setModalImg(cert.image)}
              />

              <h3 className="text-lg font-semibold mt-4">{cert.title}</h3>

              <p className="text-gray-300 text-sm mt-2">{cert.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 animate-fade-in delay-200">
          <Link
            to="/certificates"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:opacity-90 transition"
          >
            View More Certificates
          </Link>
        </div>

        <Modal open={!!modalImg} onClose={() => setModalImg(null)}>
          <img
            src={modalImg}
            className="max-w-[calc(100vw-96px)] max-h-[calc(100vh-96px)] object-contain rounded-xl shadow-2xl cursor-zoom-out"
            onClick={() => setModalImg(null)}
          />
        </Modal>
      </div>
    </section>
  );
};

export default Certificate;
