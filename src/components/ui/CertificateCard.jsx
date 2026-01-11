import React from "react";

const CertificateCard = ({ cert, onOpen }) => {
  return (
    <div className={`certificate-card ${cert.category}`}>
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
