import "./globals.css";

import { Inter } from "@next/font/google";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="main">{children}</body>
    </html>
  );
}
