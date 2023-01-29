import { ErrorResponse, Product } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";
import { config } from "@/config";

async function getData(query: string, brands: string[]) {
  const options = {
    method: "GET",
    headers: {
      "x-app-id": config.appId,
      "x-app-key": config.appKey
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

/*
async function getData(query: any, brands: any) {
  const bruh = {
    branded: [
      {
        food_name: "Coffee Creamer, White Chocolate Mocha",
        serving_unit: "tbsp",
        nix_brand_id: "513fbc1283aa2dc80c00001f",
        brand_name_item_name: "Starbucks Coffee Creamer, White Chocolate Mocha",
        serving_qty: 1,
        nf_calories: 40,
        photo: {
          thumb:
            "https://assets.syndigo.com/85f01393-1e77-4074-9fea-a0b699bd7b82"
        },
        brand_name: "Starbucks",
        region: 1,
        brand_type: 2,
        nix_item_id: "5d53b823f1a4261f3c0203a4",
        locale: "en_US"
      },
      {
        food_name: "Starbucks Bottled Coffee Frappuccino Coffee Drink",
        serving_unit: "fl oz",
        nix_brand_id: "513fbc1283aa2dc80c00001f",
        brand_name_item_name:
          "Starbucks Starbucks Bottled Coffee Frappuccino Coffee Drink",
        serving_qty: 9.5,
        nf_calories: 200,
        photo: {
          thumb:
            "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
          highres: null,
          is_user_uploaded: false
        },
        brand_name: "Starbucks",
        region: 1,
        brand_type: 1,
        nix_item_id: "521b95cb4a56d006d578b9e6",
        locale: "en_US"
      },
      {
        food_name:
          "Medium Roast Brewed Coffee/Pike Place Roast Brewed Coffee, Grande",
        serving_unit: "fl oz",
        nix_brand_id: "513fbc1283aa2dc80c00001f",
        brand_name_item_name:
          "Starbucks Medium Roast Brewed Coffee/Pike Place Roast Brewed Coffee, Grande",
        serving_qty: 16,
        nf_calories: 5,
        photo: {
          thumb:
            "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
          highres: null,
          is_user_uploaded: false
        },
        brand_name: "Starbucks",
        region: 1,
        brand_type: 1,
        nix_item_id: "5266a0f69f05a39eb300733b",
        locale: "en_US"
      },
      {
        food_name:
          "Medium Roast Brewed Coffee/Pike Place Roast Brewed Coffee, Venti",
        serving_unit: "fl oz",
        nix_brand_id: "513fbc1283aa2dc80c00001f",
        brand_name_item_name:
          "Starbucks Medium Roast Brewed Coffee/Pike Place Roast Brewed Coffee, Venti",
        serving_qty: 20,
        nf_calories: 5,
        photo: {
          thumb:
            "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
          highres: null,
          is_user_uploaded: false
        },
        brand_name: "Starbucks",
        region: 1,
        brand_type: 1,
        nix_item_id: "5266a0f69f05a39eb30073c8",
        locale: "en_US"
      },
      {
        food_name:
          "Medium Roast Brewed Coffee/Pike Place Roast Brewed Coffee, Tall",
        serving_unit: "fl oz",
        nix_brand_id: "513fbc1283aa2dc80c00001f",
        brand_name_item_name:
          "Starbucks Medium Roast Brewed Coffee/Pike Place Roast Brewed Coffee, Tall",
        serving_qty: 12,
        nf_calories: 5,
        photo: {
          thumb:
            "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
          highres: null,
          is_user_uploaded: false
        },
        brand_name: "Starbucks",
        region: 1,
        brand_type: 1,
        nix_item_id: "5266a0f69f05a39eb30073d5",
        locale: "en_US"
      },
      {
        food_name:
          "Medium Roast Brewed Coffee/Pike Place Roast Brewed Coffee, Short",
        serving_unit: "fl oz",
        nix_brand_id: "513fbc1283aa2dc80c00001f",
        brand_name_item_name:
          "Starbucks Medium Roast Brewed Coffee/Pike Place Roast Brewed Coffee, Short",
        serving_qty: 8,
        nf_calories: 5,
        photo: {
          thumb:
            "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
          highres: null,
          is_user_uploaded: false
        },
        brand_name: "Starbucks",
        region: 1,
        brand_type: 1,
        nix_item_id: "5266a0f69f05a39eb30073ca",
        locale: "en_US"
      },
      {
        food_name:
          "Medium Roast Brewed Coffee/Pike Place Roast Brewed Coffee, Traveler",
        serving_unit: "fl oz",
        nix_brand_id: "513fbc1283aa2dc80c00001f",
        brand_name_item_name:
          "Starbucks Medium Roast Brewed Coffee/Pike Place Roast Brewed Coffee, Traveler",
        serving_qty: 8,
        nf_calories: 5,
        photo: {
          thumb:
            "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
          highres: null,
          is_user_uploaded: false
        },
        brand_name: "Starbucks",
        region: 1,
        brand_type: 1,
        nix_item_id: "c64062189a6116ce1c4ba184",
        locale: "en_US"
      },
      {
        food_name: "Classic Coffee Cake",
        serving_unit: "piece",
        nix_brand_id: "513fbc1283aa2dc80c00001f",
        brand_name_item_name: "Starbucks Classic Coffee Cake",
        serving_qty: 1,
        nf_calories: 390,
        photo: {
          thumb:
            "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
          highres: null,
          is_user_uploaded: false
        },
        brand_name: "Starbucks",
        region: 1,
        brand_type: 1,
        nix_item_id: "521b95cb4a56d006d578b9d1",
        locale: "en_US"
      },
      {
        food_name: "Cold Brewed Coffee, Grande",
        serving_unit: "fl oz",
        nix_brand_id: "513fbc1283aa2dc80c00001f",
        brand_name_item_name: "Starbucks Cold Brewed Coffee, Grande",
        serving_qty: 16,
        nf_calories: 5,
        photo: {
          thumb:
            "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
          highres: null,
          is_user_uploaded: false
        },
        brand_name: "Starbucks",
        region: 1,
        brand_type: 1,
        nix_item_id: "ddee4441225f7d40ceb1922f",
        locale: "en_US"
      },
      {
        food_name: "Iced Coffee Unsweetened, Trenta",
        serving_unit: "fl oz",
        nix_brand_id: "513fbc1283aa2dc80c00001f",
        brand_name_item_name: "Starbucks Iced Coffee Unsweetened, Trenta",
        serving_qty: 30,
        nf_calories: 5,
        photo: {
          thumb:
            "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
          highres: null,
          is_user_uploaded: false
        },
        brand_name: "Starbucks",
        region: 1,
        brand_type: 1,
        nix_item_id: "c6406218b0a7059eeb907a0f",
        locale: "en_US"
      },
      {
        food_name: "Iced Coffee Unsweetened, Venti",
        serving_unit: "fl oz",
        nix_brand_id: "513fbc1283aa2dc80c00001f",
        brand_name_item_name: "Starbucks Iced Coffee Unsweetened, Venti",
        serving_qty: 24,
        nf_calories: 5,
        photo: {
          thumb:
            "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
          highres: null,
          is_user_uploaded: false
        },
        brand_name: "Starbucks",
        region: 1,
        brand_type: 1,
        nix_item_id: "c640621887dd51f6e4a12c23",
        locale: "en_US"
      },
      {
        food_name: "Cold Brewed Coffee, Trenta",
        serving_unit: "fl oz",
        nix_brand_id: "513fbc1283aa2dc80c00001f",
        brand_name_item_name: "Starbucks Cold Brewed Coffee, Trenta",
        serving_qty: 30,
        nf_calories: 5,
        photo: {
          thumb:
            "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
          highres: null,
          is_user_uploaded: false
        },
        brand_name: "Starbucks",
        region: 1,
        brand_type: 1,
        nix_item_id: "ddee4441d7470353f5645c07",
        locale: "en_US"
      },
      {
        food_name: "Cold Brewed Coffee, Venti",
        serving_unit: "fl oz",
        nix_brand_id: "513fbc1283aa2dc80c00001f",
        brand_name_item_name: "Starbucks Cold Brewed Coffee, Venti",
        serving_qty: 24,
        nf_calories: 5,
        photo: {
          thumb:
            "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
          highres: null,
          is_user_uploaded: false
        },
        brand_name: "Starbucks",
        region: 1,
        brand_type: 1,
        nix_item_id: "ddee44414520c2b17976b9e1",
        locale: "en_US"
      },
      {
        food_name: "Coffee Frappuccino Light, Grande",
        serving_unit: "fl oz",
        nix_brand_id: "513fbc1283aa2dc80c00001f",
        brand_name_item_name: "Starbucks Coffee Frappuccino Light, Grande",
        serving_qty: 16,
        nf_calories: 110,
        photo: {
          thumb:
            "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
          highres: null,
          is_user_uploaded: false
        },
        brand_name: "Starbucks",
        region: 1,
        brand_type: 1,
        nix_item_id: "5266a0fb9f05a39eb300780e",
        locale: "en_US"
      },
      {
        food_name: "Iced Coffee Sweetened, Trenta",
        serving_unit: "fl oz",
        nix_brand_id: "513fbc1283aa2dc80c00001f",
        brand_name_item_name: "Starbucks Iced Coffee Sweetened, Trenta",
        serving_qty: 30,
        nf_calories: 160,
        photo: {
          thumb:
            "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
          highres: null,
          is_user_uploaded: false
        },
        brand_name: "Starbucks",
        region: 1,
        brand_type: 1,
        nix_item_id: "5266a0f69f05a39eb30073d8",
        locale: "en_US"
      },
      {
        food_name: "Coffee Frappuccino Light, Venti",
        serving_unit: "fl oz",
        nix_brand_id: "513fbc1283aa2dc80c00001f",
        brand_name_item_name: "Starbucks Coffee Frappuccino Light, Venti",
        serving_qty: 24,
        nf_calories: 160,
        photo: {
          thumb:
            "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
          highres: null,
          is_user_uploaded: false
        },
        brand_name: "Starbucks",
        region: 1,
        brand_type: 1,
        nix_item_id: "5266a0fb9f05a39eb300780b",
        locale: "en_US"
      },
      {
        food_name: "Iced Coffee Sweetened, Venti",
        serving_unit: "fl oz",
        nix_brand_id: "513fbc1283aa2dc80c00001f",
        brand_name_item_name: "Starbucks Iced Coffee Sweetened, Venti",
        serving_qty: 24,
        nf_calories: 120,
        photo: {
          thumb:
            "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
          highres: null,
          is_user_uploaded: false
        },
        brand_name: "Starbucks",
        region: 1,
        brand_type: 1,
        nix_item_id: "5266a0f69f05a39eb30073b2",
        locale: "en_US"
      },
      {
        food_name: "Cold Brewed Coffee, Tall",
        serving_unit: "fl oz",
        nix_brand_id: "513fbc1283aa2dc80c00001f",
        brand_name_item_name: "Starbucks Cold Brewed Coffee, Tall",
        serving_qty: 12,
        nf_calories: 0,
        photo: {
          thumb:
            "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
          highres: null,
          is_user_uploaded: false
        },
        brand_name: "Starbucks",
        region: 1,
        brand_type: 1,
        nix_item_id: "ddee4441a25963aebfaa3c5e",
        locale: "en_US"
      },
      {
        food_name: "Iced Coffee Sweetened, Tall",
        serving_unit: "fl oz",
        nix_brand_id: "513fbc1283aa2dc80c00001f",
        brand_name_item_name: "Starbucks Iced Coffee Sweetened, Tall",
        serving_qty: 12,
        nf_calories: 60,
        photo: {
          thumb:
            "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
          highres: null,
          is_user_uploaded: false
        },
        brand_name: "Starbucks",
        region: 1,
        brand_type: 1,
        nix_item_id: "5266a0f69f05a39eb30073cd",
        locale: "en_US"
      },
      {
        food_name: "Iced Coffee Unsweetened, Grande",
        serving_unit: "fl oz",
        nix_brand_id: "513fbc1283aa2dc80c00001f",
        brand_name_item_name: "Starbucks Iced Coffee Unsweetened, Grande",
        serving_qty: 16,
        nf_calories: 5,
        photo: {
          thumb:
            "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
          highres: null,
          is_user_uploaded: false
        },
        brand_name: "Starbucks",
        region: 1,
        brand_type: 1,
        nix_item_id: "c6406218d79d589bd7e6362f",
        locale: "en_US"
      }
    ]
  };

  return bruh as { branded: Product[] };
}
*/

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
