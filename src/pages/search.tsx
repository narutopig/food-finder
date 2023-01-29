import SearchBar from "@/components/searchbar";
import mainStyles from "@/app/page.module.css";
import { Product, Restaurant as Rest, RestaurantData } from "@/types";
import { useState } from "react";
import Restaurant from "@/components/restaurant";
import Navbar from "@/components/navbar";

function Search() {
  const [restaurants, setRestaurants] = useState<Rest[]>([]);

  const handler = (stuffs: Map<RestaurantData, Product[]>) => {
    const thing = Array.from(stuffs.entries());

    setRestaurants(
      thing
        .map(([key, value]) => {
          return {
            name: key.name,
            id: key.brand_id,
            restaurant: key,
            products: value
          };
        })
        .filter((value) => value.products.length > 0)
    );
  };

  return (
    <div
      className={mainStyles.container}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "relative"
      }}
    >
      <Navbar />
      <SearchBar handleData={handler} />
      {restaurants.length > 0 ? (
        <>
          {restaurants.map((rest) => (
            <Restaurant
              key={Math.random() * Math.random() * 100000}
              {...rest}
            />
          ))}
        </>
      ) : (
        <>Make a query to see some cool stuff!</>
      )}
    </div>
  );
}

export default Search;
