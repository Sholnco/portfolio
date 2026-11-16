import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matthew Olushola Oke - Biomedical Scientist & Engineer",
  description:
    "Biomedical scientist and engineer working at the intersection of wet-lab research, AI/ML, bioinformatics, and software engineering.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-200 antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}