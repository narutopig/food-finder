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
      navigator.geolocation.getCurrentPosition(
        async function (position) {
          let lat = position.coords.latitude;
          let lon = position.coords.longitude;

          const url = `http://localhost:3000/api/restaurants?lat=${lat}&lng=${lon}&distance=10&limit=50`;

          const restaurants = (
            await fetch(url, {
              method: "GET",
              headers: { "Content-Type": "application/json" }
            }).then((res) => {
              return res.json();
            })
          ).locations as RestaurantData[];

          const theThings = new Map<RestaurantData, Product[]>();

          for await (const restaurant of restaurants) {
            const url = new URL("/api/menu", window.location.origin);
            url.searchParams.append("query", query);
            url.searchParams.append("brands", restaurant.brand_id);

            const another = (await fetch(url, {
              method: "GET",
              headers: { "Content-Type": "application/json" }
            }).then((res) => res.json())) as Product[];

            theThings.set(restaurant, another);
          }

          handleData(theThings);
        },
        function (error: any) {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              console.log("User denied the request for Geolocation.");
              break;
            case error.POSITION_UNAVAILABLE:
              console.log("Location information is unavailable.");
              break;
            case error.TIMEOUT:
              console.log("The request to get user location timed out.");
              break;
            case error.UNKNOWN_ERROR:
              console.log("An unknown error occurred.");
              break;
          }
        }
      );
    } else {
      alert(
        "This app will (probably) not work if you do not enable Geolocation"
      );
      console.warn("Geolocation is not supported by this browser.");
    }
  }

  return (
    <div
      className="search"
      style={{
        display: "flex",
        justifyContent: "flex-end",
        margin: 0,
        padding: 0
      }}
    >
      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          style={{
            float: "right",
            marginLeft: "auto",
            margin: 0,
            alignSelf: "flex-end"
          }}
        >
          Search
        </button>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => {
            setQuery(e.currentTarget.value);
          }}
          style={{
            float: "right",
            marginLeft: "auto",
            margin: 0,
            alignSelf: "flex-end"
          }}
        />
      </form>
    </div>
  );
}

export default SearchBar;
