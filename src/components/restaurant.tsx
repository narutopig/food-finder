"use client";

import type { Restaurant as Rest } from "@/types";
import { useState } from "react";
import ProductDisplay from "./product";
import styles from "./restaurant.module.css";

function format(phoneNumber: string) {
  return (
    "(" +
    phoneNumber.substring(2, 5) +
    ") " +
    phoneNumber.substring(5, 8) +
    "-" +
    phoneNumber.substring(8)
  );
}

function Restaurant({ name, restaurant, products }: Rest) {
  const phoneRegex = /\+1[0-9]{10}/;

  const [expanded, setExpanded] = useState(false);

  const validate = (phone: string) => {
    const match = phone.match(phoneRegex);
    return match && phone === match[0];
  };

  return (
    <div className={styles.supercontainer}>
      <div
        className={styles.container}
        style={{ flexDirection: "row", position: "relative", padding: "2%" }}
      >
        <div>
          <h3>
            {restaurant.website ? (
              <a href={restaurant.website} target="_blank" rel="noreferrer">
                {name}
              </a>
            ) : (
              <p>{name}</p>
            )}

            {validate(restaurant.phone) ? (
              <> - {format(restaurant.phone)}</>
            ) : (
              <></>
            )}
          </h3>
          <p style={{ float: "right" }}>
            {restaurant.distance_km.toFixed(1)} km
          </p>
          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              all: "unset",
              height: "20px",
              float: "right",
              position: "absolute",
              top: "0px",
              right: "0px",
              margin: "1%"
            }}
            title={`Click to ${expanded ? "collapse" : "expand"}`}
          >
            <h3>▼</h3>
          </button>
        </div>

        <footer className={styles.footer}>
          {restaurant.city}, {restaurant.state}
        </footer>
      </div>

      <div style={{ marginLeft: "10%" }}>
        {expanded ? (
          <table style={{ border: "1px solid" }}>
            <thead style={{ border: "1px solid" }}>
              <tr>
                <th scope="col"></th> {/*for images*/}
                <th scope="col">Name</th>
                <th scope="col">Calories</th>
                <th scope="col"></th> {/*for button*/}
              </tr>
            </thead>

            <tbody style={{ border: "1px solid" }}>
              {products.map((prod) => (
                <ProductDisplay key={prod.nix_item_id} {...prod} />
              ))}
            </tbody>
          </table>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Restaurant;
