"use client";

import styles from "./page.module.css";
import Attribution from "@/components/attribution";
import SearchBar from "@/components/searchbar";
import { useState } from "react";
import type { Product, RestaurantData } from "../types";

interface Restaurant {
  name: string;
  id: string;
  products: Product[];
}

export default function Home() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const handler = (stuffs: Map<RestaurantData, Product[]>) => {
    for (const [key, value] of stuffs.entries()) {
      const temp: Restaurant = {
        name: key.name,
        id: key.brand_id,
        products: value
      };

      setRestaurants([...restaurants, temp]);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <SearchBar handleData={handler} />
        {restaurants.length}
      </div>
      <Attribution />
    </main>
  );
}
