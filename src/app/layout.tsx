import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}
