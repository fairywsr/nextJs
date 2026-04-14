import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex bg-green-500 p-6 flex-col">
      <Link href={"/About"}>About</Link>
      <Link href={"/Services"}>Services</Link>
    </div>
  );
}
