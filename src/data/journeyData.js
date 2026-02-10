export const journeyData = [
  {
    id: 1,
    type: "education",
    title: "Master of Computer Applications (MCA)",
    organization: "Specialization in AI and Data Science",
    duration: "2025 - 2027",
    description: "Pursuing advanced studies in Artificial Intelligence and Data Science, focusing on machine learning algorithms, deep learning, and big data analytics.",
    status: "Ongoing",
    icon: "education"
  },
  {
    id: 2,
    type: "education",
    title: "Bachelor of Computer Applications (BCA)",
    organization: "University",
    duration: "2022 - 2025",
    description: "Completed undergraduate degree with a strong foundation in computer science fundamentals, programming, and software development.",
    status: "completed",
    icon: "education"
  },
  {
    id: 3,
    type: "internship",
    title: "Government of Sikkim Internship",
    organization: "IT Department, Government of Sikkim",
    duration: "February 24, 2025 - June 13, 2025",
    description: "Developed a comprehensive workflow-based IT asset request system under the Government of Sikkim, IT Department.",
    status: "completed",
    icon: "work",
    details: [
      "Workflow-based IT asset request system with role-specific actions",
      "Request flow: User → Operator → Verifier → Approver → Super Admin",
      "Secure login with role-based dashboards for reviewing and approving requests"
    ],
    technologies: [
      { name: "React.js", color: "cyan" },
      { name: "Node.js", color: "green" },
      { name: "Express.js", color: "gray" },
      { name: "MongoDB", color: "emerald" },
      { name: "Tailwind CSS", color: "blue" }
    ]
  },
  {
    id: 4,
    type: "internship",
    title: "InfoSec Solutions Developer",
    organization: "SH1ELD Tech InfoSec Solutions",
    duration: "January 2025 - March 2025",
    description: "Worked on developing security solutions and implementing best practices for information security in web applications.",
    status: "Ongoing",
    icon: "work",
    details: [
      "Developed security-focused web applications",
      "Implemented authentication and authorization systems",
      "Worked with security protocols and best practices"
    ],
    technologies: [
      { name: "React", color: "cyan" },
      { name: "Security", color: "red" },
      { name: "Web Development", color: "purple" }
    ]
  }
];
