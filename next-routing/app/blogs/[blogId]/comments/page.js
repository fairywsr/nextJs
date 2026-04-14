import React from "react";

async function page({ params }) {
  console.log(await params);
  const { blogId } = await params;
  return <div>blog comments {blogId}</div>;
}

export default page;
