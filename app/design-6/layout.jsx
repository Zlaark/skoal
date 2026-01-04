import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "../components/Navbar";

// If design-6 specific globals are needed, we can create them. 
// For now, reuse main app globals but override with inline classes where needed.

const inter = Inter({
  subsets: ["latin"],
  display: 'swap', // Prevent FOIT, show fallback immediately
});

export const metadata = {
  title: "Skoal Solutions - Global Payroll Reimagined",
  description: "Secure, compliant, and scalable people solutions across India and the Middle East.",
  openGraph: {
    title: "Skoal Solutions - Global Payroll Reimagined",
    description: "Secure, compliant, and scalable people solutions across India and the Middle East.",
    images: [
      {
        url: "/home-og.png",
        width: 1200,
        height: 630,
        alt: "Skoal Solutions Dashboard Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skoal Solutions - Global Payroll Reimagined",
    description: "Secure, compliant, and scalable people solutions across India and the Middle East.",
    images: ["/home-og.png"],
  },
};

export default function Design6Layout({ children }) {
  return (
    <div className={`${inter.className} bg-white min-h-screen text-slate-800 selection:bg-emerald-100 selection:text-emerald-900`}>
      <Navbar />
      {children}
    </div>
  );
}
