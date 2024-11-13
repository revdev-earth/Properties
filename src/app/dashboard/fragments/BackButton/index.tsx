"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function BackButton() {
  const router = useRouter();

  return (
    <button className="text-[0px]" onClick={() => router.back()}>
      <Image
        src="/icons/arrow-left.svg"
        alt="plus"
        width={30}
        height={30}
        className="bg-[#D9D9D9] p-1 rounded-full fill-white"
      />
      Volver Atrás
    </button>
  );
}
