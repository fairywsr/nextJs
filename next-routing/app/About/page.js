import React from "react";

async function page({ params, searchParams }) {
  console.log(await searchParams);
  console.log(await params);
  return <div>page</div>;
}

export default page;
