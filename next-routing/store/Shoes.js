import React from "react";

export default async function Shoes() {
  await new Promise((resolve) => setTimeout(resolve, 6000));
  return <div>Shoes</div>;
}
