import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import BackgroundParticles from "@/components/BackgroundParticles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pravin Kakde | Full Stack Developer & AI Enthusiast",
  description:
    "Explore the premium portfolio of Pravin Kakde, a Full Stack Developer and AI enthusiast specializing in high-performance web experiences using React.js, Next.js, Node.js, and Flask.",
  keywords: [
    "Pravin Kakde",
    "Pravin Kakde Portfolio",
    "Full Stack Developer",
    "AI Enthusiast",
    "Pune Developer",
    "Next.js Developer",
    "React Developer",
    "Software Engineer",
  ],
  authors: [{ name: "Pravin Kakde" }],
  openGraph: {
    title: "Pravin Kakde | Full Stack Developer & AI Enthusiast",
    description:
      "Interactive, cinematic developer portfolio of Pravin Kakde. Explore full-stack and AI applications.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/profile-dark.jpg",
        width: 1200,
        height: 630,
        alt: "Pravin Kakde Portfolio Preview",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth h-full antialiased`}
    >
      <body className="bg-dark-bg text-foreground min-h-full font-sans antialiased select-none">
        <SmoothScroll>
          <BackgroundParticles />
          <CustomCursor />
          <Navbar />
          <main className="relative z-10 flex flex-col w-full">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

