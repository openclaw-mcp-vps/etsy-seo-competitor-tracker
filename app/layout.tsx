import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Etsy SEO Competitor Tracker",
  description: "Track Etsy competitor keywords and rankings to grow your shop."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4c4de62f-6de9-4239-a4d7-0dc9f6d33d37"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
