export const certificatesData = [
  {
    id: 1,
    title: "Government of Sikkim – IT Internship",
    issuer: "Govt of sikkim",
    date: "December 2024",
    category: "web-dev",
    description:
      "MERN Stack internship working on real government IT projects.",
    image:
      "https://ik.imagekit.io/manishkr5487/certificate/Govt%20of%20Sikkim%20Internships%20.jpg?updatedAt=1757424281201",
    credentialId: "CERT-12345",
    skills: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    id: 2,
    title: "British Airways - Data Science Job Simulation",
    issuer: "Forage",
    date: "November 2024",
    category: "data-science",
    description:
      "Completed the British Airways Data Science Job Simulation on Forage, applying data analysis and machine learning to predict lounge demand and customer behavior.",
    image:
      "https://ik.imagekit.io/manishkr5487/certificate/DataScience.png?updatedAt=1770698945685",
    credentialId: "EKg7QJGvi9MiKAXAm",
    skills: [
      "Machine Learning Modeling",
      "Data Analysis",
      "Feature Engineering",
      "Predictive Analytics",
    ],
  },
  {
    id: 3,
    title: "AI & ML Bootcamp – Udemy",
    issuer: "Udemy",
    date: "October 2024",
    category: "ai-ml",
    description: "Comprehensive AI, ML & Data Science training.",
    image:
      "https://ik.imagekit.io/manishkr5487/certificate/WhatsApp%20Image%202025-08-23%20at%2011.44.43_a3759916.jpg?updatedAt=1756032982167",
    credentialId: "CERT-54321",
    skills: [
      "Machine Learning",
      "Python",
      "Data Preprocessing",
      "Model Evaluation",
    ],
  },
  {
    id: 4,
    title: "TATA – GenAI Powered Data Analytics",
    issuer: "Forage",
    date: "September 2024",
    category: "data-analytics",
    description: "Virtual job simulation focused on GenAI-powered analytics.",
    image:
      "https://ik.imagekit.io/manishkr5487/certificate/WhatsApp%20Image%202025-08-23%20at%2011.44.43_a3759916.jpg?updatedAt=1756032982167",
    credentialId: "",
    skills: [
      "Python",
      "Data Analytics",
      "Machine Learning",
      "Model Evaluation",
    ],
  },
  {
    id: 5,
    title: "Deloitte – Data Analytics",
    issuer: "Forage",
    date: "August 2024",
    category: "data-analytics",
    description: "Hands-on experience with real-world data analytics tasks.",
    image:
      "https://ik.imagekit.io/manishkr5487/certificate/Delotte-Certificate-1.png?updatedAt=1752769353191",
    credentialId: "",
    skills: [
      "Data Analysis",
      "Data Cleaning",
      "Data Visualization",
      "Business Insights",
      "Problem Solving",
    ],
  },
  {
    id: 6,
    title: "Web Development Bootcamp – Udemy",
    issuer: "DataCamp",
    date: "July 2024",
    category: "web-dev",
    description:
      "Completed a Web Development Bootcamp, learning to build responsive and full-stack web applications using modern technologies.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
    credentialId: "",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  },
];

export const certificateCategories = [
  { id: "all", name: "All Certificates", count: certificatesData.length },
  {
    id: "web-dev",
    name: "Web Development",
    count: certificatesData.filter((c) => c.category === "web-dev").length,
  },
  {
    id: "ai-ml",
    name: "AI/ML",
    count: certificatesData.filter((c) => c.category === "ai-ml").length,
  },
  {
    id: "data-science",
    name: "Data Science",
    count: certificatesData.filter((c) => c.category === "data-science").length,
  },
  {
    id: "data-analytics",
    name: "Data Analytics",
    count: certificatesData.filter((c) => c.category === "data-analytics").length,
  },
];
