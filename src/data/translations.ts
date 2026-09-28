import { useSyncExternalStore } from 'react';
import { PORTFOLIO_DATA } from './portfolioData';

export type Language = 'en' | 'bn';

export interface LanguageOption {
  id: Language;
  label: string;
  nativeName: string;
  flag: string;
  short: string;
}

export const LANGUAGES: LanguageOption[] = [
  { id: 'en', label: 'English', nativeName: 'English', flag: '🇺🇸', short: 'EN' },
  { id: 'bn', label: 'Bangla', nativeName: 'বাংলা', flag: '🇧🇩', short: 'বাং' },
];

export const PORTFOLIO_DATA_BN = {
  personal: {
    name: "সৌরভ সরকার",
    role: "ব্যাকএন্ড ডেভেলপার",
    secondaryTitle: "স্কেলেবল সিস্টেমস ও এপিআই আর্কিটেক্ট",
    avatar: "/avatar.png",
    resumePdf: "/sourov-sarkar-resume.pdf",
    location: "ঢাকা, বাংলাদেশ",
    email: "sourovsarker005@gmail.com",
    phone: "+8801728326959",
    github: "https://github.com/SOUROVSARKERTEC12",
    linkedin: "https://linkedin.com/in/sourovsarkerbd",
    stackoverflow: "https://stackoverflow.com/users/9541123/sourov-sarkar",
    status: "ঢাকা পোস্টে ব্যাকএন্ড ডেভেলপার • স্কেলেবল আর্কিটেকচারে আগ্রহী",
    bio: "উচ্চ পারফরম্যান্স, স্কেলেবিলিটি এবং নিশ্ছিদ্র নির্ভরযোগ্যতা প্রদানকারী সিস্টেম ডিজাইনে নিবেদিতপ্রাণ ব্যাকএন্ড ডেভেলপার। Node.js, Express.js এবং NestJS-এ দক্ষ, আমি জটিল স্থাপত্য লজিককে কার্যকর এবং রক্ষণাবেক্ষণযোগ্য ব্যাকএন্ড সল্যুশনে রূপান্তরিত করি।",
    extendedBio: "বর্তমানে ঢাকায় অবস্থিত 'ঢাকা পোস্ট'-এ ব্যাকএন্ড ডেভেলপার হিসেবে দায়িত্ব পালন করছি; যেখানে হাই-থ্রুপুট মাইক্রোসার্ভিস, রেডিস ক্যাশিং লেয়ার এবং পোস্টগ্রেস্কুয়েল রিলেশনাল পাইপলাইন পরিচালনা করি। অতিরিক্ত ট্রাফিকের চাপ অনায়াসে সামলাতে নেস্টজেএস, টাইপস্ক্রিপ্ট ও ডিস্ট্রিবিউটেড আর্কিটেকচারে ক্রমাগত দক্ষতা বৃদ্ধি করছি।"
  },

  stats: [
    { label: "কোর টেকনোলজিস", value: "১৫+" },
    { label: "প্রোডাকশন মডিউল", value: "১৫+" },
    { label: "অথেনটিকেশন সিস্টেম", value: "মাল্টি-MFA" },
    { label: "ডাটাবেস ইঞ্জিন", value: "(SQL/NoSQL)" },
  ],

  experiences: [
    {
      role: "ব্যাকএন্ড ডেভেলপার",
      company: "ঢাকা পোস্ট",
      period: "১২/২০২৫ - বর্তমান",
      location: "ঢাকা, বাংলাদেশ",
      current: true,
      employmentType: "ফুল-টাইম",
      summary: "বাংলাদেশের অন্যতম শীর্ষ ডিজিটাল নিউজ প্ল্যাটফর্মের জন্য হাই-কনকারেন্সি ব্যাকএন্ড সার্ভিস, NestJS মাইক্রোসার্ভিস এবং Redis ক্যাশিং লেয়ার আর্কিটেকচার।",
      technologies: ["Node.js", "NestJS", "TypeScript", "PostgreSQL", "Redis", "Microservices", "REST API", "Docker", "TypeORM"],
      bulletPoints: [
        "উচ্চ-থ্রুপুট সংবাদ পরিবেশনের জন্য টাইপস্ক্রিপ্ট দিয়ে মডুলার NestJS মাইক্রোসার্ভিস আর্কিটেকচার তৈরি।",
        "ডিস্ট্রিবিউটেড Redis ক্যাশিং ও PostgreSQL কানেকশন পুলিং ইঞ্জিনিয়ারিং, যা কুয়েরি লেটেন্সি ৪৫% কমিয়েছে।",
        "এডিটোরিয়াল সিএমএস ও অটোমেটেড কনটেন্ট ডিস্ট্রিবিউশনের জন্য হাই-স্পিড REST API এবং ওয়েবহুক তৈরি।",
        "JWT অথেনটিকেশন, আইপি-ভিত্তিক রেট লিমিটিং এবং গ্র্যানুলার RBAC সিকিউরিটি কন্ট্রোল প্রয়োগ।",
        "ডকারের সাহায্যে মাইক্রোসার্ভিস কন্টেইনারাইজেশন ও নির্ভরযোগ্য ডিপ্লয়মেন্ট পাইপলাইন নিশ্চিতকরণ।"
      ],
      highlights: [
        { label: "আর্কিটেকচার", value: "NestJS মাইক্রোসার্ভিস" },
        { label: "পারফরম্যান্স", value: "৫০ms-এর নিচে লেটেন্সি" },
        { label: "স্কেল", value: "উচ্চ কনকারেন্সি" }
      ]
    },
    {
      role: "ব্যাকএন্ড ডেভেলপার",
      company: "Fly Far Tech",
      period: "১২/২০২৪ - ১০/২০২৫",
      location: "ঢাকা, বাংলাদেশ",
      current: false,
      employmentType: "ফুল-টাইম",
      summary: "উচ্চ-ট্রাফিক ট্রাভেল প্ল্যাটফর্মের জন্য কোর ব্যাকএন্ড সার্ভিস, মাল্টি-প্রোভাইডার অথেনটিকেশন এবং থার্ড-পার্টি এপিআই ইন্টিগ্রেশন ইঞ্জিনিয়ারিং।",
      technologies: ["Node.js", "Express.js", "NestJS", "REST API", "OAuth2.0", "MFA", "Flight Radar APIs", "MySQL", "MongoDB"],
      bulletPoints: [
        "মাল্টি-প্রোভাইডার অথেনটিকেশন (গুগল, অ্যাপল, ফেসবুক) এবং TOTP MFA (গুগল ও মাইক্রোসফট অথেন্টিকেটর) তৈরি।",
        "ট্যুর প্যাকেজ ম্যানেজমেন্ট ও অটোমেটেড ভিসা অ্যাপ্লিকেশন প্রসেসিংয়ের অ্যাডমিন মডিউল নির্মাণ।",
        "লাইভ ফ্লাইট ট্র্যাকিং ও শিডিউল অ্যানালিটিক্সের জন্য ফ্লাইট রাডার এপিআই ইন্টিগ্রেশন।",
        "ডাটাবেস কুয়েরি রিফ্যাক্টরিং ও ক্যাশিংয়ের মাধ্যমে এপিআই রেসপন্স টাইম ৩৫% হ্রাস।"
      ],
      highlights: [
        { label: "সিকিউরিটি", value: "MFA ও OAuth2" },
        { label: "মডিউল", value: "ট্যুর ও ভিসা ইঞ্জিন" },
        { label: "ইন্টিগ্রেশন", value: "ফ্লাইট রাডার এপিআই" }
      ]
    }
  ],

  projects: [
    {
      id: "netflix-clone",
      title: "নেটফ্লিক্স ক্লোন",
      subtitle: "ফুল-স্ট্যাক মিডিয়া স্ট্রিমিং প্ল্যাটফর্ম",
      period: "০৩/২০২৩ - ০৭/২০২৩",
      category: "Fullstack" as const,
      description: "নেটফ্লিক্স থেকে অনুপ্রাণিত একটি আধুনিক স্ট্রিমিং অ্যাপ্লিকেশন, যা রেসপনসিভ ইউআই, স্মুথ স্ট্রিমিং এবং নির্ভরযোগ্য ব্যাকএন্ড ক্যাটালগ সার্ভিসের সমন্বয়ে তৈরি।",
      fullDetails: "আধুনিক ওয়েব প্রযুক্তির সাহায্যে নির্মিত। এক্সপ্রেস জেএস ও মঙ্গোডিবি ব্যাকএন্ড ব্যবহার করে ডাইনামিক ভিডিও ক্যাটালগ ইন্ডেক্সিং, ওয়াচলিস্ট ট্র্যাকিং এবং সিকিউর রেস্ট এপিআই নিশ্চিত করা হয়েছে।",
      techStack: ["React", "Node.js", "Express.js", "MongoDB", "REST API", "JWT"],
      githubUrl: "https://github.com/SOUROVSARKERTEC12/Netflix",
      keyFeatures: [
        "মুভি ক্যাটালগ সংগ্রহ ও ডাইনামিক ক্যাটাগরি ফিল্টারিং",
        "রেসপনসিভ মুভি ট্রেইলার প্রিভিউ প্লেয়ার",
        "ইউজার ওয়াচলিস্ট সংরক্ষণ ও স্টেট ম্যানেজমেন্ট",
        "ক্যাটালগ ব্যবস্থাপনার জন্য সুরক্ষিত REST এন্ডপয়েন্ট"
      ],
      mockEndpoint: {
        method: "GET" as const,
        path: "/api/v1/movies/trending",
        sampleResponse: `{\n  "status": "success",\n  "count": 24,\n  "data": [\n    {\n      "id": "mov_981",\n      "title": "Interstellar Nexus",\n      "rating": 9.2,\n      "genres": ["Sci-Fi", "Drama"],\n      "streamUrl": "https://stream.sourov.dev/vod/981.m3u8"\n    }\n  ]\n}`
      }
    },
    {
      id: "note-management",
      title: "নোট ম্যানেজমেন্ট REST API",
      subtitle: "Prisma ও NestJS সমন্বিত এন্টারপ্রাইজ এন্ডপয়েন্ট",
      period: "১১/২০২৫ - ১১/২০২৫",
      category: "Backend API" as const,
      description: "JWT ভিত্তিক অথেনটিকেশন, কাস্টম DTO ভ্যালিডেশন এবং Prisma ORM সমন্বিত ক্যাটাগরাইজড নোট পরিচালনার একটি নির্ভরযোগ্য প্রোডাকশন-রেডি REST API।",
      fullDetails: "নেস্টজেএস মডুলার আর্কিটেকচার, টাইপস্ক্রিপ্ট টাইপ সেফটি এবং প্রিজমা ওআরএমের সাহায্যে প্রস্তুত। এতে রেট লিমিটিং, এরর হ্যান্ডলিং ও পেজিনেশন অন্তর্ভুক্ত।",
      techStack: ["NestJS", "Node.js", "TypeScript", "Express.js", "SQLite", "Prisma ORM", "JWT"],
      githubUrl: "https://github.com/SOUROVSARKERTEC12/light-notes-endpoint",
      keyFeatures: [
        "class-validator ও class-transformer দিয়ে কঠোর DTO ভ্যালিডেশন",
        "Passport.js দিয়ে স্টেটলেস JWT অথেনটিকেশন গার্ড",
        "Prisma ORM স্কিমা মাইগ্রেশন ও রিলেশনাল ইনডেক্সিং",
        "পূর্ণাঙ্গ Swagger / OpenAPI ডকুমেন্টেশন এন্ডপয়েন্ট"
      ],
      mockEndpoint: {
        method: "POST" as const,
        path: "/api/v1/notes",
        samplePayload: `{\n  "title": "Database Indexing Strategy",\n  "content": "Use composite B-tree indexes for tenant_id and created_at.",\n  "tags": ["database", "postgres"]\n}`,
        sampleResponse: `{\n  "statusCode": 201,\n  "id": "clx7291a001",\n  "title": "Database Indexing Strategy",\n  "createdAt": "2025-11-20T14:30:00.000Z",\n  "userId": "usr_99812"\n}`
      }
    },
    {
      id: "file-auth-management",
      title: "ফাইল অথ ম্যানেজমেন্ট সিস্টেম",
      subtitle: "রোল-বেসড অ্যাক্সেস কন্ট্রোল (RBAC) ও সিকিউর ফাইল ইঞ্জিন",
      period: "১১/২০২৫ - ১১/২০২৫",
      category: "Security & RBAC" as const,
      description: "নিরাপদ ফাইল আপলোড, রোল-বেসড অ্যাক্সেস কন্ট্রোল (RBAC) এবং সুরক্ষিত মাল্টি-টেন্যান্ট ফাইল স্ট্রিমিংয়ের জন্য তৈরি একটি প্রোডাকশন-গ্রেড NestJS সার্ভিস।",
      fullDetails: "কাস্টম ডেকোরেটর ও গার্ডের মাধ্যমে সূক্ষ্ম আরবিএসি পারমিশন নিশ্চিত করা হয়েছে। এতে মেমরি অপ্টিমাইজড ফাইল স্ট্রিমিং ও প্রেসাইন্ড লিংক সুবিধা রয়েছে।",
      techStack: ["NestJS", "Express.js", "MySQL", "TypeScript", "RBAC", "JWT", "Multer"],
      githubUrl: "https://github.com/SOUROVSARKERTEC12/file-auth-management",
      keyFeatures: [
        "ডাইনামিক রোল-বেসড অ্যাক্সেস কন্ট্রোল (Admin, Editor, Viewer)",
        "বড় ফাইল আপলোডের সময় মেমরি ওভারফ্লো প্রতিরোধী সিকিউর স্ট্রিম পাইপলাইন",
        "ফাইল মেটাডেটা ও অ্যাক্সেস অডিট লগিংয়ের জন্য MySQL ট্রানজ্যাকশনাল স্কিমা",
        "TTL মেয়াদোত্তীর্ণ হওয়ার সুবিধাসহ টোকেনাইজড প্রিসাইন্ড ডাউনলোড লিংক"
      ],
      mockEndpoint: {
        method: "GET" as const,
        path: "/api/v1/files/f_49201/stream",
        sampleResponse: `// HTTP/1.1 200 OK\n// Content-Type: application/pdf\n// Content-Disposition: inline; filename="system_audit.pdf"\n// X-User-Role: Admin\n// X-Checksum-SHA256: e3b0c44298fc1c149afbf4c8996fb924`
      }
    }
  ],

  skillCategories: [
    {
      name: "কোর ব্যাকএন্ড ও ফ্রেমওয়ার্কস",
      description: "সার্ভার-সাইড লজিক, কন্ট্রোলার, লাইফসাইকেল ম্যানেজমেন্ট এবং সিস্টেম আর্কিটেকচার",
      skills: [
        { name: "Node.js", level: 95, highlight: true, tag: "রানটাইম", description: "ইভেন্ট লুপ, অ্যাসিনক্রোনাস আই/ও, স্ট্রিম এবং ক্লাস্টার ওয়ার্কার্স" },
        { name: "NestJS", level: 92, highlight: true, tag: "ফ্রেমওয়ার্ক", description: "মডুলার আর্কিটেকচার, ডিপেন্ডেন্সি ইনজেকশন, ডেকোরেটর ও গার্ডস" },
        { name: "Express.js", level: 90, highlight: true, tag: "ফ্রেমওয়ার্ক", description: "মিডলওয়্যার চেইনিং, রাউটিং পাইপলাইন ও মাইক্রোসার্ভিস এন্ডপয়েন্ট" },
        { name: "GraphQL", level: 80, highlight: false, tag: "কুয়েরি এপিআই", description: "স্কিমাস, রিজলভার্স, কুয়েরিস, মিউটেশনস এবং ডেটালোডার" },
        { name: "REST API", level: 98, highlight: true, tag: "আর্কিটেকচার", description: "রিসোর্স ডিজাইন, আইডেমপোটেন্ট ভার্বস, স্ট্যাটাস কোড ও HATEOAS" },
        { name: "SOAP API", level: 82, highlight: false, tag: "প্রোটোকল", description: "এক্সএমএল পেলোড, WSDL পার্সিং এবং এন্টারপ্রাইজ ইন্টিগ্রেশন" },
      ]
    },
    {
      name: "ডাটাবেস ও ওআরএম",
      description: "ডাটা মডেলিং, ইনডেক্সিং, কুয়েরি অপ্টিমাইজেশন এবং স্কিমা মাইগ্রেশন",
      skills: [
        { name: "PostgreSQL", level: 88, highlight: true, tag: "RDBMS", description: "রিলেশনাল মডেলিং, ইনডেক্সিং, জয়েনস, ট্রানজ্যাকশনস এবং JSONB" },
        { name: "MySQL", level: 90, highlight: true, tag: "RDBMS", description: "ACID ট্রানজ্যাকশনস, ফরেন কি কনস্ট্রেইন্টস ও পারফরম্যান্স টিউনিং" },
        { name: "MongoDB", level: 88, highlight: true, tag: "NoSQL", description: "ডকুমেন্ট স্কিমাস, অ্যাগ্রিগেশন পাইপলাইন এবং ইনডেক্সিং" },
        { name: "SQLite", level: 92, highlight: false, tag: "এমবেডেড", description: "লাইটওয়েট স্টোরেজ, জিরো-কনফিগ ডিপ্লয়মেন্ট এবং টেস্টিং" },
        { name: "Prisma ORM", level: 88, highlight: true, tag: "ORM", description: "টাইপ-সেফ ডাটাবেস ক্লায়েন্ট, স্কিমা ডেফিনিশন ও মাইগ্রেশনস" },
        { name: "TypeORM", level: 85, highlight: true, tag: "ORM", description: "এনটিটি রিলেশনস, রিপোজিটরি প্যাটার্ন, মাইগ্রেশন ও কুয়েরি বিল্ডার" },
      ]
    },
    {
      name: "প্রোগ্রামিং ল্যাঙ্গুয়েজ ও টুলস",
      description: "প্রোগ্রামিং ভাষা, ভার্সন কন্ট্রোল এবং আধুনিক ডেভেলপমেন্ট টুলচেইন",
      skills: [
        { name: "TypeScript", level: 92, highlight: true, tag: "ল্যাঙ্গুয়েজ", description: "জেনেরিকস, ইন্টারফেসেস, ইউটিলিটি টাইপস এবং স্ট্রিক্ট কম্পাইলেশন" },
        { name: "JavaScript (ES6+)", level: 96, highlight: true, tag: "ল্যাঙ্গুয়েজ", description: "আধুনিক ইসিএমএস্ক্রিপ্ট, ক্লোজার্স, প্রোটোটাইপস ও অ্যাসিন্ক/অ্যাওয়েট" },
        { name: "React", level: 82, highlight: false, tag: "ফ্রন্টএন্ড", description: "হুকস, কম্পোনেন্ট লাইফসাইকেল, স্টেট ম্যানেজমেন্ট এবং রেসপনসিভ ইউআই" },
        { name: "Git & Version Control", level: 92, highlight: false, tag: "ডেভঅপ্স টুল", description: "ব্রাঞ্চিং স্ট্র্যাটেজি, ইন্টারেক্টিভ রিবেস এবং কোড রিভিউ" },
        { name: "Postman", level: 94, highlight: false, tag: "টেস্টিং", description: "অটোমেটেড টেস্ট স্যুট, এনভায়রনমেন্টস এবং মক সার্ভারস" },
      ]
    },
    {
      name: "সিকিউরিটি, অথেনটিকেশন ও আর্কিটেকচার",
      description: "আইডেন্টিটি ম্যানেজমেন্ট, জিরো-ট্রাস্ট প্যাটার্নস এবং সিস্টেম রেজিলিয়েন্স",
      skills: [
        { name: "JWT & Stateless Auth", level: 95, highlight: true, tag: "সিকিউরিটি", description: "টোকেন সাইনিং, রিফ্রেশ টোকেন রোটেশন এবং ক্লেইমস ভ্যালিডেশন" },
        { name: "Multi-Factor Auth (MFA)", level: 90, highlight: true, tag: "সিকিউরিটি", description: "TOTP, গুগল/মাইক্রোসফট অথেন্টিকেটর ও এসএমএস ওটিপি" },
        { name: "OAuth 2.0 Identity", level: 92, highlight: true, tag: "আইডেন্টিটি", description: "গুগল, অ্যাপল এবং ফেসবুক সোশ্যাল লগইন ইন্টিগ্রেশন" },
        { name: "Role-Based Access (RBAC)", level: 94, highlight: true, tag: "অথরাইজেশন", description: "রোল হায়ারার্কি, গ্র্যানুলার পারমিশনস এবং রুট গার্ডস" },
        { name: "Clean Architecture", level: 90, highlight: true, tag: "আর্কিটেকচার", description: "সেপারেশন অব কনসার্নস, ডোমেন-ড্রিভেন ডিজাইন ও ডিটিও বাউন্ডারি" },
        { name: "API Documentation", level: 92, highlight: false, tag: "ডকুমেন্টেশন", description: "Swagger / OpenAPI ৩.০ স্পেসিফিকেশন ও পোস্টম্যান কালেকশনস" },
      ]
    },
  ],

  education: {
    degree: "কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিংয়ে বি.এসসি",
    institution: "টিএমএসএস ইঞ্জিনিয়ারিং কলেজ, বগুড়া",
    period: "০১/২০১৮ - ০৮/২০২৩",
    description: "সফটওয়্যার ইঞ্জিনিয়ারিং, অ্যালগরিদম ও ডাটা স্ট্রাকচার, ডিস্ট্রিবিউটেড কম্পিউটিং, ডাটাবেস ম্যানেজমেন্ট এবং নেটওয়ার্কিং সম্পর্কিত গভীর একাডেমিক শিক্ষা।",
    coreFocus: [
      "অবজেক্ট-ওরিয়েন্টেড অ্যানালাইসিস অ্যান্ড ডিজাইন (OOAD)",
      "রিলেশনাল ডাটাবেস সিস্টেম ও কুয়েরি অপ্টিমাইজেশন",
      "অপারেটিং সিস্টেম ও প্রসেস সিনক্রোনাইজেশন",
      "নেটওয়ার্ক প্রোটোকলস (TCP/IP, HTTP, DNS, Sockets)"
    ]
  },

  interests: [
    {
      title: "ক্রিকেট",
      icon: "cricket",
      tagline: "কৌশল, ধৈর্য ও টিম সিনার্জি",
      description: "ক্রিকেটের কৌশলগত লড়াই ও চাপের মুখে সঠিক সিদ্ধান্ত নেওয়ার দক্ষতা সরাসরি প্রোডাকশন সিস্টেমের জটিল বাগ ডিবাগিংয়ে কাজে লাগাই।"
    },
    {
      title: "মোটরসাইকেল ট্যুরিং",
      icon: "bike",
      tagline: "নির্ভুলতা, একাগ্রতা ও মুক্ত পথ",
      description: "বাংলাদেশজুড়ে মোটরসাইকেল ট্যুরিংয়ের প্রতি গভীর আগ্রহ। দীর্ঘ দূরত্বের রাইডিং পরিস্থিতি অনুযায়ী দ্রুত সমস্যা সমাধানের মানসিকতা তৈরি করে।"
    },
    {
      title: "ভ্রমণ ও সংস্কৃতি",
      icon: "travel",
      tagline: "অন্বেষণ, কৌতূহল ও নতুন দৃষ্টিভঙ্গি",
      description: "বিভিন্ন অঞ্চল, সাংস্কৃতিক ঐতিহ্য ও প্রাকৃতিক রূপ অন্বেষণ। ভ্রমণ মনকে সতেজ করে এবং চিন্তার পরিধিকে আরও প্রসারিত করে।"
    }
  ]
};

