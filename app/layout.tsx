import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/universal/header";
import Footer from "@/components/universal/Footer";
import { DarkModeProvider } from "@/components/providers/DarkModeProvider";
import { Rock_Salt } from "next/font/google";
import { IsLoadingProvider } from "@/components/providers/IsLoadingProvider";

export const metadata: Metadata = {
  title: "Anthony's Portfolio",
  description: "A site showcasing Anthony's projects and skills.",
};

// const recursive = Recursive({ subsets: ["latin"] });
const rockSalt = Rock_Salt({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${rockSalt.className}`}>
        <IsLoadingProvider>
          <DarkModeProvider>
            <Header />
            {children}
            <Footer />
          </DarkModeProvider>
        </IsLoadingProvider>
      </body>
    </html>
  );
}
