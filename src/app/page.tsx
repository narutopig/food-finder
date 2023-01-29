"use client";

import styles from "./page.module.css";
import Attribution from "@/components/attribution";
import SearchBar from "@/components/searchbar";
import { useState } from "react";
import type { Product, RestaurantData } from "../types";
import Image from "next/image";

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
    <div className={styles.container}>
      <div className={styles.navbar}>
        <nav>
          <ul>
            <br />
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            {/* <li>
              <a href="restaurant.html">Restaurants</a>
            </li>
            <li>
              <a href="nutrition.html">Nutrition</a>
            </li> */}
            <div className="search">
              <li>
                <input type="text" placeholder="Search..." name="search" />
              </li>
              <li>
                <button type="submit">
                  <i className="search-">Button</i>
                </button>
              </li>
            </div>
          </ul>
        </nav>
      </div>
      <div className="content">
        <SearchBar handleData={handler} />
        {restaurants.length}
        <br />
        <h1>Improving Restaurant Choices Based On Nutrition</h1>
        <p>You should always dine perfect.</p>
        <br />
        <hr />
        <img src="/restaurant.jpg" alt="restaurant image" />
      </div>
      <Attribution />
    </div>
  );
}
