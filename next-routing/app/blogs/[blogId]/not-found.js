"use client";
import { useParams } from "next/navigation";
import React from "react";

export default function notFoundBlogs() {
  const path = useParams();
  console.log(path);
  return (
    <>
      {/* in not found page there is no props to create dynamic not found pages - for that first we make it client side conponent and usehook useParams to get the url */}
      <h1>Blog Page not found {path} </h1>
      <p>You are looking far</p>
    </>
  );
}
