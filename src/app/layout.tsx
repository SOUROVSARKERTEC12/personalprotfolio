import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SplashCursor from '@/components/SplashCursor'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#07090e" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Sourov Sarkar | Backend Developer & API Architect",
  description:
    "Portfolio of Sourov Sarkar, Backend Developer specialized in Node.js, Express.js, NestJS, TypeScript, PostgreSQL, and scalable microservice architectures.",
  keywords: [
    "Sourov Sarkar",
    "Backend Developer",
    "Node.js Developer",
    "NestJS Developer",
    "TypeScript",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "REST API",
    "GraphQL",
    "Software Engineer Bangladesh",
    "API Architecture"
  ],
  authors: [{ name: "Sourov Sarkar", url: "https://github.com/SOUROVSARKERTEC12" }],
  creator: "Sourov Sarkar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sourov-sarkar.dev",
    title: "Sourov Sarkar | Backend Developer & API Architect",
    description:
      "Passionate Backend Developer designing high-performance, scalable and reliable backend ecosystems using Node.js, NestJS, Express, and modern databases.",
    siteName: "Sourov Sarkar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sourov Sarkar | Backend Developer",
    description: "Designing high-performance backend ecosystems using Node.js, NestJS, and modern databases.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cyber" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('sourov_theme');
                  if (savedTheme) {
                    document.documentElement.setAttribute('data-theme', savedTheme);
                  } else {
                    document.documentElement.setAttribute('data-theme', 'cyber');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>

        <SplashCursor
          DENSITY_DISSIPATION={3.5}
          VELOCITY_DISSIPATION={2}
          PRESSURE={0.1}
          CURL={3}
          SPLAT_RADIUS={0.2}
          SPLAT_FORCE={6000}
          COLOR_UPDATE_SPEED={10}
          SHADING
          RAINBOW_MODE={false}
        />
        {children}</body>
    </html>
  );
}
