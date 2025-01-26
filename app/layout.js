import Footer from "@/components/layout/Footer";
import Heading from "@/components/layout/Heading";
import Header from "@/components/layout/Navbar";
import Scripts from "@/components/layout/Scripts";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Personal Page",
  description: "this is a Profile From Me , My Name is Mohammadreza Abdollahi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Heading/>
      <body>
        <Header />
        {children}  
        <Footer />
        <Scripts/>
      </body>
    </html>
  );
}
