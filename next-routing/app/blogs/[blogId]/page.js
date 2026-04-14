import React from "react";

async function Blog({ params }) {
  const { blogId } = await params;
  return <div>This is dynamic routing page test {blogId}</div>;
}

export default Blog;
