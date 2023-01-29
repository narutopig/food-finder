"use client";

import styles from "./page.module.css";
import Attribution from "@/components/attribution";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className="content">
        <br />
        <p>Find the right food, in the right places.</p>
        <br />
        <hr />
        <img src="/restaurant.jpg" alt="restaurant image" />
      </div>
      <Attribution />
    </div>
  );
}
