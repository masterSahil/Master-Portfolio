import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import PageLoader from "@/components/Loader";

export const metadata = {
  metadataBase: new URL('https://www.mastersahil.dev'), // Replace with your actual live domain
  title: {
    default: "Master Sahil | Full Stack & App Developer",
    template: "%s | Master Sahil"
  },
  description: "Master Sahil is a premium Full Stack & App Developer specializing in React, Next.js, React Native, and Node.js. Building scalable, high-performance digital experiences and AI automation systems.",
  keywords: ["Master Sahil", "Full Stack Developer", "App Developer", "React Developer", "Next.js Expert", "React Native Developer", "Web Development", "AI Automation Portfolio"],
  authors: [{ name: "Master Sahil", url: "https://github.com/masterSahil" }],
  creator: "Master Sahil",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Master Sahil Portfolio",
    title: "Master Sahil | Premium Full Stack Developer",
    description: "Building digital experiences that matter. Focused on clean code, high performance, and next-gen user interfaces.",
    images: [
      {
        url: "/og-image.png", // Add an image to your public folder later for social previews
        width: 1200,
        height: 630,
        alt: "Master Sahil Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Sahil | Full Stack & App Developer",
    description: "Building scalable, high-performance digital experiences and AI automation systems.",
    creator: "@masterSahil",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  // JSON-LD Structured Data for Google Rich Snippets
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Master Sahil',
    jobTitle: 'Full Stack & App Developer',
    url: 'https://www.mastersahil.dev',
    sameAs: [
      'https://github.com/masterSahil',
      'https://linkedin.com/in/mastersahil',
    ],
  };

  return (
    <html lang="en" className={`h-full antialiased font-sans`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#020602] text-white overflow-x-hidden scrollbar-hide">
        <PageLoader isLoading={false} />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
