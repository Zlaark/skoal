import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ClientLayout from "./components/ClientLayout";


const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata = {
  title: "Skoal Solutions - Global Payroll Reimagined",
  description: "Secure, compliant, and scalable people solutions across India and the Middle East.",
};

export default function Design6Layout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-white min-h-screen text-slate-800 selection:bg-emerald-100 selection:text-emerald-900`}>

        <ClientLayout>
          <Navbar />
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
