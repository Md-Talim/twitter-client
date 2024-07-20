import LeftSidebar from "@/components/left-sidebar";
import RightSidebar from "@/components/right-sidebar";
import { GoogleOAuthProvider } from "@react-oauth/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
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
  const googleClientId = process.env.GOOGLE_CLIENT_ID;

  return (
    <GoogleOAuthProvider clientId={googleClientId!}>
      <html lang="en">
        <body className={inter.className}>
          <div className="grid min-h-screen grid-cols-12">
            <section className="col-span-3">
              <LeftSidebar />
            </section>

            {/* Home Feed */}
            <section className="col-span-4 border-l border-r border-gray-600">
              {children}
            </section>

            {/* Right Sidebar */}
            <section className="col-span-5">
              <RightSidebar />
            </section>
          </div>

          <Toaster />
        </body>
      </html>
    </GoogleOAuthProvider>
  );
}
