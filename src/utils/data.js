// ============================================
// PORTFOLIO DATA — Single source of truth
// ============================================

export const PERSONAL = {
  name: 'Jeeban Kumar Rout',
  title: 'Full Stack Developer',
  tagline: 'Building production-grade systems that scale.',
  summary:
    'Full Stack Developer with 3+ years building end-to-end applications serving 700,000+ users. Specialises in Node.js, React, TypeScript, PostgreSQL, and AWS Serverless architecture.',
  email: 'jeebanrout9090@gmail.com',
  phone: '+91-8249829625',
  linkedin: 'https://linkedin.com/in/jeeban-rout-769769229',
  location: 'Hyderabad, India',
  available: true,
};

export const SKILLS = [
  {
    category: 'Languages',
    color: 'amber',
    items: ['JavaScript (ES6+)', 'TypeScript', 'Java'],
  },
  {
    category: 'Frontend',
    color: 'sky',
    items: ['React.js', 'Redux', 'Zustand', 'React Router', 'Axios', 'Tailwind CSS', 'Material UI'],
  },
  {
    category: 'Backend',
    color: 'green',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'RBAC', 'Middleware'],
  },
  {
    category: 'Databases',
    color: 'violet',
    items: ['PostgreSQL', 'DynamoDB', 'SQL', 'Query Optimization', 'Indexing', 'AWS RDS'],
  },
  {
    category: 'Cloud & DevOps',
    color: 'amber',
    items: ['AWS Lambda', 'API Gateway', 'EC2', 'RDS', 'S3', 'CloudFront', 'Route53', 'CloudWatch', 'EventBridge', 'Docker', 'Jenkins', 'CI/CD'],
  },
  {
    category: 'Auth & Security',
    color: 'sky',
    items: ['JWT Token Auth', 'RBAC', 'HSTS', 'S3 CloudFront OAC', 'Secure API Design'],
  },
  {
    category: 'Architecture',
    color: 'green',
    items: ['Microservices', 'Serverless', 'System Design', 'Async Processing', 'Performance Tuning'],
  },
];

export const EXPERIENCE = [
  {
    role: 'Full Stack Developer',
    company: 'Kalgudi Digital Pvt. Ltd.',
    location: 'Hyderabad',
    period: 'Sep 2023 – Present',
    current: true,
    stack: ['Node.js', 'TypeScript', 'React.js', 'Redux', 'PostgreSQL (RDS)', 'AWS Lambda', 'API Gateway', 'EventBridge', 'Jenkins'],
    highlights: [
      'Built and maintained full stack features across React frontend and Node.js backend for production platforms serving 700,000+ users.',
      'Developed responsive React UI components with Redux state management and Axios-based REST API integration.',
      'Achieved 30% API response time improvement through PostgreSQL query optimization and targeted indexing strategies.',
      'Designed and implemented JWT Token Authentication and RBAC — securing API endpoints with authorization middleware for multiple user roles.',
      'Developed serverless backend modules using AWS Lambda + API Gateway, ensuring auto-scaling under high-load conditions.',
      'Automated recurring workflows using AWS EventBridge and Lambda, reducing manual intervention.',
      'Strengthened cloud security by implementing HSTS headers and S3–CloudFront Origin Access Control (OAC).',
      'Maintained Jenkins-based CI/CD pipelines, improving deployment frequency and release reliability.',
      'Monitored production systems via AWS CloudWatch — proactively identifying and resolving performance bottlenecks.',
    ],
  },
];

