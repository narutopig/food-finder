import { ErrorResponse, Food } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";
import { config } from "@/config";

async function getData(id: string) {
  const options = {
    method: "GET",
    headers: {
      "x-app-id": config.appId,
      "x-app-key": config.appKey,
      "Content-Type": "application/json"
    }
  };

  const res = (
    await fetch(
      `https://trackapi.nutritionix.com/v2/search/item?nix_item_id=${id}`,
      options
    ).then((response) => response.json())
  )["foods"][0];

  console.log(res);

  return res as Food;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Food | ErrorResponse>
) {
  const { id } = req.query;

  if (typeof id == "string") {
    const stuff = await getData(id);
    res.status(200).send(stuff);
  } else {
    res.status(400).send({ message: "Invalid request" });
  }
}
