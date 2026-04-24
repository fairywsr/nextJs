import Shoes from "../store/Shoes";
import Cloths from "../store/Cloths";
import Link from "next/link";
import { Suspense } from "react";
export const metadata = {
  title: "faria Dev",
};

export default function Home() {
  return (
    <>
      <div className="flex bg-green-500 p-6 flex-col">
        <Link href={"/About"}>About</Link>
        <Link href={"/Services"}>Services</Link>
        <Link href={"/blogs"}>Blogs</Link>
      </div>
      {/* streaming in next Js */}
      {/* data from derver in chunks */}
      <div>
        <Suspense fallback={"loading clothing items"}>
          <Cloths />
        </Suspense>
        <Suspense fallback={"loading shoes items"}>
          <Shoes />
        </Suspense>
      </div>
    </>
  );
}
