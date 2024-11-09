import { Property } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

const labels = [
  { src: "/icons/plus.svg", alt: "plus" },
  { src: "/icons/user.svg", alt: "user" },
  { src: "/icons/user.svg", alt: "dollar" },
];

export interface PropertyWithAddress extends Property {
  informationProperty: {
    streetAndNumber: string;
    neighborhood: string;
    cityAndState: string;
  } | null;
}

interface Props {
  property: PropertyWithAddress;
}

export default function CardProperty({ property }: Props) {
  const { informationProperty } = property;
  const {
    streetAndNumber = "streetAndNumber",
    neighborhood = "neighborhood",
    cityAndState = "cityAndState",
  } = informationProperty || {};
  const address = `${streetAndNumber}, ${neighborhood}, ${cityAndState}`;
  return (
    <Link
      href={`/dashboard/property/${property.id}/information`}
      className="flex gap-5 p-[10px] border rounded-md w-[401px] h-[100px]"
    >
      <>
        <Image
          src="/images/img1.png"
          alt="Picture of the author"
          width={80}
          height={80}
          className="rounded-md"
        />
        <div className="flex flex-col gap-3">
          <p className="font-semibold">{address}</p>
          <div className="flex gap-5">
            {labels.map((label, index) => (
              <Image
                key={`${index}-${label.alt}`}
                src={label.src}
                alt={label.alt}
                width={30}
                height={30}
                className="bg-[#D9D9D9] p-1 rounded-full w-[30px] h-[30px]"
              />
            ))}
          </div>
        </div>
      </>
    </Link>
  );
}
