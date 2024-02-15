import type { Metadata } from "next";
import Navbar from "./Components/navigation/Navbar";
import "./globals.css";



export const metadata: Metadata = {
  title: "On-Board",
  description: "Welcome !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100" >
        <Navbar />
        <main className="container mx-auto">
        {children}
        </main>   
      </body>
    </html>
  );
}
