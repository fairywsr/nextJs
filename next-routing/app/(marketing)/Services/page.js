import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";

//  static pages dynamically rendered
// way-1
// default = auto, force-dynamic, force-statc, error
export const dynamic = "force-dynamic";

// way-2 search params
const services = async ({ searchParams }) => {
  const search = await searchParams;
  console.log(search);
  console.log("running services component");

  // way-3 cookies function from next js
  const myCookies = await cookies();
  console.log("cookies in services component", myCookies);

  return (
    <div className="bg-sky-300 p-2 flex flex-col justify-center">
      <Link href="/Services/webdev">web development</Link>
      <Link href="/Services/appDev">app development</Link>
      <Link href="/Services/softwaredev">software development</Link>
    </div>
  );
};

export default services;
