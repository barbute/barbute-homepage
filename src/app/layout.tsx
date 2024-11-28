import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: "barbute | Home",
  description: "barbute's website - homepage",
  creator: "barbute",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <Navbar />
      <body>
        {children}
      </body>
    </html>
  );
}
