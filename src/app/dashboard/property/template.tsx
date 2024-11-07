import Image from "next/image";
import { NavLinks } from "./fragments/navLinks";

export default function PropertyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col min-h-vh w-vw p-5">
      <header className="flex flex-col gap-7">
        <div className="w-full h-[100px] bg-gray-400 relative">
          <Image
            src="/images/img1.png"
            alt="Property image"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex gap-5 items-center font-semibold">
          <Image
            src="/icons/arrow-left.svg"
            alt="plus"
            width={30}
            height={30}
            className="bg-[#D9D9D9] p-1 rounded-full fill-white"
          />
          <p>Property address</p>
        </div>
        <NavLinks />
        <div className="border-b border-black" />
      </header>
      <div className="pt-5">{children}</div>
    </main>
  );
}