export const PROJECTS = [
  {
    name: "Samunnati Platform",
    scale: "700,000+ Users",
    scaleColor: "green",
    description:
      "Large-scale agri-fintech platform connecting farmers and FPOs (Farmer Producer Organisations) with full stack modules built end-to-end.",
    highlights: [
      "React frontend with Redux & Tailwind CSS backed by Node.js APIs and PostgreSQL.",
      "Farmer–FPO Association & Disassociation workflows managing high-volume relational data.",
      "Optimised heavy dashboard analytics queries on PostgreSQL — significant load time improvements.",
      "Group Communication module enabling information sharing between farmers and FPO contributors.",
      "Digital Assistance module with JWT-secured operations for authorized contributor actions.",
      "Backend automation using AWS Lambda and EventBridge for platform-scale operational efficiency.",
    ],
    tags: [
      "React",
      "Node.js",
      "PostgreSQL",
      "AWS Lambda",
      "EventBridge",
      "Redux",
    ],
    // github: "https://github.com/yourusername/samunnati-platform", // 🔁 Replace with your GitHub URL
    // demo: "https://samunnati.example.com", // 🔁 Replace with your live demo URL
  },
  {
    name: "Savannah Platform",
    scale: "100,000+ Registered Farmers",
    scaleColor: "sky",
    description:
      "Farmer support platform with real-time chat, CRM integration and structured query lifecycle management.",
    highlights: [
      "React-based chat UI with real-time updates integrated with Node.js backend routing farmer queries.",
      "Backend workflow for structured query assignment, tracking, and resolution lifecycle.",
      "Salesforce CRM API integration for bidirectional data synchronisation across systems.",
      "'Request for Call Back' feature with React + Material UI form and backend scheduling logic.",
    ],
    tags: ["React", "Node.js", "Salesforce CRM", "Material UI", "REST APIs"],
    // github: "https://github.com/yourusername/savannah-platform", // 🔁 Replace with your GitHub URL
    // demo: "https://savannah.example.com", // 🔁 Replace with your live demo URL
  },
  {
    name: "RiceTec US Platform",
    scale: "~100,000 Users",
    scaleColor: "amber",
    description:
      "US-based agricultural platform with enhanced backend APIs powering real-time dashboard and reporting systems.",
    highlights: [
      "Enhanced backend APIs for real-time dashboard and reporting with improved reliability.",
      "Structured error handling and performance tuning for production stability.",
      "Proactive backend optimisation contributing to platform uptime.",
    ],
    tags: [
      "Node.js",
      "REST APIs",
      "Performance Tuning",
      "Backend Optimization",
    ],
  //   github: "https://github.com/yourusername/ricetec-platform", // 🔁 Replace with your GitHub URL
  //   demo: "https://ricetec.example.com", // 🔁 Replace with your live demo URL
  },
  {
    name: "Ecommerce Platform",
    scale: "Dummy Users",
    scaleColor: "green",
    description:
      "A full-stack eCommerce application built to simulate real-world online shopping workflows, featuring both user and admin panels for managing products, orders, and customers.",
    highlights: [
      "Developed separate Admin and User interfaces for product browsing, cart management, and order processing.",
      "Admin dashboard to manage products, categories, users, and track orders efficiently.",
      "Implemented authentication and authorization using JWT for secure user and admin access.",
      "Built RESTful APIs using Node.js with PostgreSQL for handling scalable data operations.",
      "State management using Redux for seamless user experience across the application.",
      "Responsive UI built with React and Tailwind CSS for modern and clean design.",
    ],
    tags: ["React", "Node.js", "PostgreSQL"],
    // github: 'https://github.com/yourusername/samunnati-platform',   // 🔁 Replace with your GitHub URL
    demo: "https://ecommerce-platform-swart.vercel.app/", // 🔁 Replace with your live demo URL
  },
  {
    name: "Hotel Management",
    scale: "Dummy Users",
    scaleColor: "green",
    description:
      "A hotel management system designed to handle room bookings, customer management, and administrative operations with separate user and admin functionalities.",
    highlights: [
      "User module for browsing rooms, checking availability, and booking rooms online.",
      "Admin panel to manage room inventory, pricing, bookings, and customer details.",
      "Implemented booking workflow with status tracking (booked, checked-in, checked-out).",
      "Secure authentication system using JWT for both users and administrators.",
      "Backend APIs developed using Node.js with PostgreSQL for efficient data handling.",
      "Clean and responsive frontend built with React, Redux, and Tailwind CSS.",
    ],
    tags: ["React", "Node.js", "PostgreSQL", "AWS DynamoDB"],
    // github: 'https://github.com/yourusername/samunnati-platform',   // 🔁 Replace with your GitHub URL
    // demo: 'https://samunnati.example.com',                          // 🔁 Replace with your live demo URL
  },
];

export const ACHIEVEMENTS = [
  { metric: '700K+', label: 'Concurrent Users', detail: 'Backend owner for systems at this scale' },
  { metric: '30%', label: 'API Performance Gain', detail: 'Via PostgreSQL query optimization' },
  { metric: '3+', label: 'Years Experience', detail: 'Building production-grade apps' },
  { metric: '3', label: 'Major Platforms', detail: 'Delivered end-to-end' },
];

export const EDUCATION = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Gangadhar Meher University, Odisha',
    period: '2020 – 2022',
    note: 'Graduated in the top 5% of the batch',
  },
];

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
