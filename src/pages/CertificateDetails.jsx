import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiX, FiAward, FiCalendar, FiArrowLeft, FiDownload, FiBookOpen } from "react-icons/fi";
import { certificatesData } from "../data/certificatesData";
import { useEffect } from "react";

const CertificateDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cert = certificatesData.find((c) => c.id === parseInt(id));

  if (!cert) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-500 text-white pt-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Certificate Not Found</h2>
          <button
            onClick={() => navigate("/certificates")}
            className="px-6 py-2 bg-primary-500 rounded-lg text-dark-500 font-semibold"
          >
            Back to Certificates
          </button>
        </div>
      </div>
    );
  }

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cert.image;
    link.download = `${cert.title.replace(/\s+/g, "_")}_certificate.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-dark-500 pt-24 pb-20 px-4">
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/#certificates")}
          className="flex items-center gap-2 text-primary-400 hover:text-primary-300 mb-8 font-medium transition-colors"
        >
          <FiArrowLeft size={20} />
          Back
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Certificate Image */}
          <div className="relative aspect-auto flex justify-center bg-black/40">
            <img
              src={cert.image}
              alt={cert.title}
              className="max-h-[70vh] w-auto object-contain"
            />
          </div>

          {/* Certificate Details */}
          <div className="p-6 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
                  {cert.title}
                </h1>
                <p className="text-primary-400 text-xl font-medium">
                  {cert.issuer}
                </p>
              </div>
              <button
                onClick={handleDownload}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-primary-500/20"
              >
                <FiDownload size={20} />
                Download Certificate
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 text-base">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <p className="text-gray-500 mb-1 flex items-center gap-2">
                  <FiCalendar size={16} /> Issue Date
                </p>
                <p className="text-white font-semibold text-lg">
                  {cert.date}
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <p className="text-gray-500 mb-1 flex items-center gap-2">
                  <FiAward size={16} /> Credential ID
                </p>
                <p className="text-white font-semibold text-lg font-mono break-all">
                  {cert.credentialId || "N/A"}
                </p>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-gray-500 mb-3 text-lg font-medium flex items-center gap-2">
                <span className="w-6 h-0.5 bg-primary-500" /> Description
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {cert.description}
              </p>
            </div>

            <div>
              <h3 className="text-gray-500 mb-4 text-lg font-medium flex items-center gap-2">
                <span className="w-6 h-0.5 bg-primary-500" /> Skills & Competencies
              </h3>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-xl bg-primary-900/30 text-primary-300 border border-primary-800/40 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CertificateDetails;
