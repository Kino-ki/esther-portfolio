import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import LanguageContextProvider from "../components/BilingualProvider/LangProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Esther Portfolio",
  description: "Video editor portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` bg-bgcolour text-[#E4E7D2]  ${inter.className}`}>
        <LanguageContextProvider>
          <header className="absolute top-0 z-10">
            <NavBar />
          </header>
          <main className="text-[#E4E7D2] relative z-0">{children}</main>
          <footer>
            <Footer />
          </footer>
        </LanguageContextProvider>
      </body>
    </html>
  );
}
