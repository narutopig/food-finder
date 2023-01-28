"use client";

import { useState } from "react";

function SearchBar({ handleData }: { handleData: () => void }) {
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
            navigator.geolocation.getCurrentPosition(function (position) {
              var lat = position.coords.latitude;
              var lon = position.coords.longitude;
              console.log("Latitude: " + lat + ", Longitude: " + lon);
            });
          } else {
            console.log("Geolocation is not supported by this browser.");
          }

          console.log(query);
        }}
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
