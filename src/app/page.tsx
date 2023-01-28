"use client";

import styles from "./page.module.css";
import Attribution from "@/components/attribution";
import SearchBar from "@/components/searchbar";
import { useState } from "react";
import type { Product } from "../types";

interface Restaurant {
  name: string;
  id: string;
  products: Product[];
}

export default function Home() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <SearchBar
          handleData={() => {
            console.log("AMONGA");
          }}
        />
      </div>
      <Attribution />
    </main>
  );
}
