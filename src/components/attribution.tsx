import React from "react";
import Image from "next/image";

const Attribution = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "0",
        right: "0",
        zIndex: 1
      }}
    >
      <Image src="/nutritionix.png" alt="" width={254} height={67} />
    </div>
  );
};

export default Attribution;
