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
  title: "Faruk Kandemir | Full Stack Developer",
  description:
    "Full Stack Developer specializing in building exceptional digital experiences. Expertise in React, Next.js, and modern web technologies.",
  keywords: [
    "Faruk Kandemir",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Faruk Kandemir" }],
  creator: "Faruk Kandemir",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://farukkandemir.dev",
    title: "Faruk Kandemir | Full Stack Developer",
    description:
      "Full Stack Developer specializing in building exceptional digital experiences",
    siteName: "Faruk Kandemir Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faruk Kandemir | Full Stack Developer",
    description:
      "Full Stack Developer specializing in building exceptional digital experiences",
    creator: "@yourtwitterhandle",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
