import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CursorController from "@/components/CursorController";
import FloatingGameIcon from "@/components/FloatingGameIcon";

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
  title: "Sourov Sarkar | Backend Developer",
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
    title: "Sourov Sarkar | Backend Developer",
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
    <html lang="bn" data-lang="bn" data-theme="cyber" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
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

                  const savedLang = localStorage.getItem('sourov_language');
                  if (savedLang) {
                    document.documentElement.setAttribute('data-lang', savedLang);
                    document.documentElement.setAttribute('lang', savedLang);
                  } else {
                    document.documentElement.setAttribute('data-lang', 'bn');
                    document.documentElement.setAttribute('lang', 'bn');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <CursorController />
        {children}
        <FloatingGameIcon />
      </body>
    </html>
  );
}
