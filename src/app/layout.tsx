import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import {Bebas_Neue} from "next/font/google"

const bebasNeue = Bebas_Neue({ weight: "400" })


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${bebasNeue.className} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
