export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  category: 'Fullstack' | 'Backend API' | 'Security & RBAC';
  description: string;
  fullDetails: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  keyFeatures: string[];
  mockEndpoint?: {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    path: string;
    samplePayload?: string;
    sampleResponse: string;
  };
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: {
    name: string;
    level: number; // percentage
    highlight?: boolean;
    tag: string;
    description: string;
  }[];
}

export interface ExperienceModule {
  title: string;
  badge: string;
  description: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  current?: boolean;
  employmentType?: string;
  summary: string;
  bulletPoints: string[];
  technologies: string[];
  highlights: { label: string; value: string }[];
  modules?: ExperienceModule[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Sourov Sarkar",
    role: "Backend Developer",
    secondaryTitle: "Scalable Systems & API Architect",
    avatar: "/avatar.png",
    resumePdf: "https://drive.google.com/file/d/1hP9cqbKWffJrOxoe5Q26rMhLunPF5IFo/view",
    location: "Dhaka, Bangladesh",
    email: "sourovsarker005@gmail.com",
    phone: "+8801728326959",
    github: "https://github.com/SOUROVSARKERTEC12",
    linkedin: "https://linkedin.com/in/sourovsarkerbd",
    stackoverflow: "https://stackoverflow.com/users/9541123/sourov-sarkar",
    status: "Backend Developer @ Dhaka Post • Open to Scalable Architectures",
    bio: "Passionate Backend Developer focused on designing systems that deliver performance, scalability, and ironclad reliability. Skilled in Node.js, Express.js, and NestJS, I transform complex architectural logic into efficient, maintainable backend solutions.",
    extendedBio: "Currently serving as a Backend Developer at Dhaka Post in Dhaka, architecting high-throughput microservices, Redis caching layers, and PostgreSQL relational pipelines. Expanding expertise in NestJS, TypeScript, TypeORM, and distributed architectures to deliver resilient systems that handle high traffic effortlessly."
  },

  stats: [
    { label: "Core Technologies", value: "15+" },
    { label: "Backend Production Modules", value: "15+" },
    { label: "Authentication Systems Built", value: "Multi-MFA" },
    { label: "Database Engines Mastered", value: "(SQL/NoSQL)" },
  ],

