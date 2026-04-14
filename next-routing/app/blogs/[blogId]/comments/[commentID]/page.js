import React from "react";

async function page({ params }) {
  const { blogId, commentID } = await params;
  console.log(await params);
  return (
    <div>
      this is blog and blog ID: {blogId} and this is comment and comment ID:{" "}
      {commentID}
    </div>
  );
}

export default page;
