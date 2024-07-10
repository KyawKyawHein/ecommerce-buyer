import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainNavbar from "./components/MainNavbar";
import LinkNavbar from "./components/LinkNavbar";
import ReactQueryClientProvider from "./components/ReactQueryClientProvider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactQueryClientProvider>
      <body className={inter.className}>
        <MainNavbar />
        <LinkNavbar/>
        {children}
        <Toaster/>
      </body>
      </ReactQueryClientProvider>
    </html>
  );
}
