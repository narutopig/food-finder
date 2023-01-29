"use client";

import type { RestaurantData, Product } from "@/types";
import { useState } from "react";

function SearchBar({
  handleData
}: {
  handleData: (arg: Map<RestaurantData, Product[]>) => void;
}) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit();
  };

  function submit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async function (position) {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        const url = new URL("/api/restaurants", window.location.origin);
        url.searchParams.append("lat", lat.toString());
        url.searchParams.append("lng", lon.toString());
        url.searchParams.append("distance", "10");
        url.searchParams.append("limit", "50");

        const restaurants = (await fetch(url, {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        }).then((res) => res.json())) as RestaurantData[];

        restaurants.forEach(async (restaurant: RestaurantData) => {
          const url = new URL("/api/menu", window.location.origin);
          url.searchParams.append("query", query);
          url.searchParams.append("brands", restaurant.brand_id);

          const another = (await fetch(url, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
          }).then((res) => res.json())) as Product[];

          theThings.set(restaurant, another);
        });

        const theThings = new Map<RestaurantData, Product[]>();

        handleData(theThings);
      });
    } else {
      alert(
        "This app will (probably) not work if you do not enable Geolocation"
      );
      console.warn("Geolocation is not supported by this browser.");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => {
          setQuery(e.currentTarget.value);
        }}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
