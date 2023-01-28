import { SearchData } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SearchData | string>
) {
  const item = encodeURIComponent("kroger" + " " + req.body["item"]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "13640f099amsh2c4ee6975deab4fp160fa1jsnd0a1f47c519c",
      "X-RapidAPI-Host": "nutritionix-api.p.rapidapi.com",
    },
  };

  try {
    const stuff = (await fetch(
      `https://nutritionix-api.p.rapidapi.com/v1_1/search/${item}?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat`,
      options
    ).then((response) => response.json())) as SearchData;

    res.status(200).send(stuff);
  } catch (err) {
    res.status(400).send(err as string);
  }
}
