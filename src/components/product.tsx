import { Product } from "@/types";
import Image from "next/image";

function ProductDisplay(product: Product) {
  return (
    <div className="container">
      <Image src={product.photo.thumb} className="icon" alt=""></Image>
      <span className="text">Text goes here</span>
    </div>
  );
}

export default ProductDisplay;
