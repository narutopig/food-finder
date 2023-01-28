import type { NextApiRequest, NextApiResponse } from "next";

async function getStuff(query: string) {
  let url = `https://trackapi.nutritionix.com/v2/search/instant?=&query=${query}&detailed=true`;

  let options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-app-id": "725e70a7",
      "x-app-key": "9906820411b1b0a80e5079d383000c25",
      query: "2% fat milk",
      branded: "True",
      branded_type: "2",
      detailed: "True",
      common_restaurant: "False",
      common_grocery: "False"
    }
  };

  return await fetch(url, options).then((res) => res.json());
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const query = req.body["query"];

  const things = await getStuff(query);

  res.status(200).send(things);
}
