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
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => {
          setQuery(e.currentTarget.value);
          console.log(e.currentTarget.value);
        }}
      />
      <button
        type="submit"
        onClick={() => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async function (position) {
              let lat = position.coords.latitude;
              let lon = position.coords.longitude;

              console.log("Latitude: " + lat + ", Longitude: " + lon);
            });
          } else {
            alert(
              "This app will (probably) not work if you do not enable Geolocation"
            );
            console.warn("Geolocation is not supported by this browser.");
          }
        }}
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