  experiences: [
    {
      role: "Backend Developer",
      company: "Dhaka Post",
      period: "12/2025 - Present",
      location: "Dhaka, Bangladesh",
      current: true,
      employmentType: "Full-Time",
      summary: "Architecting high-concurrency backend services, NestJS microservices, and Redis caching layers for one of Bangladesh's largest digital news platforms.",
      technologies: ["Node.js", "NestJS", "TypeScript", "PostgreSQL", "Redis", "Microservices", "REST API", "Docker", "TypeORM"],
      bulletPoints: [
        "Architected modular NestJS microservices with TypeScript for high-throughput news syndication.",
        "Engineered distributed Redis caching and PostgreSQL connection pooling, cutting query latency by 45%.",
        "Developed high-speed REST APIs and webhooks powering editorial CMS and automated content distribution.",
        "Implemented JWT authentication, IP-based rate limiting, and granular RBAC security controls.",
        "Containerized microservices with Docker, ensuring reproducible environments and streamlined CI/CD."
      ],
      highlights: [
        { label: "Architecture", value: "NestJS Microservices" },
        { label: "Performance", value: "Sub-50ms Latency" },
        { label: "Scale", value: "High Concurrency" }
      ]
    },
    {
      role: "Backend Developer",
      company: "Fly Far Tech",
      period: "12/2024 - 10/2025",
      location: "Dhaka, Bangladesh",
      current: false,
      employmentType: "Full-Time",
      summary: "Engineered core backend services, multi-provider authentication, and third-party API integrations for a high-traffic travel platform.",
      technologies: ["Node.js", "Express.js", "NestJS", "REST API", "OAuth2.0", "MFA", "Flight Radar APIs", "MySQL", "MongoDB"],
      bulletPoints: [
        "Engineered multi-provider authentication (Google, Apple, Facebook) and TOTP MFA (Google & Microsoft Authenticator).",
        "Built admin modules for tour package management and automated visa application workflows.",
        "Integrated third-party Flight Radar APIs for live flight tracking and schedule analytics.",
        "Refactored database queries and implemented caching, reducing API response times by 35%."
      ],
      highlights: [
        { label: "Security", value: "MFA & OAuth2" },
        { label: "Modules", value: "Tour & Visa Engine" },
        { label: "Integration", value: "Flight Radar APIs" }
      ]
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: "netflix-clone",
      title: "Netflix Clone",
      subtitle: "Full-Stack Media Streaming Platform",
      period: "03/2023 - 07/2023",
      category: "Fullstack",
      description: "An immersive entertainment streaming application inspired by Netflix, engineered with a responsive UI, smooth streaming interactions, and robust backend catalog services.",
      fullDetails: "Built with modern web technologies, the project features a sleek, responsive UI and smooth interactions that recreate the feel of a real streaming platform. Employs Express.js REST APIs with MongoDB for dynamic video catalog indexing, user state tracking, and content filtering.",
      techStack: ["React", "Node.js", "Express.js", "MongoDB", "REST API", "JWT"],
      githubUrl: "https://github.com/SOUROVSARKERTEC12/Netflix",
      keyFeatures: [
        "Catalog aggregation & dynamic movie categorization",
        "Responsive movie trailer preview player",
        "User watchlist persistence & state management",
        "Secure REST endpoints for catalog curation"
      ],
      mockEndpoint: {
        method: "GET",
        path: "/api/v1/movies/trending",
        sampleResponse: `{\n  "status": "success",\n  "count": 24,\n  "data": [\n    {\n      "id": "mov_981",\n      "title": "Interstellar Nexus",\n      "rating": 9.2,\n      "genres": ["Sci-Fi", "Drama"],\n      "streamUrl": "https://stream.sourov.dev/vod/981.m3u8"\n    }\n  ]\n}`
      }
    },
    {
      id: "note-management",
      title: "Note Management REST API",
      subtitle: "Enterprise-grade NestJS REST Endpoint with Prisma",
      period: "11/2025 - 11/2025",
      category: "Backend API",
      description: "A robust, production-ready REST API for managing categorized notes with JWT-based authentication, custom DTO validation, and Prisma ORM integration.",
      fullDetails: "Architected using NestJS modular structure, TypeScript strict typing, SQLite via Prisma ORM for relational queries, and Passport JWT strategy for stateless session authorization. Includes rate-limiting, error filtering, and pagination.",
      techStack: ["NestJS", "Node.js", "TypeScript", "Express.js", "SQLite", "Prisma ORM", "JWT"],
      githubUrl: "https://github.com/SOUROVSARKERTEC12/light-notes-endpoint",
      keyFeatures: [
        "Strict DTO validation using class-validator & class-transformer",
        "Stateless JWT Authentication Guard with Passport.js",
        "Prisma ORM schema migrations and relational indexing",
        "Comprehensive Swagger/OpenAPI documentation endpoints"
      ],
      mockEndpoint: {
        method: "POST",
        path: "/api/v1/notes",
        samplePayload: `{\n  "title": "Database Indexing Strategy",\n  "content": "Use composite B-tree indexes for tenant_id and created_at.",\n  "tags": ["database", "postgres"]\n}`,
        sampleResponse: `{\n  "statusCode": 201,\n  "id": "clx7291a001",\n  "title": "Database Indexing Strategy",\n  "createdAt": "2025-11-20T14:30:00.000Z",\n  "userId": "usr_99812"\n}`
      }
    },
    {
      id: "file-auth-management",
      title: "File Auth Management System",
      subtitle: "Role-Based Access Control (RBAC) & Secure File Engine",
      period: "11/2025 - 11/2025",
      category: "Security & RBAC",
      description: "A production-grade NestJS service engineered for secure file uploads, role-based access control (RBAC), and protected multi-tenant file streaming.",
      fullDetails: "Implements fine-grained RBAC permissions with custom NestJS decorators, guards, and MySQL persistence. Features file validation filters (MIME type verification, file size quotas), cryptographic checksums, and token-based download URLs.",
      techStack: ["NestJS", "Express.js", "MySQL", "TypeScript", "RBAC", "JWT", "Multer"],
      githubUrl: "https://github.com/SOUROVSARKERTEC12/file-auth-management",
      keyFeatures: [
        "Dynamic Role-Based Access Control (Admin, Editor, Viewer)",
        "Secure stream pipeline preventing memory overflows during large uploads",
        "MySQL transactional schema for file metadata and access audit logs",
        "Tokenized presigned download links with TTL expiration"
      ],
      mockEndpoint: {
        method: "GET",
        path: "/api/v1/files/f_49201/stream",
        sampleResponse: `// HTTP/1.1 200 OK\n// Content-Type: application/pdf\n// Content-Disposition: inline; filename="system_audit.pdf"\n// X-User-Role: Admin\n// X-Checksum-SHA256: e3b0c44298fc1c149afbf4c8996fb924`
      }
    }
  ] as Project[],

