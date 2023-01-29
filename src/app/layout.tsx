import "./globals.css";

import { Inter } from "@next/font/google";
import Head from "./head";
import Attribution from "@/components/attribution";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <head />
      <body className="main">{children}</body>
      <Attribution />
    </html>
  );
}
