import SearchBar from "@/components/searchbar";
import mainStyles from "@/app/page.module.css";
import {
  Condition,
  Food,
  Product,
  Restaurant as Rest,
  RestaurantData
} from "@/types";
import { useState } from "react";
import Restaurant from "@/components/restaurant";
import Navbar from "@/components/navbar";

function Search() {
  const [restaurants, setRestaurants] = useState<Rest[]>([]);
  const [dist_limit, setDLimit] = useState(5);
  const [calLimit, setCalLimit] = useState(2000);

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

  const setComparisons = (filters: string) => {
    const copy = filters.replaceAll(" ", "").split(",");

    const res: Condition[] = [];

    for (const seg of copy) {
      let variable = "";
      let comp = "";
      let num = ""; // convert to number

      let curr = 0;
      for (; curr < seg.length; curr++) {
        if (seg.charAt(curr).match(/[a-z]/i)) variable += seg.charAt(curr);
        else break;
      }

      for (; curr < seg.length; curr++) {
        if (seg.charAt(curr).match(/[\<\>=]/)) comp += seg.charAt(curr);
        else break;
      }

      for (; curr < seg.length; curr++) {
        if (seg.charAt(curr).match(/[0-9]/)) num += seg.charAt(curr);
      }

      if (comp == ">" || comp == "<" || comp == "<=" || comp == ">=") {
        res.push({
          name: variable,
          comparison: comp,
          compareTo: parseFloat(num)
        });
      }
    }
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
      <SearchBar handleData={handler} getComparisons={setComparisons} />
      <label>Max Calories: {calLimit}</label>
      <input
        type="range"
        min={0}
        max={2000}
        value={calLimit}
        onChange={(e) => setCalLimit(parseInt(e.currentTarget.value))}
        className="slider"
        id="cals"
      ></input>
      <label>Max Distance: {dist_limit}</label>
      <input
        type="range"
        min={0}
        max={5}
        step={0.1}
        value={dist_limit}
        onChange={(e) => setDLimit(parseFloat(e.currentTarget.value))}
        className="slider"
        id="dist"
      ></input>
      {restaurants.length > 0 ? (
        <>
          {restaurants
            .filter((rest) => rest.restaurant.distance_km < dist_limit)
            .map((rest) => (
              <Restaurant
                key={Math.random() * Math.random() * 100000}
                {...rest}
                products={rest.products.filter(
                  (p) => p.nf_calories <= calLimit
                )}
              />
            ))}
        </>
      ) : (
        <>Make a query to see some cool stuff!</>
      )}
    </div>
  );
}

function valid3(food: Food, conditions: Condition[]) {
  return conditions.every((cond) => valid2(food, cond));
}

function valid2(food: Food, condition: Condition) {
  switch (condition.name) {
    case "calories":
      return valid(food.nf_calories, condition);
    case "saturated_fat":
      return valid(food.nf_saturated_fat, condition);
    case "cholesterol":
      return valid(food.nf_cholesterol, condition);
    case "sodium":
      return valid(food.nf_sodium, condition);
    case "carbs":
      return valid(food.nf_total_carbohydrate, condition);
    case "fibers":
      return valid(food.nf_dietary_fiber, condition);
    case "sugars":
      return valid(food.nf_sugars, condition);
    case "protein":
      return valid(food.nf_protein, condition);
    default:
      return true;
  }
}

function valid(value: number, condition: Condition) {
  switch (condition.comparison) {
    case "<":
      return value < condition.compareTo;
    case "<=":
      return value <= condition.compareTo;
    case ">":
      return value > condition.compareTo;
    case ">=":
      return value >= condition.compareTo;
    case "=":
      return value == condition.compareTo;
  }
}

export default Search;
