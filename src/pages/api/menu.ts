import { ErrorResponse, Product } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

async function getData(query: string, brands: string[]) {
  const options = {
    method: "GET",
    headers: {
      "x-app-id": "725e70a7",
      "x-app-key": "9906820411b1b0a80e5079d383000c25"
    }
  };

  const brandIds = JSON.stringify(brands);

  const res = (await fetch(
    `https://trackapi.nutritionix.com/v2/search/instant?query=${encodeURIComponent(
      query
    )}&branded=true&self=false&common=false&brand_ids=${encodeURIComponent(
      brandIds
    )}`,
    options
  ).then((response) => response.json())) as { branded: Product[] };

  return res;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[] | ErrorResponse>
) {
  const { query, brands } = req.query;

  if (typeof query == "string" && typeof brands === "string") {
    const { branded } = await getData(query, [brands]);
    res.status(200).send(branded);
  } else {
    res.status(400).send({ message: "Invalid request" });
  }
}
