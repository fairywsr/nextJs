import React from "react";

export default async function Cloths() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <div>16 products cloths</div>;
}