export const TRANSLATIONS = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      education: 'Education',
      interests: 'Interests',
      contact: 'Contact',
      resume: 'Resume',
      subtitle: 'Backend Engineer',
      availableStatus: 'Available for backend opportunities',
    },
    clock: {
      title: 'Live System Clock',
      toggleTooltip: 'Click to toggle 12h/24h',
    },
    praxis: {
      tag: 'Greek Philosophy',
      greek: 'Πρᾶξις',
      word: 'Praxis',
      pronunciation: '/ˈpræk.sɪs/ • noun',
      quote: '“The practice of translating abstract philosophical theory, logic, and first principles into living, tangible action.”',
      engineeringTitle: 'In Backend Engineering',
      engineeringDesc: 'Transforming distributed systems theory into resilient, high-throughput production infrastructure.',
    },
    hero: {
      greeting: "Hi there, I'm",
      headlinePrefix: 'Engineering Scalable, High-Performance',
      headlineHighlight: 'Backend Systems',
      projectsBtn: 'View Projects',
      contactBtn: 'Contact Me',
      resumeBtn: 'Resume PDF',
      findMeOn: 'Find me on:',
    },
    about: {
      subtitle: 'Engineering Philosophy',
      title: 'Architecting Resilient Backends with',
      titleHighlight: 'Clean Code',
      desc: 'Turning complex business requirements into high-throughput, maintainable, and secure server-side services.',
      cardTitle: 'About Sourov Sarkar',
      cardSubtitle: 'Backend Developer & Scalable API Architect',
      coreValues: [
        'Strict Type Safety with TypeScript',
        'Idempotent & RESTful API Design',
        'Zero-Trust MFA & RBAC Protection',
        'Optimized SQL Queries & Indexing',
      ],
      pillars: [
        {
          title: 'Performance & Scalability',
          description: 'Designing non-blocking event-driven backends with Node.js and NestJS. Optimizing database connection pools, indexing hot query paths, and minimizing latency.',
        },
        {
          title: 'MFA & Zero-Trust Security',
          description: 'Building production-grade multi-factor authentication (Google & Microsoft Authenticator, TOTP), OAuth2 federated logins (Apple, Google, Facebook), and role-based access control (RBAC).',
        },
        {
          title: 'Clean Modular Architecture',
          description: 'Enforcing strict separation of concerns with NestJS modules, dependency injection, custom decorators, validation pipes, and domain-driven design principles.',
        },
        {
          title: 'Relational & Document Databases',
          description: 'Proficient in PostgreSQL, MySQL, MongoDB, and SQLite. Leveraging Prisma ORM and TypeORM for type-safe schema migrations, relationships, and transactional integrity.',
        },
      ]
    },
    experience: {
      subtitle: 'Professional Journey',
      title: 'Work Experience &',
      titleHighlight: 'Impact',
      desc: 'Production engineering across high-traffic digital media and travel platforms, building scalable microservices and secure backend systems.',
      filterAll: 'All',
    },
    skills: {
      subtitle: 'Technical Arsenal',
      title: 'Skills & System',
      titleHighlight: 'Architecture',
      desc: 'Deep specialization across modern backend frameworks, relational & NoSQL databases, distributed caching, and zero-trust security.',
      filterAll: 'All',
    },
    projects: {
      subtitle: 'Featured Engineering',
      title: 'Personal & Production',
      titleHighlight: 'Projects',
      desc: 'Architected backend REST APIs, authentication engines, and media platforms built with NestJS, Node.js, and TypeScript.',
      viewCode: 'Source Code',
      liveDemo: 'Live Demo',
      testApi: 'Test Mock API',
      keyCapabilities: 'Key Capabilities:',
      githubRepo: 'GitHub Repo',
    },
    education: {
      subtitle: 'Academic Foundations',
      title: 'Education &',
      titleHighlight: 'Credentials',
      desc: 'Strong foundational computer science background providing the theoretical and algorithmic grounding for building scalable distributed software.',
      coreSubjects: 'Core Academic Focus:',
    },
    interests: {
      subtitle: 'Beyond The Code',
      title: 'Interests &',
      titleHighlight: 'Life Outside Terminal',
      desc: 'Activities that keep focus sharp, promote tactical discipline, and inspire fresh creative energy.',
    },
    contact: {
      subtitle: "Let's Connect",
      title: 'Get In',
      titleHighlight: 'Touch',
      desc: 'Looking for a skilled Backend Developer who crafts maintainable, high-performance systems? Feel free to reach out directly.',
      nameLabel: 'Your Name',
      namePlaceholder: 'e.g. John Doe',
      emailLabel: 'Your Email Address',
      emailPlaceholder: 'e.g. john@example.com',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'e.g. Backend Opportunity or Project Inquiry',
      messageLabel: 'Your Message',
      messagePlaceholder: 'Tell me about your system requirements, team goals, or project timeline...',
      submitBtn: 'Send Message',
      submittingBtn: 'Sending...',
      successTitle: 'Inquiry Prepared!',
      successDesc: 'Your email client has been opened with your inquiry. You can also contact Sourov directly at',
      sendAnother: 'Send Another Message',
      directContact: 'Direct Contact',
      phone: 'Phone & WhatsApp',
      location: 'Location',
      socials: 'Social & Developer Profiles',
      infoTitle: 'Contact Information',
      infoDesc: 'Reach out directly or connect on professional networks',
      directEmail: 'Direct Email',
      sendEmailAction: 'Send Email',
      chatWhatsapp: 'Chat on WhatsApp',
      formTitle: 'Send a Message',
      formDesc: 'Expect a prompt response within 24 hours',
    },
    footer: {
      rights: 'All rights reserved.',
      craftTag: 'Theory in Architecture • Execution in Production',
    },
    resumeModal: {
      title: 'Sourov Sarkar - Resume',
      subtitle: 'Backend Developer • PDF',
      download: 'Download PDF',
      close: 'Close',
      loading: 'Loading Resume PDF...',
      previewHint: 'Live preview of resume document. Click Download PDF for offline storage.',
      openNewTab: 'Open in New Tab',
    }
  },
  bn: {
    nav: {
      about: 'পরিচিতি',
      experience: 'অভিজ্ঞতা',
      skills: 'দক্ষতা',
      projects: 'প্রজেক্টসমূহ',
      education: 'শিক্ষা',
      interests: 'আগ্রহ',
      contact: 'যোগাযোগ',
      resume: 'জীবনবৃত্তান্ত',
      subtitle: 'ব্যাকএন্ড ইঞ্জিনিয়ার',
      availableStatus: 'নতুন সুযোগের জন্য প্রস্তুত',
    },
    clock: {
      title: 'লাইভ সিস্টেম সময়',
      toggleTooltip: '১২ঘন্টা/২৪ঘন্টা ফরম্যাট পরিবর্তন করতে ক্লিক করুন',
    },
    praxis: {
      tag: 'গ্রীক দর্শন',
      greek: 'Πρᾶξις',
      word: 'Praxis',
      pronunciation: '/ˈpræk.sɪs/ • বিশেষ্য',
      quote: '“তাত্ত্বিক দর্শন, বিশুদ্ধ যুক্তি ও মূলনীতিকে বাস্তব, কার্যকর পদক্ষেপে রূপান্তর করার ধারাবাহিক প্রক্রিয়া।”',
      engineeringTitle: 'ব্যাকএন্ড ইঞ্জিনিয়ারিংয়ে',
      engineeringDesc: 'কম্পিউটার সায়েন্সের জটিল সিস্টেম তত্ত্বকে স্থিতিস্থাপক ও উচ্চ-ক্ষমতাসম্পন্ন প্রোডাকশন অবকাঠামোতে রূপান্তর।',
    },
    hero: {
      greeting: 'হ্যালো, আমি',
      headlinePrefix: 'স্কেলেবল ও উচ্চ-ক্ষমতাসম্পন্ন',
      headlineHighlight: 'ব্যাকএন্ড সিস্টেম আর্কিটেকচার',
      projectsBtn: 'প্রজেক্ট দেখুন',
      contactBtn: 'যোগাযোগ করুন',
      resumeBtn: 'জীবনবৃত্তান্ত (PDF)',
      findMeOn: 'আমাকে খুঁজুন:',
    },
    about: {
      subtitle: 'ইঞ্জিনিয়ারিং দর্শন',
      title: 'ক্লিন কোডের মাধ্যমে স্থিতিস্থাপক ব্যাকএন্ড',
      titleHighlight: 'আর্কিটেকচার',
      desc: 'জটিল ব্যবসায়িক চাহিদাকে উচ্চ-ক্ষমতাসম্পন্ন, রক্ষণাবেক্ষণযোগ্য ও সুরক্ষিত সার্ভার-সাইড সার্ভিসে রূপান্তর।',
      cardTitle: 'সৌরভ সরকার সম্পর্কে',
      cardSubtitle: 'ব্যাকএন্ড ডেভেলপার ও স্কেলেবল এপিআই আর্কিটেক্ট',
      coreValues: [
        'TypeScript দিয়ে কঠোর টাইপ সেফটি',
        'Idempotent ও RESTful এপিআই ডিজাইন',
        'জিরো-ট্রাস্ট MFA ও RBAC সুরক্ষা',
        'অপ্টিমাইজড এসকিউএল কুয়েরি ও ইনডেক্সিং',
      ],
      pillars: [
        {
          title: 'পারফরম্যান্স ও স্কেলেবিলিটি',
          description: 'Node.js এবং NestJS দিয়ে নন-ব্লকিং ইভেন্ট-চালিত ব্যাকএন্ড ডিজাইন। ডাটাবেস কানেকশন পুল অপ্টিমাইজেশন ও কুয়েরি লেটেন্সি হ্রাস।',
        },
        {
          title: 'MFA ও জিরো-ট্রাস্ট সিকিউরিটি',
          description: 'প্রোডাকশন-গ্রেড মাল্টি-ফ্যাক্টর অথেনটিকেশন (Google & Microsoft Authenticator, TOTP), OAuth2 সোশ্যাল লগইন ও RBAC পারমিশন।',
        },
        {
          title: 'ক্লিন মডুলার আর্কিটেকচার',
          description: 'NestJS মডিউল, ডিপেন্ডেন্সি ইনজেকশন, কাস্টম ডেকোরেটর ও ডোমেন-ড্রিভেন ডিজাইনের মাধ্যমে কোডের নিখুঁত সেপারেশন অব কনসার্নস।',
        },
        {
          title: 'রিলেশনাল ও ডকুমেন্ট ডাটাবেস',
          description: 'PostgreSQL, MySQL, MongoDB ও SQLite-এ দক্ষ। Prisma ORM এবং TypeORM দিয়ে টাইপ-সেফ স্কিমা মাইগ্রেশন ও ট্রানজ্যাকশন নিশ্চিতকরণ।',
        },
      ]
    },
    experience: {
      subtitle: 'পেশাগত অভিজ্ঞতা',
      title: 'কাজের অভিজ্ঞতা ও',
      titleHighlight: 'অবদান',
      desc: 'উচ্চ-ট্রাফিক ডিজিটাল নিউজ মিডিয়া এবং ট্রাভেল প্ল্যাটফর্মের জন্য স্কেলেবল মাইক্রোসার্ভিস ও ব্যাকএন্ড সিস্টেম ইঞ্জিনিয়ারিং।',
      filterAll: 'সকল',
    },
    skills: {
      subtitle: 'প্রযুক্তিগত দক্ষতা',
      title: 'দক্ষতা ও সিস্টেম',
      titleHighlight: 'আর্কিটেকচার',
      desc: 'আধুনিক ব্যাকএন্ড ফ্রেমওয়ার্ক, রিলেশনাল ডাটাবেস, ক্লাউড ক্যাশিং এবং সুরক্ষিত প্রমাণীকরণ সিস্টেমে বিশেষ পারদর্শিতা।',
      filterAll: 'সকল',
    },
    projects: {
      subtitle: 'নির্বাচিত প্রজেক্টস',
      title: 'ব্যক্তিগত ও প্রোডাকশন',
      titleHighlight: 'প্রজেক্টসমূহ',
      desc: 'NestJS, Node.js এবং TypeScript দিয়ে তৈরি নির্ভরযোগ্য ব্যাকএন্ড REST API, অথেনটিকেশন ইঞ্জিন এবং মিডিয়া প্ল্যাটফর্ম।',
      viewCode: 'সোর্স কোড',
      liveDemo: 'লাইভ ডেমো',
      testApi: 'মক এপিআই টেস্ট',
      keyCapabilities: 'মূল বৈশিষ্ট্যসমূহ:',
      githubRepo: 'গিটহাব কোড',
    },
    education: {
      subtitle: 'প্রাতিষ্ঠানিক ভিত্তি',
      title: 'শিক্ষা ও',
      titleHighlight: 'ডিগ্রি',
      desc: 'কম্পিউটার সায়েন্সের মজবুত ভিত্তি যা স্কেলেবল ডিস্ট্রিবিউটেড সফটওয়্যার নির্মাণের তাত্ত্বিক ও ব্যবহারিক জ্ঞান প্রদান করে।',
      coreSubjects: 'প্রধান একাডেমিক বিষয়সমূহ:',
    },
    interests: {
      subtitle: 'কোডের বাইরে',
      title: 'আগ্রহ ও টার্মিনালের',
      titleHighlight: 'বাইরের জীবন',
      desc: 'যেসব কাজ ফোকাস তীক্ষ্ণ রাখে, শৃঙ্খলা শেখায় এবং নতুন সৃষ্টিশীল শক্তির সঞ্চার করে।',
    },
    contact: {
      subtitle: 'যোগাযোগ',
      title: 'সরাসরি যোগাযোগ',
      titleHighlight: 'করুন',
      desc: 'স্কেলেবল ও নির্ভরযোগ্য ব্যাকএন্ড সিস্টেম ডিজাইনের জন্য দক্ষ ইঞ্জিনিয়ার খুঁজছেন? সরাসরি যোগাযোগ করতে পারেন।',
      nameLabel: 'আপনার নাম',
      namePlaceholder: 'যেমন: আব্দুল্লাহ আল মামুন',
      emailLabel: 'আপনার ইমেল ঠিকানা',
      emailPlaceholder: 'যেমন: example@gmail.com',
      subjectLabel: 'বিষয়',
      subjectPlaceholder: 'যেমন: ব্যাকএন্ড প্রজেক্ট বা নিয়োগ সংক্রান্ত',
      messageLabel: 'আপনার বার্তা',
      messagePlaceholder: 'আপনার কাজের বিবরণ বা প্রশ্ন এখানে লিখুন...',
      submitBtn: 'বার্তা পাঠান',
      submittingBtn: 'পাঠানো হচ্ছে...',
      successTitle: 'ধন্যবাদ! আপনার বার্তা সফলভাবে প্রস্তুত হয়েছে।',
      successDesc: 'আপনার ইমেইল ক্লায়েন্ট স্বয়ংক্রিয়ভাবে ওপেন হয়েছে। এছাড়াও সরাসরি ইমেল বা ফোনে যোগাযোগ করতে পারেন:',
      sendAnother: 'আরেকটি বার্তা পাঠান',
      directContact: 'সরাসরি যোগাযোগ',
      phone: 'ফোন ও হোয়াটসঅ্যাপ',
      location: 'ঠিকানা',
      socials: 'সামাজিক ও ডেভেলপার প্রোফাইলস',
      infoTitle: 'যোগাযোগের তথ্য',
      infoDesc: 'সরাসরি যোগাযোগ করুন অথবা প্রফেশনাল নেটওয়ার্কে যুক্ত হোন',
      directEmail: 'সরাসরি ইমেল',
      sendEmailAction: 'ইমেল পাঠান',
      chatWhatsapp: 'হোয়াটসঅ্যাপে লিখুন',
      formTitle: 'বার্তা পাঠান',
      formDesc: '২৪ ঘণ্টার মধ্যে দ্রুত উত্তর দেওয়ার চেষ্টা করব',
    },
    footer: {
      rights: 'সর্বস্বত্ব সংরক্ষিত।',
      craftTag: 'স্থাপত্যে দর্শন • উৎপাদনে সঠিক বাস্তবায়ন',
    },
    resumeModal: {
      title: 'সৌরভ সরকার - জীবনবৃত্তান্ত',
      subtitle: 'ব্যাকএন্ড ডেভেলপার • PDF',
      download: 'ডাউনলোড PDF',
      close: 'বন্ধ করুন',
      loading: 'রেজুমি লোড হচ্ছে...',
      previewHint: 'রেজুমি ডকুমেন্টের প্রিভিউ। অফলাইনে সংরক্ষণের জন্য ডাউনলোড বাটনে ক্লিক করুন।',
      openNewTab: 'নতুন ট্যাবে খুলুন',
    }
  },
};

export function subscribeLanguage(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener('sourov_language_change', callback);
  window.addEventListener('storage', callback);
  const observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.type === 'attributes' && (m.attributeName === 'data-lang' || m.attributeName === 'lang')) {
        callback();
      }
    }
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-lang', 'lang'] });
  return () => {
    window.removeEventListener('sourov_language_change', callback);
    window.removeEventListener('storage', callback);
    observer.disconnect();
  };
}

export function getLanguageSnapshot(): Language {
  try {
    const lang = document.documentElement.getAttribute('data-lang') || localStorage.getItem('sourov_language');
    return (lang === 'en' ? 'en' : 'bn') as Language;
  } catch {
    return 'bn';
  }
}

export function getLanguageServerSnapshot(): Language {
  return 'bn';
}

export function useLanguage() {
  const language = useSyncExternalStore(subscribeLanguage, getLanguageSnapshot, getLanguageServerSnapshot);
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;
  const data = language === 'bn' ? PORTFOLIO_DATA_BN : PORTFOLIO_DATA;
  return { language, t, data };
}
