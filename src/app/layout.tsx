import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "../components/CustomCursor";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Mivon — Creative Agency (Clone)",
  description: "Recreation of the Mivon creative agency homepage: branding, product design, digital marketing and SEO.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomCursor />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
