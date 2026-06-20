import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdulhamid Abdullahi Sulaiman — Full-stack Product Engineer",
  description: "Node.js · TypeScript · AWS · PostgreSQL. Building backend systems for early-stage SaaS startups.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
