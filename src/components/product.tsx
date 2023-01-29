import { Product } from "@/types";

function ProductDisplay(product: Product) {
  return (
    <tr className="container">
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
    </tr>
  );
}

export default ProductDisplay;
