// ================= PROFILE & GENERAL IMAGES =================
import profileImg from "./profile.png";
import photoImg from "./photo.png";
import heartImg from "./Heart.jpg";
import aiImg from "./AI.jpeg";
import img123 from "./123.png";

// ================= PROJECT IMAGES =================
import webDevImg from "./web_development.jpg";
import movieRecommendationImg from "./movie-recommendation.png";

// ================= CERTIFICATE IMAGES =================
import aiMlUdemy from "./certificates/AI-Ml_Udemy.png";
import deloitteDataAnalytics from "./certificates/Deloitte_Data_Analytics.png";
import govtInternship from "./certificates/Govt_internship.jpg";
import tataGenAI from "./certificates/Tata_gen_ai.png";
import webDevUdemy from "./certificates/WebDev_Udemy.jpg";

// ================= RESUME =================
import resumePDF from "./Manish_Kumar_Resume.pdf";

// =================================================
// EXPORTS
// =================================================

// Profile / Common Images
export const images = {
  profile: profileImg,
  photo: photoImg,
  heart: heartImg,
  ai: aiImg,
  img123: img123,
};

// ===== PROJECTS DATA =====
export const projects = [
  {
    id: 1,
    title: "Web Development Portfolio",
    image: webDevImg,
  },
  {
    id: 2,
    title: "Movie Recommendation System",
    image: movieRecommendationImg,
  },
];

// ===== CERTIFICATES DATA =====
export const certificatesData = [
  {
    id: 1,
    title: "Government of Sikkim – IT Internship",
    description:
      "MERN Stack internship working on real government IT projects.",
    image: govtInternship,
    category: "internship",
  },
  {
    id: 2,
    title: "TATA – GenAI Powered Data Analytics",
    description: "Virtual job simulation focused on GenAI-powered analytics.",
    image: tataGenAI,
    category: "ai",
  },
  {
    id: 3,
    title: "AI & ML Bootcamp – Udemy",
    description: "Comprehensive AI, ML & Data Science training.",
    image: aiMlUdemy,
    category: "ai",
  },
  {
    id: 4,
    title: "Deloitte – Data Analytics",
    description: "Hands-on experience with real-world data analytics tasks.",
    image: deloitteDataAnalytics,
    category: "data",
  },
  {
    id: 5,
    title: "Web Development Bootcamp – Udemy",
    description: "HTML, CSS, JavaScript, React, Node & MongoDB.",
    image: webDevUdemy,
    category: "web",
  },
];

// ===== RESUME =====
export const resume = {
  file: resumePDF,
  name: "Manish Kumar Baitha Resume",
};
