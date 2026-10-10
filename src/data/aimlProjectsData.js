export const aimlProjectsData = [
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
      "https://ik.imagekit.io/manishkr5487/My-Photo/movie-recommendation.png?updatedAt=1770898392661",
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
  {
    id: 3,
    title: "ResearchMind AI (Multi-Agent AI Research System)",
    description:
      "An advanced multi-agent AI system that performs automated end-to-end research on any topic using specialized AI agents.",
    image: "https://ik.imagekit.io/manishkr5487/My-Photo/ReasearchMindAI.png",
    longDescription:
      "ResearchMind AI is a multi-agent research automation system that takes a user query and generates a complete structured research report. It uses multiple AI agents working together: Search Agent for web data collection, Reader Agent for extracting relevant content, Writer Agent for structured report generation, and Critic Agent for improving output quality. Built with Streamlit and powered by LLMs like Mistral AI, LangChain, and Tavily API.",
    technologies: [
      { name: "Python", color: "blue" },
      { name: "Streamlit", color: "red" },
      { name: "LangChain", color: "purple" },
      { name: "Mistral AI", color: "orange" },
      { name: "Tavily API", color: "green" },
    ],
    features: [
      "Multi-agent workflow system",
      "Automated research report generation",
      "Real-time web information extraction",
      "AI-driven report refinement (Critic Agent)",
    ],
    github: "https://github.com/manishkr6/Multi-Agent-AI",
    live: "https://multi-agent-sys.streamlit.app/",
    category: "Gen AI",
  },
  {
    id: 4,
    title: "DocMind RAG (Document Intelligence System)",
    description:
      "A Retrieval-Augmented Generation (RAG) based AI system that allows users to chat with documents and extract precise answers instantly.",
    image: "https://ik.imagekit.io/manishkr5487/My-Photo/docmind.png",
    longDescription:
      "DocMind RAG is an AI-powered document intelligence system that enables users to upload documents and interact with them using natural language. It uses Retrieval-Augmented Generation (RAG) to fetch relevant chunks from documents and generate accurate, context-aware responses. The system is designed for research papers, PDFs, notes, and knowledge base querying.",
    technologies: [
      { name: "Python", color: "blue" },
      { name: "LangChain", color: "purple" },
      { name: "Vector DB", color: "green" },
      { name: "LLMs (Mistral)", color: "orange" },
      { name: "Streamlit", color: "red" },
    ],
    features: [
      "Document Q&A using RAG architecture",
      "Semantic search over uploaded files",
      "Context-aware AI responses",
      "Fast retrieval using vector embeddings",
    ],
    github: "https://github.com/manishkr6/RAG",
    live: "https://docmind-rag-ai.streamlit.app/",
    category: "Gen AI",
  },
  {
    id: 5,
    title: "MinuteCraftAI",
    description:
      "An AI Video & Audio Intelligence System that turns long media into searchable summaries, insights, and chat-enabled knowledge.",
    image: "https://ik.imagekit.io/manishkr5487/My-Photo/MinuteCraftAI.jpg",
    longDescription:
      "MinuteCraftAI is a complete AI pipeline for video and audio intelligence. It processes long meetings, lectures, podcasts, and YouTube videos through Whisper AI for multilingual transcription, Mistral AI for summarization, an Extractor Engine for action items and open questions, and a RAG chat system powered by ChromaDB for contextual Q&A. The system turns raw media into searchable, exportable intelligence.",
    technologies: [
      { name: "Python", color: "blue" },
      { name: "Streamlit", color: "red" },
      { name: "Whisper AI", color: "cyan" },
      { name: "Mistral AI", color: "orange" },
      { name: "LangChain", color: "purple" },
      { name: "ChromaDB", color: "emerald" },
      { name: "FFmpeg", color: "gray" },
    ],
    features: [
      "YouTube and local file media support",
      "Multilingual transcription with Whisper AI",
      "AI-powered summarization and insight extraction",
      "Extractor engine for action items, decisions, open questions",
      "RAG chat system for contextual media Q&A",
      "Semantic retrieval using ChromaDB embeddings",
      "Exportable AI-generated reports",
    ],
    github: "https://github.com/manishkr6/Minute-Craft-AI",
    live: "https://minute-craft-ai.streamlit.app/",
    category: "Gen AI",
  },
];

export const aiProjectsData = aimlProjectsData;

export const aimlCategory = {
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
};

export default aimlProjectsData;
