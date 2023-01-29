import { ErrorResponse, RestaurantData } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

async function getData(
  latitude: string,
  longitude: string,
  distance: string,
  limit: string
) {
  const options = {
    method: "GET",
    headers: {
      "x-app-id": "725e70a7",
      "x-app-key": "9906820411b1b0a80e5079d383000c25",
      "Content-Type": "application/json"
    }
  };

  const ll = encodeURIComponent(latitude + "," + longitude);

  const res = await fetch(
    `https://trackapi.nutritionix.com/v2/locations?ll=${ll}&distance=${distance}mi&limit=${limit}`,
    options
  ).then((response) => response.json());

  return res as { locations: RestaurantData[] };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ locations: RestaurantData[] } | ErrorResponse>
) {
  const { lat, lng, distance, limit } = req.query;

  if (
    typeof lat === "string" &&
    typeof lng === "string" &&
    typeof distance === "string" &&
    typeof limit === "string"
  ) {
    const stuff = await getData(lat, lng, distance, limit);
    res.status(200).send(stuff);
  } else {
    res.status(400).send({ message: "Invalid request" });
  }
}
