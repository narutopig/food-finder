"use client";

import type { Restaurant as Rest } from "@/types";
import { useState } from "react";
import styles from "./restaurant.module.css";

function format(phoneNumber: string) {
  return (
    "(" +
    phoneNumber.substring(2, 5) +
    ") " +
    phoneNumber.substring(5, 8) +
    "-" +
    phoneNumber.substring(8)
  );
}

function Restaurant({ name, restaurant, products }: Rest) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.container} style={{ flexDirection: "row" }}>
      <div>
        <h3>
          {restaurant.website ? (
            <a href={restaurant.website} target="_blank" rel="noreferrer">
              {name}
            </a>
          ) : (
            <p>{name}</p>
          )}{" "}
          - {format(restaurant.phone)}
        </h3>
        <p style={{ float: "right" }}>{restaurant.distance_km.toFixed(1)} km</p>
      </div>

      <div className={styles.footer}>
        {restaurant.city}, {restaurant.state}
      </div>
    </div>
  );
}

export default Restaurant;
