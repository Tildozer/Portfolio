import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./_universalComp/header/";
import Footer from "./_universalComp/Footer";
import { DarkModeProvider } from "./_providers/DarkModeProvider";
import { Recursive } from "next/font/google";

export const metadata: Metadata = {
  title: "Anthony's Portfolio",
  description: "A site showcasing Anthony's projects and skills.",
};

const recursive = Recursive({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${recursive.className}`}>
        <DarkModeProvider>
          <Header />
          {children}
          <Footer />
        </DarkModeProvider>
      </body>
    </html>
  );
}
