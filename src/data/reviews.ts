export interface Review {
  id: string;
  name: string;
  course: string;
  rating: number;
  comment: string;
  image?: string;
  designation?: string;
}

export const reviews: Review[] = [
  {
    id: "1",
    name: "Ahmed Khan",
    course: "Flutter App Development",
    rating: 5,
    comment: "Amazing course! The instructor explained everything clearly and the hands-on projects really helped me understand Flutter development.",
    designation: "Software Developer"
  },
  {
    id: "2", 
    name: "Bilal Ahmed",
    course: "MERN Stack Web Development",
    rating: 5,
    comment: "This course completely transformed my career. I got a job as a full-stack developer just 2 months after completing the course!",
    designation: "Full Stack Developer"
  },
  {
    id: "3",
    name: "Ayesha Siddiqui",
    course: "Frontend Development Mastery",
    rating: 4,
    comment: "Great content and practical approach. The portfolio projects helped me showcase my skills to potential employers.",
    designation: "Frontend Developer"
  },
  {
    id: "4",
    name: "Usman Ali",
    course: "Python Programming & Data Science",
    rating: 5,
    comment: "Excellent course structure! From basics to advanced topics, everything was covered systematically. Highly recommended!",
    designation: "Data Analyst"
  },
  {
    id: "5",
    name: "Fatima Noor",
    course: "Backend Development with Node.js",
    rating: 5,
    comment: "The instructor's industry experience really shows. Real-world examples and best practices made this course invaluable.",
    designation: "Backend Developer"
  },
  {
    id: "6",
    name: "Hamza Farooq",
    course: "Programming Fundamentals",
    rating: 4,
    comment: "Perfect starting point for beginners. The logical progression from basics to advanced concepts is brilliant.",
    designation: "Junior Developer"
  },
  {
    id: "7",
    name: "Zainab Malik",
    course: "Microsoft Office Suite Mastery",
    rating: 5,
    comment: "This course boosted my productivity at work significantly. The advanced Excel techniques are game-changing!",
    designation: "Business Analyst"
  },
  {
    id: "8",
    name: "Ali Raza",
    course: "Flutter App Development",
    rating: 5,
    comment: "Built my first mobile app within the course duration. The support from instructors is exceptional!",
    designation: "Mobile App Developer"
  },
  {
    id: "9",
    name: "Maryam Qureshi",
    course: "MERN Stack Web Development",
    rating: 4,
    comment: "Comprehensive curriculum covering all aspects of modern web development. Projects were challenging and rewarding.",
    designation: "Web Developer"
  },
  {
    id: "10",
    name: "Samiullah Khan",
    course: "Python Programming & Data Science",
    rating: 5,
    comment: "From zero programming knowledge to building ML models - this course covered it all! Amazing learning journey.",
    designation: "Data Scientist"
  },
  {
    id: "11",
    name: "Hira Fatima",
    course: "Frontend Development Mastery",
    rating: 5,
    comment: "The modern frameworks and responsive design techniques taught here are exactly what industry demands.",
    designation: "UI Developer"
  },
  {
    id: "12",
    name: "Imran Aslam",
    course: "Backend Development with Node.js",
    rating: 4,
    comment: "Solid foundation in server-side development. The API development section was particularly helpful.",
    designation: "Server Developer"
  },
  {
    id: "13",
    name: "Sadia Anwar",
    course: "Programming Fundamentals",
    rating: 5,
    comment: "Best course for absolute beginners! The step-by-step approach made programming concepts easy to understand.",
    designation: "Trainee Software Engineer"
  },
  {
    id: "14",
    name: "Tahir Mahmood",
    course: "Flutter App Development",
    rating: 5,
    comment: "Professional-level training with industry-standard practices. Now confidently building production apps!",
    designation: "Lead Mobile Developer"
  },
  {
    id: "15",
    name: "Khadija Hassan",
    course: "Microsoft Office Suite Mastery",
    rating: 4,
    comment: "Transformed how I work with data and presentations. The templates and shortcuts save hours of work daily.",
    designation: "Project Manager"
  },
  {
    id: "16",
    name: "Noman Shah",
    course: "MERN Stack Web Development",
    rating: 5,
    comment: "Outstanding practical approach! Built 3 full-stack applications during the course. Ready for any web dev role now.",
    designation: "Full Stack Engineer"
  },
  {
    id: "17",
    name: "Sana Iqbal",
    course: "Python Programming & Data Science",
    rating: 5,
    comment: "Excellent for career changers! Switched from non-tech to data science role successfully after this course.",
    designation: "Data Science Trainee"
  },
  {
    id: "18",
    name: "Fahad Sheikh",
    course: "Frontend Development Mastery",
    rating: 4,
    comment: "Modern web development at its best! The animations and interactive features taught are impressive.",
    designation: "Creative Developer"
  },
  {
    id: "19",
    name: "Mahnoor Javed",
    course: "Backend Development with Node.js",
    rating: 5,
    comment: "Comprehensive backend training covering databases, APIs, and deployment. Instructor support is top-notch!",
    designation: "Backend Engineer"
  },
  {
    id: "20",
    name: "Rashid Hussain",
    course: "Programming Fundamentals",
    rating: 5,
    comment: "Foundation course that prepared me for advanced programming. The logical thinking development is excellent.",
    designation: "Software Trainee"
  },
  {
    id: "21",
    name: "Laiba Khan",
    course: "Flutter App Development",
    rating: 4,
    comment: "Great course for mobile development enthusiasts. The cross-platform approach saves development time significantly.",
    designation: "Mobile Developer"
  },
  {
    id: "22",
    name: "Waqas Ahmed",
    course: "MERN Stack Web Development",
    rating: 5,
    comment: "Industry-relevant curriculum with latest technologies. The job placement support helped me land my dream job!",
    designation: "MERN Stack Developer"
  },
  {
    id: "23",
    name: "Hassan Raza",
    course: "Cybersecurity Essentials",
    rating: 5,
    comment: "Learned penetration testing and ethical hacking from scratch. Now confident in securing applications.",
    designation: "Cybersecurity Analyst"
  },
  {
    id: "24",
    name: "Iqra Yousaf",
    course: "UI/UX Design Mastery",
    rating: 4,
    comment: "Practical Figma projects and design thinking approach improved my design portfolio a lot.",
    designation: "UI/UX Designer"
  },
  {
    id: "25",
    name: "Shahbaz Ali",
    course: "Cloud Computing with AWS",
    rating: 5,
    comment: "Great hands-on labs! Deployed real applications on AWS and learned DevOps basics as well.",
    designation: "Cloud Engineer"
  },
  {
    id: "26",
    name: "Aqsa Rehman",
    course: "Digital Marketing Mastery",
    rating: 4,
    comment: "SEO, Google Ads, and Social Media campaigns explained in detail. Helped me start freelancing.",
    designation: "Digital Marketer"
  },
  {
    id: "27",
    name: "Owais Khan",
    course: "Data Structures & Algorithms",
    rating: 5,
    comment: "Prepared me well for coding interviews. The problem-solving sessions were amazing.",
    designation: "Software Engineer"
  },
  {
    id: "28",
    name: "Mariam Bukhari",
    course: "Graphic Designing",
    rating: 4,
    comment: "Excellent Photoshop and Illustrator training. Now working as a freelance graphic designer.",
    designation: "Graphic Designer"
  },
  {
    id: "29",
    name: "Adnan Malik",
    course: "Artificial Intelligence & ML",
    rating: 5,
    comment: "Fantastic introduction to machine learning, deep learning, and AI concepts. Worth every penny!",
    designation: "AI Engineer"
  },
  {
    id: "30",
    name: "Saba Khalid",
    course: "WordPress Development",
    rating: 4,
    comment: "Very beginner-friendly and practical. Built multiple websites with Elementor and WooCommerce.",
    designation: "WordPress Developer"
  }
];
