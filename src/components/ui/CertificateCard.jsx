import React from "react";

const CertificateCard = ({ cert, onOpen }) => {
  const categoryClass = Array.isArray(cert.categories)
    ? cert.categories.join(" ")
    : cert.category;

  return (
    <div className={`certificate-card ${categoryClass}`}>
      <img
        src={cert.image}
        alt={cert.title}
        className="certificate-img"
        loading="lazy"
        {...(onOpen ? { onClick: () => onOpen(cert.image) } : {})}
      />

      <h3>{cert.title}</h3>
      <p>{cert.description}</p>
      <a download href={cert.image}>
        ⬇ Download
      </a>
    </div>
  );
};

export default CertificateCard;
