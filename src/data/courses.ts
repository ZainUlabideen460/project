export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  originalPrice: number;
  discount: number;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  rating: number;
  students: number;
  instructor: string;
  category: string;
  features: string[];
  outline: string[];
}

export const courses: Course[] = [
  {
    id: "flutter-development",
    title: "Flutter App Development",
    description: "Master mobile app development with Flutter and Dart. Build cross-platform apps for iOS and Android from scratch.",
    image: "src/assets/flutter-course.jpg",
    price: 1500,
    originalPrice: 3000,
    discount: 50,
    duration: "2 Months",
    level: "Intermediate",
    rating: 4.8,
    students: 245,
    instructor: "Muhammad Awais",
    category: "Mobile Development",
    features: [
      "Live Interactive Classes",
      "Hands-on Projects", 
      "Industry Mentorship",
      "Job Placement Support",
      "Certificate of Completion"
    ],
    outline: [
      "Introduction to Flutter & Dart",
      "Widgets and UI Development",
      "State Management (Provider, Bloc)",
      "API Integration & Networking",
      "Local Storage & Databases",
      "Firebase Integration",
      "App Store Deployment",
      "Final Project Development"
    ]
  },
  {
    id: "mern-stack",
    title: "MERN Stack Web Development",
    description: "Complete full-stack web development with MongoDB, Express.js, React, and Node.js. Build modern web applications.",
    image: "src/assets/mern-course.jpg",
    price: 1500,
    originalPrice: 3000,
    discount: 50,
    duration: "3 Months",
    level: "Intermediate",
    rating: 4.9,
    students: 189,
    instructor: "Muhammad Arslan",
    category: "Web Development",
    features: [
      "Full-Stack Development",
      "Real-world Projects",
      "Live Code Reviews",
      "GitHub Portfolio Building",
      "Industry Best Practices"
    ],
    outline: [
      "HTML5, CSS3 & JavaScript ES6+",
      "React.js Fundamentals & Hooks",
      "Node.js & Express.js Backend",
      "MongoDB Database Design",
      "RESTful API Development",
      "Authentication & Authorization",
      "Deployment & DevOps Basics",
      "Capstone Project"
    ]
  },
  {
    id: "frontend-development",
    title: "Frontend Development(React Js)",
    description: "Become a frontend expert with HTML5, CSS3, JavaScript, and modern frameworks React js. Create stunning user interfaces.",
    image: "src/assets/frontend-course.jpg",
    price: 1500,
    originalPrice: 3000,
    discount: 50,
    duration: "2 Months",
    level: "Beginner",
    rating: 4.7,
    students: 312,
    instructor: "Muhammad Zain",
    category: "Web Development",
    features: [
      "Responsive Design Techniques",
      "Modern CSS Framework",
      "JavaScript Mastery",
      "Portfolio Development",
      "Industry Tools & Workflows"
    ],
    outline: [
      "HTML5 Semantic Structure",
      "Advanced CSS3 & Animations",
      "JavaScript Fundamentals",
      "DOM Manipulation & Events",
      "CSS Frameworks (Bootstrap, Tailwind)",
      "Version Control with Git",
      "Build Tools & Workflow",
      "Portfolio Website Creation"
    ]
  },
  {
    id: "backend-development",
    title: "Backend Development with Node.js",
    description: "Master server-side development with Node.js, Express, databases, and API design. Build scalable backend systems.",
    image: "src/assets/backend-course.jpg",
    price: 1500,
    originalPrice: 3000,
    discount: 50,
    duration: "2 Months",
    level: "Intermediate",
    rating: 4.6,
    students: 156,
    instructor: "Saad Ahamd",
    category: "Backend Development",
    features: [
      "RESTful API Design",
      "Database Architecture",
      "Security Best Practices",
      "Cloud Deployment",
      "Performance Optimization"
    ],
    outline: [
      "Node.js Fundamentals",
      "Express.js Framework",
      "Database Design (SQL & NoSQL)",
      "API Development & Testing",
      "Authentication Systems",
      "File Upload & Processing",
      "Caching & Performance",
      "Production Deployment"
    ]
  },
  {
    id: "python-programming",
    title: "Python Programming & Data Science",
    description: "Learn Python from basics to advanced topics including data science, machine learning, and web development.",
    image: "src/assets/python-course.jpg",
    price: 1500,
    originalPrice: 3000,
    discount: 50,
    duration: "2 Months",
    level: "Beginner",
    rating: 4.8,
    students: 278,
    instructor: "Muhammad Zain",
    category: "Programming",
    features: [
      "Hands-on Coding Practice",
      "Data Science Projects",
      "Machine Learning Basics",
      "Web Scraping Techniques",
      "Industry Applications"
    ],
    outline: [
      "Python Syntax & Fundamentals",
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "File Handling & Modules",
      "NumPy & Pandas for Data Science",
      "Data Visualization with Matplotlib",
      "Web Development with Django",
      "Introduction to Machine Learning"
    ]
  },
  {
    id: "basic-programming",
    title: "Programming Fundamentals",
    description: "Start your programming journey with core concepts, problem-solving techniques, and multiple programming languages.",
    image: "src/assets/programming-basics.jpg",
    price: 1500,
    originalPrice: 3000,
    discount: 50,
    duration: "2 Months",
    level: "Beginner",
    rating: 4.5,
    students: 425,
    instructor: "Muhammad Arslan",
    category: "Programming",
    features: [
      "Multi-language Exposure",
      "Problem-solving Skills",
      "Logical Thinking Development",
      "Practical Exercises",
      "Foundation Building"
    ],
    outline: [
      "Programming Logic & Flowcharts",
      "Variables & Data Types",
      "Control Structures & Loops",
      "Functions & Procedures",
      "Arrays & Basic Data Structures",
      "Introduction to C/C++",
      "Introduction to Java",
      "Project-based Learning"
    ]
  },
  {
    id: "ms-office",
    title: "Microsoft Office Suite Mastery",
    description: "Master MS Word, Excel, PowerPoint, and Outlook for professional productivity and business applications.",
    image: "src/assets/office-course.jpg",
    price: 1999,
    originalPrice: 2999,
    discount: 33,
    duration: "1.5 Months",
    level: "Beginner",
    rating: 4.4,
    students: 567,
    instructor: "Kavita Joshi",
    category: "Productivity",
    features: [
      "Professional Templates",
      "Advanced Formulas & Functions",
      "Business Presentations",
      "Email Management",
      "Real-world Scenarios"
    ],
    outline: [
      "MS Word - Advanced Formatting",
      "Document Templates & Styles",
      "MS Excel - Formulas & Functions",
      "Data Analysis & Charts",
      "PowerPoint - Professional Presentations",
      "Animation & Slide Design",
      "Outlook - Email & Calendar Management",
      "Integration Between Office Apps"
    ]
  }
];

export const categories = [
  "All Courses",
  "Web Development", 
  "Mobile Development",
  "Backend Development",
  "Programming",
  "Productivity"
];