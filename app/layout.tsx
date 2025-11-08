import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://farukkandemir.dev"),
  title: {
    default: "Faruk Kandemir | Full Stack Developer",
    template: "%s | Faruk Kandemir",
  },
  description:
    "Full Stack Developer specializing in building exceptional digital experiences with React, Next.js, TypeScript, and modern web technologies. Creating scalable solutions for real-world problems.",
  keywords: [
    "Faruk Kandemir",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Portfolio",
    "Web Development",
    "Modern Web Technologies",
    "React",
    "Node.js",
    "Tailwind CSS",
    "Prisma",
    "MongoDB",
    "PostgreSQL",
  ],
  authors: [{ name: "Faruk Kandemir", url: "https://farukkandemir.dev" }],
  creator: "Faruk Kandemir",
  publisher: "Faruk Kandemir",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "portfolio",
  classification: "personal website",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://farukkandemir.dev",
    title: "Faruk Kandemir | Full Stack Developer",
    description:
      "Full Stack Developer specializing in building exceptional digital experiences with modern web technologies. Explore my portfolio of React, Next.js, and TypeScript projects.",
    siteName: "Faruk Kandemir Portfolio",
    images: [
      {
        url: "/og-image.png", // You'll need to add this image
        width: 1200,
        height: 630,
        alt: "Faruk Kandemir - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faruk Kandemir | Full Stack Developer",
    description:
      "Full Stack Developer specializing in building exceptional digital experiences with React, Next.js, and TypeScript.",
    creator: "@farukkandemir",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://farukkandemir.dev",
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification
  },
  other: {
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Faruk Kandemir",
              jobTitle: "Full Stack Developer",
              description:
                "Full Stack Developer specializing in building exceptional digital experiences with React, Next.js, TypeScript, and modern web technologies.",
              url: "https://farukkandemir.dev",
              sameAs: [
                "https://github.com/farukkandemir",
                "https://linkedin.com/in/farukkandemir",
                "https://twitter.com/farukkandemir",
              ],
              knowsAbout: [
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Tailwind CSS",
                "Prisma",
                "MongoDB",
                "PostgreSQL",
                "Express.js",
                "Git",
                "Docker",
                "AWS",
              ],
              hasOccupation: {
                "@type": "Occupation",
                name: "Full Stack Developer",
                occupationLocation: {
                  "@type": "Country",
                  name: "Turkey",
                },
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://farukkandemir.dev",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
