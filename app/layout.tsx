import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mohit.systems"),
  title: {
    default: "Mohit Hingorani | Full Stack & AI Developer",
    template: "%s | Mohit Hingorani",
  },
  description:
    "Full Stack & AI Developer specializing in React, Node.js, Python, and AI/ML. Building innovative solutions with modern technologies.",
  keywords: [
    "Full Stack Developer",
    "AI Developer",
    "React",
    "Node.js",
    "Python",
    "Machine Learning",
    "Portfolio",
  ],
  authors: [{ name: "Mohit Hingorani" }],
  creator: "Mohit Hingorani",
  publisher: "Mohit Hingorani",
  openGraph: {
    title: "Mohit Hingorani | Full Stack & AI Developer",
    description:
      "Full Stack & AI Developer specializing in React, Node.js, Python, and AI/ML.",
    url: "https://mohit.systems",
    siteName: "Mohit Hingorani Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://mohit.systems/api/og",
        width: 1200,
        height: 630,
        alt: "Mohit Hingorani Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohit Hingorani | Full Stack & AI Developer",
    description:
      "Full Stack & AI Developer specializing in React, Node.js, Python, and AI/ML.",
    images: ["https://mohit.systems/api/og"],
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#121212",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/mohit-avatar.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </head>
      <body className={``}>{children}</body>
    </html>
  );
}
