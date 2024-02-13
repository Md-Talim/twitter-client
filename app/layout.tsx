import { LeftSidebar } from "@/components/shared";
import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Twitter Clone",
  description:
    "Full stack Twitter Clone project. Built with Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid grid-cols-12 min-h-screen">
          <LeftSidebar />

          {/* Home Feed */}
          <div className="col-span-6 border-r border-l border-gray-600">
            {children}
          </div>

          {/* Right Sidebar */}
          <div className="col-span-3">Right Sidebar</div>
        </div>
      </body>
    </html>
  );
}
