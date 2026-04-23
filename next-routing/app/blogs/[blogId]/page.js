import { notFound } from "next/navigation";
import React from "react";
// variable for not generating SSR pages if user want to vist new page only serve those pages ehich server is generated on build Time..
export const dynamicParams = true;

// incremental site generation in next js we use revalidate keyword to regenerate new page or new apiCall by default it is false but we can pas no as a parameter after how much time reGenerate a page( 2 seconds )
export const revalidate = 2;
// static site generation for page
export async function generateStaticparams() {
  //  data from api
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
  return data.map(({ id }) => ({
    blogId: `${id}`,
  }));

  // fixed data
  // return [
  //   { blogId: "1" },
  //   { blogId: "2" },
  //   { blogId: "3" },
  //   { blogId: "4" },
  //   { blogId: "5" },
  // ];
}
async function Blog({ params }) {
  const { blogId } = await params;
  if (!/^\d+$/.test(blogId)) {
    notFound();
  }
  //  incremental site generation at component level
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      // 5 seconds
      revalidate: 5,
    },
  });
  const data = await response.json();
  console.log(data);

  return <div>This is dynamic routing page test {blogId}</div>;
}

export default Blog;
