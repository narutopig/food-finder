import { Food, Product } from "@/types";
import { useState } from "react";

function ProductDisplay(product: Product) {
  const [details, setDetails] = useState<Food | null>(null);

  return (
    <tr style={{ borderBottom: "1px solid black" }}>
      <td>
        <img
          src={product.photo.thumb}
          className="icon"
          alt=""
          height="40px"
          width="auto"
        />
      </td>
      <td style={{ wordWrap: "break-word" }}>{product.food_name}</td>
      <td>{product.nf_calories}</td>
      <td>
        <button
          style={{ all: "unset", color: "#4169e1" }}
          onClick={() => {
            console.log(
              product.nix_item_id,
              typeof product.nix_brand_id == "string"
            );

            fetch("/api/nutrition?id=" + product.nix_item_id)
              .then((response) => response.json())
              .then((response) => popup(response));
          }}
        >
          View More
        </button>
      </td>
    </tr>
  );
}

function popup(info: any) {
  const properties = [
    "nf_calories",
    "nf_total_fat",
    "nf_saturated_fat",
    "nf_cholesterol",
    "nf_sodium",
    "nf_total_carbohydrate",
    "nf_dietary_fiber",
    "nf_sugars",
    "nf_protein"
  ];

  console.log(info);

  alert(
    `Nutrition Information:\n\n${properties
      .map((prop) => (info[prop] ? `${format(prop)}: ${info[prop]}g\n` : ""))
      .join("")}`
  );
}

const format = (nutrient: string) => {
  const words = nutrient.split("_").slice(1);

  const str = words.join(" ");
  return str.charAt(0).toUpperCase() + str.substring(1);
};

export default ProductDisplay;
