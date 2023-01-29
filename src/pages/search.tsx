import SearchBar from "@/components/searchbar";
import mainStyles from "@/app/page.module.css";
import { Product, Restaurant as Rest, RestaurantData } from "@/types";
import { useState } from "react";
import Restaurant from "@/components/restaurant";

function Search() {
  const [restaurants, setRestaurants] = useState<Rest[]>([]);

  const handler = (stuffs: Map<RestaurantData, Product[]>) => {
    for (const [key, value] of stuffs.entries()) {
      const temp: Rest = {
        name: key.name,
        id: key.brand_id,
        restaurant: key,
        products: value
      };

      setRestaurants([...restaurants, temp]);
    }
  };

  return (
    <div
      className={mainStyles.container}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <SearchBar handleData={handler} />
      {restaurants.length > 0 ? (
        <>
          {restaurants.map((rest) => (
            <Restaurant key={rest.id} {...rest} />
          ))}
        </>
      ) : (
        <>Make a query to see some cool stuff!</>
      )}
    </div>
  );
}

export default Search;
