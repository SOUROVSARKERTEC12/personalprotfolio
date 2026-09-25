<div align="center">

# ⚡ Sourov Sarkar | Developer Portfolio & System Architecture Showcase

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Turbopack](https://img.shields.io/badge/Turbopack-Enabled-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://turbo.build/pack)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](http://makeapullrequest.com)

<p align="center">
  <strong>High-performance, developer-first personal portfolio showcasing scalable microservices, resilient API architecture, and modern full-stack engineering.</strong>
</p>

<p align="center">
  <a href="https://github.com/SOUROVSARKERTEC12" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-100000?style=flat-square&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="https://linkedin.com/in/sourovsarkerbd" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="https://stackoverflow.com/users/9541123/sourov-sarkar" target="_blank">
    <img src="https://img.shields.io/badge/Stack_Overflow-FE7A16?style=flat-square&logo=stack-overflow&logoColor=white" alt="Stack Overflow" />
  </a>
  <a href="mailto:sourovsarker005@gmail.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=flat-square&logo=gmail&logoColor=white" alt="Email" />
  </a>
</p>

</div>

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack & Architecture](#-tech-stack--architecture)
- [Project Showcase](#-project-showcase)
- [Project Directory Structure](#-project-directory-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Development Server](#running-development-server)
  - [Production Build](#production-build)
  - [Code Quality & Linting](#code-quality--linting)
- [Configuration & Data Customization](#-configuration--data-customization)
- [Deployment](#-deployment)
- [Contact & Connect](#-contact--connect)
- [License](#-license)

---

## 🚀 Overview

This repository hosts the official personal portfolio and engineering portfolio of **Sourov Sarkar**, Backend Developer at **Dhaka Post** and specialist in **Scalable Systems & API Architecture**.

Built with cutting-edge web technologies including **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **custom WebGL fluid dynamics**, this site is engineered for ultra-fast load times, flawless responsiveness, fluid user interactions, and clean separation of concerns.

> **Current Role:** Backend Developer @ Dhaka Post • Architecting high-concurrency NestJS microservices, Redis caching layers, and PostgreSQL relational pipelines.

---

## ✨ Key Features

- **⚡ Next.js 16 App Router & React 19:** Optimized with Turbopack, static page pre-rendering, and modern React 19 client components.
- **🎨 Interactive WebGL Fluid Physics:** Integrated dynamic GPU-accelerated fluid simulation cursor (`SplashCursor`) with custom velocity and dissipation parameters.
- **🌓 Dynamic Multi-Theme Engine:** Seamlessly switch between **Cyberpunk (`cyber`)**, **Dark**, and **Light** modes with persistent `localStorage` preference caching.
- **💼 Real-World Engineering Timeline:** Detailed breakdown of enterprise backend work at **Dhaka Post** and **Fly Far Tech**, including architecture highlights, key metrics, and technology stacks.
- **🧪 Interactive API & Project Showcase:** Live project cards featuring mock REST API endpoints, request payloads, response schemas, and direct links to GitHub repositories.
- **📊 Granular Skills Matrix:** Categorized competencies across Core Backend, Relational & NoSQL Databases, System Security & RBAC, and DevOps Tooling with proficiency metrics.
- **📄 Interactive Resume Modal & Download:** Built-in PDF resume viewer modal with one-click direct download.
- **📱 Fully Responsive & Accessible:** Crafted with semantic HTML5 elements, fluid CSS variables, keyboard accessibility, and optimized typography powered by Vercel's **Geist** font.

---

## 🛠 Tech Stack & Architecture

### Core Framework & Runtime
| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **Next.js** | `^16.3` | App Router, static generation, Turbopack bundling |
| **React** | `^19.2` | Core UI library & modern component lifecycle |
| **TypeScript** | `^5.0` | Strict type safety, interfaces, and compile-time validation |
| **Node.js** | `>= 20.x` | JavaScript runtime environment |

### UI, Icons & Styling
| Technology | Purpose |
| :--- | :--- |
| **Vanilla CSS & Tokens** | High-performance CSS custom properties without CSS-in-JS runtime overhead |
| **Geist Sans & Mono** | Variable fonts optimized for high legibility and developer aesthetics |
| **Lucide React** | Clean, lightweight, consistent SVG iconography (`^1.48.0`) |
| **WebGL Shaders** | Custom fluid cursor dynamics with zero external canvas library dependencies |

---

## 📂 Project Showcase

A selection of featured projects highlighted in this portfolio:

1. **Netflix Clone (Full-Stack Media Streaming Platform)**
   - *Tech:* React, Node.js, Express.js, MongoDB, JWT, REST API
   - *Highlights:* Dynamic video catalog indexing, responsive video preview player, user watchlist persistence, and stateless authentication.

2. **Note Management REST API (Enterprise NestJS API)**
   - *Tech:* NestJS, TypeScript, SQLite, Prisma ORM, Passport JWT, Swagger
   - *Highlights:* Strict class-validator DTO validation, Prisma schema migrations, stateless JWT guards, and interactive OpenAPI documentation.

3. **File Auth Management System (Security & RBAC Engine)**
   - *Tech:* NestJS, MySQL, TypeScript, Role-Based Access Control, Multer Streams
   - *Highlights:* Granular RBAC permissions with custom guards, memory-safe file streaming pipelines, and cryptographic checksum validation.

---

## 🌲 Project Directory Structure

```text
personalprotfolio/
├── public/                     # Static assets, resume PDF, and avatars
│   ├── avatar.png
│   └── sourov-sarkar-resume.pdf
├── src/
│   ├── app/                    # Next.js App Router root
│   │   ├── favicon.ico
│   │   ├── globals.css         # Theme tokens, CSS reset, and utilities
│   │   ├── layout.tsx          # Root layout with SEO metadata & theme loader
│   │   └── page.tsx            # Main single-page portfolio layout
│   ├── components/             # Reusable UI sections and components
│   │   ├── About.tsx           # Bio, stats, and professional summary
│   │   ├── Contact.tsx         # Direct contact channels and interactive form
│   │   ├── Education.tsx       # B.Sc. in CSE details & core focus areas
│   │   ├── Experience.tsx      # Interactive career timeline (Dhaka Post, Fly Far Tech)
│   │   ├── Footer.tsx          # Copyright and social quick-links
│   │   ├── Hero.tsx            # Animated headline, quick CTAs, and status pills
│   │   ├── Interests.tsx       # Personal interests and engineering passions
│   │   ├── Navbar.tsx          # Sticky navigation, theme toggler, and resume trigger
│   │   ├── Projects.tsx        # Project showcase with mock API endpoints
│   │   ├── ResumeModal.tsx     # Embedded resume preview and download modal
│   │   ├── Skills.tsx          # Interactive skills matrix with progress meters
│   │   └── SplashCursor.tsx    # WebGL fluid physics cursor effect
│   └── data/
│       └── portfolioData.ts    # Centralized source of truth for all content & data
├── eslint.config.mjs           # ESLint configuration
├── next.config.ts              # Next.js configuration
├── package.json                # Project dependencies and script declarations
└── tsconfig.json               # TypeScript compiler options
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:
- **Node.js**: `v20.x` or higher (recommended: Node LTS)
- **Package Manager**: `npm` (v10+), `pnpm`, or `yarn`

### Installation

Clone the repository and install project dependencies:

```bash
# Clone the repository
git clone https://github.com/SOUROVSARKERTEC12/personalprotfolio.git

# Navigate to project directory
cd personalprotfolio

# Install dependencies
npm install
```

### Running Development Server

Start the local Next.js development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your web browser to view the application.

### Production Build

To compile and verify the optimized production build:

```bash
# Build the application
npm run build

# Start the production server
npm run start
```

### Code Quality & Linting

Run ESLint to ensure strict code style and prevent regressions:

```bash
npm run lint
```

---

## ⚙️ Configuration & Data Customization

All portfolio content is decoupled from the UI components and organized cleanly in a single source of truth:

📁 **`src/data/portfolioData.ts`**

You can easily modify:
- **Personal Information**: Name, titles, avatar path, social links, location, bio, and status.
- **Career Experience**: Company names, roles, employment dates, achievements, and technology tags.
- **Projects**: Title, category, descriptions, GitHub / live URLs, and interactive mock endpoints.
- **Skills**: Skill categories, proficiency percentages, and tags.
- **Education**: Degree details, university, and core computer science coursework.

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy this portfolio is using [Vercel](https://vercel.com):

1. Push your repository to GitHub.
2. Import the project into your Vercel Dashboard.
3. Vercel will automatically detect **Next.js** and apply optimal build settings (`next build`).
4. Click **Deploy**!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/SOUROVSARKERTEC12/personalprotfolio)

---

## 📬 Contact & Connect

Feel free to connect or reach out for opportunities, collaborations, or technical discussions:

- **👤 Name:** Sourov Sarkar
- **💼 Position:** Backend Developer @ Dhaka Post
- **📍 Location:** Dhaka, Bangladesh
- **📧 Email:** [sourovsarker005@gmail.com](mailto:sourovsarker005@gmail.com)
- **📱 Phone:** [+8801728326959](tel:+8801728326959)
- **🔗 LinkedIn:** [linkedin.com/in/sourovsarkerbd](https://linkedin.com/in/sourovsarkerbd)
- **💻 GitHub:** [@SOUROVSARKERTEC12](https://github.com/SOUROVSARKERTEC12)
- **📚 Stack Overflow:** [sourov-sarkar](https://stackoverflow.com/users/9541123/sourov-sarkar)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — feel free to explore, fork, and use it as inspiration for your own portfolio.

---

<div align="center">
  <sub>Designed & Developed by <a href="https://github.com/SOUROVSARKERTEC12">Sourov Sarkar</a>. Built with Next.js 16, React 19, and TypeScript.</sub>
</div>
