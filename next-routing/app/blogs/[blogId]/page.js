import { notFound } from "next/navigation";
import React from "react";

async function Blog({ params }) {
  const { blogId } = await params;
  if (!/^\d+$/.test(blogId)) {
    notFound();
  }
  return <div>This is dynamic routing page test {blogId}</div>;
}

export default Blog;
