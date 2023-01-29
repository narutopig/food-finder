import "./globals.css";

import Head from "./head";
import Attribution from "@/components/attribution";
import Navbar from "@/components/navbar";
import styles from "./page.module.css";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <Navbar />

      <Head />
      <head />
      <body className="main">{children}</body>
      <Attribution />
    </div>
  );
}
