import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Poppins } from "next/font/google"; 
import "./globals.css";

// const poppins = Poppins({ weight: ["300", "400", "500", "600"], subsets: ["latin"],}); 

export const metadata = {
  title: "upraise",
  description: "Generated with <3 from delhi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={poppins.className}>   */}
      <body>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
