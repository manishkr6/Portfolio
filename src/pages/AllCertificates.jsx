import { useEffect, useState } from "react";
import { certificatesData } from "../assets/data";
import { Link } from "react-router-dom";
import Modal from "../components/ui/Modal";
import CertificateCard from "../components/ui/CertificateCard";
import Skeleton from "../components/ui/Skeleton";

const AllCertificates = () => {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [modalImg, setModalImg] = useState(null);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  const filteredCertificates = certificatesData.filter((cert) => {
    const matchFilter =
      activeFilter === "all" || cert.category === activeFilter;

    const matchSearch = cert.title.toLowerCase().includes(search.toLowerCase());

    return matchFilter && matchSearch;
  });

  return (
    <>
      <main className="pt-24 pb-12 max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-8">
          My Certificates
        </h1>

        {/* Search */}
        <div className="max-w-md mx-auto mb-6">
          <input
            type="text"
            placeholder="Search certificates..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["all", "internship", "web", "ai", "competition"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`filter-btn ${
                activeFilter === filter ? "active" : ""
              }`}
            >
              {filter === "all"
                ? "All"
                : filter === "internship"
                ? "Internship"
                : filter === "web"
                ? "Web Dev"
                : filter === "ai"
                ? "AI / ML"
                : "Competition"}
            </button>
          ))}
        </div>

        {/* Skeleton */}
        {loading && (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        )}

        {/* Certificates */}
        {!loading && (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredCertificates.map((cert) => (
              <CertificateCard
                key={cert.id}
                cert={cert}
                onOpen={(img) => setModalImg(img)}
              />
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link
            to="/"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"
          >
            Back to Home
          </Link>
        </div>
      </main>

      {/* Image Modal */}
      <Modal open={!!modalImg} onClose={() => setModalImg(null)}>
        <img
          src={modalImg}
          className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
        />
      </Modal>
    </>
  );
};

export default AllCertificates;
