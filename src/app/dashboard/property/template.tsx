import Image from "next/image";
import { NavLinks } from "./fragments/navLinks";

export default function PropertyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col h-vh w-vw p-5">
      <div className="max-w-[1440px] h-[100px] bg-gray-400 relative">
        <Image src="/images/img1.png" alt="arrow left" fill={true} />
      </div>
      <div className="flex gap-5 items-center font-semibold my-7">
        <Image
          src="/icons/arrow-left.svg"
          alt="plus"
          width={30}
          height={30}
          className="bg-[#D9D9D9] p-2 rounded-full fill-white"
        />
        <p>Property address</p>
      </div>
      <NavLinks />
      <div className="border-b mt-5 border-black" />
      {children}
    </section>
  );
}
