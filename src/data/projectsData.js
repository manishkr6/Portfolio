export const projectsData = {
  webDev: [
    {
      id: 1,
      title: "IT Asset Management System",
      description:
        "Workflow-based IT asset request system developed for the Government of Sikkim with role-specific actions and secure authentication.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      longDescription:
        "A comprehensive workflow-based IT asset request system with user, operator, verifier, approver, and super admin roles. Features secure login, role-based dashboards, and complete request tracking from submission to approval.",
      technologies: [
        { name: "React.js", color: "cyan" },
        { name: "Node.js", color: "green" },
        { name: "Express.js", color: "gray" },
        { name: "MongoDB", color: "emerald" },
        { name: "Tailwind CSS", color: "blue" },
      ],
      features: [
        "Role-based access control",
        "Workflow automation",
        "Real-time notifications",
        "Advanced reporting dashboard",
      ],
      github: "https://github.com/manishkr6/govt-it-asset-management",
      live: "https://github.com/manishkr6/govt-it-asset-management",
      category: "Full Stack",
    },
    {
      id: 2,
      title: "Sikkim Hotel Booking & Travel Guide Platform",
      description:
        "A full-stack travel and hotel booking platform with Clerk authentication, allowing users to explore Sikkim districts, discover tourist places, and book hotels online.",

      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1630&q=80",

      longDescription:
        "A modern MERN-based travel and hotel booking web application designed specifically for Sikkim tourism. Users can explore detailed travel pages for all four districts (East, West, North, and South Sikkim), view attractions and travel information, and book hotels based on availability. The platform includes secure authentication using Clerk, real-time room booking, booking history management, and an admin panel for managing hotels and listings. Built with a responsive UI to ensure smooth performance across devices.",

      technologies: [
        { name: "React", color: "cyan" },
        { name: "Node.js", color: "green" },
        { name: "Express.js", color: "gray" },
        { name: "MongoDB", color: "emerald" },
        { name: "Clerk Auth", color: "purple" },
        { name: "Tailwind CSS", color: "sky" },
      ],

      features: [
        "Clerk login & authentication",
        "4 district travel guide pages (East, West, North, South Sikkim)",
        "Hotel & room listing with images",
        "Search, filter & availability check",
        "Online booking & reservation system",
        "Booking history dashboard",
        "Admin panel for hotel management",
        "Fully responsive design",
      ],

      github: "https://github.com/manishkr6/sikkim-luxlodge",
      live: "https://sikkim-luxlodge.vercel.app/",
      category: "Full Stack",
    },
  ],

  aiMl: [
    {
      id: 1,
      title: "Heart Health Predictor",
      description:
        "Machine learning system that predicts heart disease risk based on medical parameters like age, blood pressure, and cholesterol.",

      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop",

      longDescription:
        "A healthcare-focused machine learning application that analyzes patient health metrics to predict the risk of heart disease. Implemented multiple models including Logistic Regression, Random Forest, and SVM, and compared their performance to achieve better accuracy. Includes data preprocessing, visualization, and an interactive Streamlit interface for quick real-time predictions with future web app integration.",

      technologies: [
        { name: "Python", color: "blue" },
        { name: "Pandas", color: "purple" },
        { name: "NumPy", color: "yellow" },
        { name: "Scikit-learn", color: "orange" },
        { name: "Matplotlib", color: "green" },
        { name: "Streamlit", color: "red" },
      ],

      features: [
        "Health data preprocessing",
        "Multiple ML model comparison",
        "Risk prediction with high accuracy",
        "Interactive Streamlit dashboard",
      ],

      github: "https://github.com/manishkr6/heart-health-predictor",
      live: "https://heart-health-predictor.streamlit.app/",
      category: "Machine Learning",
    },
    {
      id: 2,
      title: "Movie Recommendation System",
      description:
        "Content-based movie recommender that suggests similar movies using cosine similarity and machine learning.",

      image:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=500&fit=crop",

      longDescription:
        "A content-based movie recommendation system built with Python and Machine Learning that suggests movies based on similarity of genres, keywords, and features. Uses cosine similarity to compute recommendations and provides an interactive Streamlit interface where users can select a movie and instantly view related suggestions. Designed for fast performance and an intuitive user experience.",

      technologies: [
        { name: "Python", color: "blue" },
        { name: "Pandas", color: "purple" },
        { name: "NumPy", color: "yellow" },
        { name: "Scikit-learn", color: "orange" },
        { name: "Streamlit", color: "red" },
      ],

      features: [
        "Content-based filtering",
        "Cosine similarity algorithm",
        "Instant movie suggestions",
        "Interactive Streamlit UI",
      ],

      github: "https://github.com/manishkr6/movie-recommendation-system",
      live: "https://manishkr6-movie-recommendation-system-app-xzcclt.streamlit.app/",
      category: "Machine Learning",
    },
  ],
};

export const projectCategories = {
  webDev: {
    id: "web",
    title: "Web Development",
    description:
      "Full-stack web applications with modern technologies, responsive design, and interactive user interfaces.",
    longDescription:
      "I specialize in building scalable and performant web applications using modern technologies. From frontend frameworks like React to backend solutions with Node.js, I create complete digital experiences.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    icon: "Code",
    color: "from-cyan-500 to-blue-500",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "Firebase",
    ],
  },
  aiMl: {
    id: "aiml",
    title: "AI/ML & Data Science",
    description:
      "Intelligent systems powered by machine learning, deep learning, and natural language processing for solving complex problems.",
    longDescription:
      "I develop intelligent solutions using machine learning and data science. From computer vision projects to NLP applications, I leverage AI to create innovative applications that learn and adapt.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop",
    icon: "Brain",
    color: "from-purple-500 to-pink-500",
    skills: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "NLP",
      "Computer Vision",
      "Pandas",
      "OpenCV",
    ],
  },
};
