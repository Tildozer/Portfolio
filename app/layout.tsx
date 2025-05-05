import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./_universalComp/header/";
import Footer from "./_universalComp/Footer";
import { DarkModeProvider } from "./_providers/DarkModeProvider";
import { Rock_Salt } from "next/font/google";
import { IsLoadingProvider } from "./_providers/IsLoadingProvider";
import { LaptopInfoProvider } from "./_providers/LaptopInfoProvider";

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
            <LaptopInfoProvider>
              <Header />
              {children}
              <Footer />
            </LaptopInfoProvider>
          </DarkModeProvider>
        </IsLoadingProvider>
      </body>
    </html>
  );
}