  skillCategories: [
    {
      name: "Core Backend & Frameworks",
      description: "Server-side logic, controllers, lifecycle management, and architectural frameworks",
      skills: [
        { name: "Node.js", level: 95, highlight: true, tag: "Runtime", description: "Event loop, asynchronous I/O, streams, and cluster workers" },
        { name: "NestJS", level: 92, highlight: true, tag: "Framework", description: "Modular architecture, dependency injection, decorators, and guards" },
        { name: "Express.js", level: 90, highlight: true, tag: "Framework", description: "Middleware chaining, routing pipelines, and microservice endpoints" },
        { name: "GraphQL", level: 80, highlight: false, tag: "Query API", description: "Schemas, resolvers, queries, mutations, and DataLoader" },
        { name: "REST API", level: 98, highlight: true, tag: "Architecture", description: "Resource design, idempotent verbs, status codes, and HATEOAS" },
        { name: "SOAP API", level: 82, highlight: false, tag: "Protocol", description: "XML payloads, WSDL parsing, and enterprise integrations" },
      ]
    },
    {
      name: "Databases & ORMs",
      description: "Data modeling, indexing, query optimization, and schema migrations",
      skills: [
        { name: "PostgreSQL", level: 88, highlight: true, tag: "RDBMS", description: "Relational modeling, indexing, joins, transactions, and JSONB" },
        { name: "MySQL", level: 90, highlight: true, tag: "RDBMS", description: "ACID transactions, foreign key constraints, and performance tuning" },
        { name: "MongoDB", level: 88, highlight: true, tag: "NoSQL", description: "Document schemas, aggregation pipelines, and indexing" },
        { name: "SQLite", level: 92, highlight: false, tag: "Embedded", description: "Lightweight storage, zero-config deployments, and testing" },
        { name: "Prisma ORM", level: 88, highlight: true, tag: "ORM", description: "Type-safe database client, schema definitions, and migrations" },
        { name: "TypeORM", level: 85, highlight: true, tag: "ORM", description: "Entity relations, repositories, migrations, and query builders" },
      ]
    },
    {
      name: "Languages & Tools",
      description: "Programming languages, version control, and development toolchain",
      skills: [
        { name: "TypeScript", level: 92, highlight: true, tag: "Language", description: "Generics, interfaces, utility types, and strict compilation" },
        { name: "JavaScript (ES6+)", level: 96, highlight: true, tag: "Language", description: "Modern ECMAScript, closures, prototypes, and async/await" },
        { name: "React", level: 82, highlight: false, tag: "Frontend", description: "Hooks, component lifecycles, state management, and modern UI" },
        { name: "Git & Version Control", level: 92, highlight: false, tag: "DevOps Tool", description: "Branching strategies, interactive rebase, and code review" },
        { name: "Postman", level: 94, highlight: false, tag: "Testing", description: "Automated test suites, environments, and mock servers" },
      ]
    },
    {
      name: "Security, Auth & Architecture",
      description: "Identity management, zero-trust patterns, and system resilience",
      skills: [
        { name: "JWT & Stateless Auth", level: 95, highlight: true, tag: "Security", description: "Token signing, refresh token rotation, and claims validation" },
        { name: "Multi-Factor Auth (MFA)", level: 90, highlight: true, tag: "Security", description: "TOTP, Google/Microsoft Authenticator, and SMS OTP fallbacks" },
        { name: "OAuth 2.0 Identity", level: 92, highlight: true, tag: "Identity", description: "Google, Apple, and Facebook third-party social logins" },
        { name: "Role-Based Access (RBAC)", level: 94, highlight: true, tag: "Authorization", description: "Role hierarchies, granular permissions, and route guards" },
        { name: "Clean Architecture", level: 90, highlight: true, tag: "Architecture", description: "Separation of concerns, domain-driven design, and DTO boundaries" },
        { name: "API Documentation", level: 92, highlight: false, tag: "Documentation", description: "Swagger / OpenAPI 3.0 specs and Postman collections" },
      ]
    },
  ] as SkillCategory[],

  education: {
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "TMSS Engineering College, Bogura",
    period: "01/2018 - 08/2023",
    description: "Rigorous academic curriculum covering Software Engineering, Algorithms & Data Structures, Distributed Computing, Database Management Systems, and Computer Networks.",
    coreFocus: [
      "Object-Oriented Analysis and Design (OOAD)",
      "Relational Database Systems & Query Optimization",
      "Operating Systems & Process Synchronization",
      "Network Protocols (TCP/IP, HTTP, DNS, Sockets)"
    ]
  },

  interests: [
    {
      title: "Cricket",
      icon: "cricket",
      tagline: "Strategy, Patience & Team Synergy",
      description: "An avid cricket enthusiast who values tactical gameplay, reading the match momentum, and executing under pressure—qualities directly translated into debugging production systems."
    },
    {
      title: "Motorcycle Touring",
      icon: "bike",
      tagline: "Precision, Focus & The Open Road",
      description: "Passionate about motorcycle touring across Bangladesh. Long-distance riding instills mechanical discipline, constant situational awareness, and problem-solving on the fly."
    },
    {
      title: "Travelling & Culture",
      icon: "travel",
      tagline: "Exploration, Curiosity & New Perspectives",
      description: "Exploring diverse regions, cultural heritage, and natural landscapes. Traveling refreshes creative thinking and broadens problem-solving approaches."
    }
  ]
};
