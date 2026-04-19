import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "faria Dev",
};

export default function Home() {
  return (
    <div className="flex bg-green-500 p-6 flex-col">
      <Link href={"/About"}>About</Link>
      <Link href={"/Services"}>Services</Link>
      <Link href={"/blogs"}>Blogs</Link>
    </div>
  );
}
