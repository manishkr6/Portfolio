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
      github: "#",
      live: "#",
      category: "Full Stack",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description:
        "Modern e-commerce platform with shopping cart, payment integration, and admin dashboard.",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
      longDescription:
        "Full-featured e-commerce platform with product management, shopping cart, secure payment processing, order tracking, and comprehensive admin dashboard for inventory and sales management.",
      technologies: [
        { name: "React", color: "cyan" },
        { name: "Redux", color: "purple" },
        { name: "Node.js", color: "green" },
        { name: "MongoDB", color: "emerald" },
        { name: "Stripe", color: "indigo" },
      ],
      features: [
        "Product catalog with search",
        "Shopping cart & wishlist",
        "Payment integration",
        "Order management",
      ],
      github: "#",
      live: "#",
      category: "Full Stack",
    },
    {
      id: 3,
      title: "Task Management Dashboard",
      description:
        "Collaborative task management application with real-time updates and team collaboration features.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
      longDescription:
        "A collaborative project management tool featuring real-time task updates, team collaboration, deadline tracking, and productivity analytics with an intuitive drag-and-drop interface.",
      technologies: [
        { name: "React", color: "cyan" },
        { name: "TypeScript", color: "blue" },
        { name: "Firebase", color: "yellow" },
        { name: "Material-UI", color: "indigo" },
      ],
      features: [
        "Drag & drop interface",
        "Real-time collaboration",
        "Activity tracking",
        "Custom workflows",
      ],
      github: "#",
      live: "#",
      category: "Frontend",
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media metrics with data visualization and insights.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      longDescription:
        "Comprehensive social media analytics platform providing insights into engagement metrics, audience demographics, content performance, and trend analysis with interactive visualizations.",
      technologies: [
        { name: "React", color: "cyan" },
        { name: "Chart.js", color: "pink" },
        { name: "REST API", color: "green" },
        { name: "Tailwind", color: "blue" },
      ],
      features: [
        "Real-time analytics",
        "Interactive charts",
        "Performance metrics",
        "Export reports",
      ],
      github: "#",
      live: "#",
      category: "Frontend",
    },
    {
      id: 5,
      title: "Blog Platform",
      description:
        "Full-featured blogging platform with markdown support and SEO optimization.",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop",
      longDescription:
        "Modern blogging platform with markdown editor, SEO optimization, comment system, and analytics. Features include draft management, scheduled publishing, and social media integration.",
      technologies: [
        { name: "Next.js", color: "gray" },
        { name: "MDX", color: "yellow" },
        { name: "PostgreSQL", color: "blue" },
        { name: "Vercel", color: "black" },
      ],
      features: [
        "Markdown editor",
        "SEO optimization",
        "Comment system",
        "Analytics integration",
      ],
      github: "#",
      live: "#",
      category: "Full Stack",
    },
  ],
  aiMl: [
    {
      id: 1,
      title: "Image Classification System",
      description:
        "Deep learning model for image classification using Convolutional Neural Networks with high accuracy.",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop",
      longDescription:
        "Advanced image classification system using deep learning. Trained on large datasets to classify images into multiple categories with high accuracy. Implements transfer learning and data augmentation techniques.",
      technologies: [
        { name: "Python", color: "blue" },
        { name: "TensorFlow", color: "orange" },
        { name: "Keras", color: "red" },
        { name: "OpenCV", color: "green" },
        { name: "Flask", color: "gray" },
      ],
      features: [
        "CNN architecture",
        "Transfer learning",
        "Real-time prediction",
        "Model optimization",
      ],
      github: "#",
      live: "#",
      category: "Computer Vision",
    },
    {
      id: 2,
      title: "Sentiment Analysis Tool",
      description:
        "NLP-based sentiment analysis tool for social media posts and product reviews.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      longDescription:
        "Natural Language Processing tool for analyzing sentiment in text data. Uses advanced NLP techniques to classify text as positive, negative, or neutral with detailed emotion analysis and visualization.",
      technologies: [
        { name: "Python", color: "blue" },
        { name: "NLTK", color: "green" },
        { name: "Transformers", color: "yellow" },
        { name: "FastAPI", color: "teal" },
        { name: "React", color: "cyan" },
      ],
      features: [
        "Multi-language support",
        "Emotion detection",
        "Batch processing",
        "API integration",
      ],
      github: "#",
      live: "#",
      category: "NLP",
    },
    {
      id: 3,
      title: "House Price Predictor",
      description:
        "Machine learning model to predict house prices based on various features using regression algorithms.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
      longDescription:
        "Predictive analytics system for real estate pricing. Uses multiple regression algorithms and feature engineering to accurately predict house prices based on location, size, amenities, and market trends.",
      technologies: [
        { name: "Python", color: "blue" },
        { name: "Scikit-learn", color: "orange" },
        { name: "Pandas", color: "purple" },
        { name: "Streamlit", color: "red" },
        { name: "Matplotlib", color: "blue" },
      ],
      features: [
        "Feature engineering",
        "Multiple algorithms",
        "Interactive UI",
        "Model comparison",
      ],
      github: "#",
      live: "#",
      category: "Machine Learning",
    },
    {
      id: 4,
      title: "Chatbot Assistant",
      description:
        "AI-powered chatbot using natural language understanding for customer support automation.",
      image:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=500&fit=crop",
      longDescription:
        "Intelligent conversational AI system powered by advanced NLP models. Provides automated customer support with context awareness, multi-turn conversations, and seamless human handoff capabilities.",
      technologies: [
        { name: "Python", color: "blue" },
        { name: "Rasa", color: "purple" },
        { name: "spaCy", color: "cyan" },
        { name: "MongoDB", color: "green" },
        { name: "WebSocket", color: "yellow" },
      ],
      features: [
        "Intent recognition",
        "Context awareness",
        "Multi-language",
        "Analytics dashboard",
      ],
      github: "#",
      live: "#",
      category: "NLP",
    },
    {
      id: 5,
      title: "Object Detection System",
      description:
        "Real-time object detection and tracking system using YOLO algorithm for surveillance applications.",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=500&fit=crop",
      longDescription:
        "Advanced computer vision system for real-time object detection and tracking. Implements state-of-the-art YOLO algorithm for high-speed detection with applications in security, traffic monitoring, and automation.",
      technologies: [
        { name: "Python", color: "blue" },
        { name: "PyTorch", color: "red" },
        { name: "YOLO", color: "yellow" },
        { name: "OpenCV", color: "green" },
        { name: "CUDA", color: "green" },
      ],
      features: [
        "Real-time detection",
        "Multi-object tracking",
        "Custom training",
        "GPU acceleration",
      ],
      github: "#",
      live: "#",
      category: "Computer Vision",
    },
    {
      id: 6,
      title: "Recommendation System",
      description:
        "Collaborative filtering-based recommendation engine for personalized content suggestions.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop",
      longDescription:
        "Intelligent recommendation system using collaborative and content-based filtering techniques. Provides personalized suggestions based on user behavior, preferences, and similarity analysis with continuous learning capabilities.",
      technologies: [
        { name: "Python", color: "blue" },
        { name: "Scikit-learn", color: "orange" },
        { name: "Surprise", color: "purple" },
        { name: "Redis", color: "red" },
        { name: "FastAPI", color: "teal" },
      ],
      features: [
        "Hybrid filtering",
        "Cold start handling",
        "Real-time updates",
        "A/B testing",
      ],
      github: "#",
      live: "#",
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
