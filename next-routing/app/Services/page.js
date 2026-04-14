import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="bg-sky-300 p-2 flex flex-col justify-center">
      <Link href="/Services/webdev">web development</Link>
      <Link href="/Services/appDev">app development</Link>
      <Link href="/Services/softwaredev">software development</Link>
    </div>
  );
}

export default page;
