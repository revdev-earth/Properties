"use client";

import { PropertyBasicService } from "@prisma/client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CardService({
  service,
}: {
  service: PropertyBasicService;
}) {
  const pathname = usePathname();

  const pathParts = pathname.split("/"); // Split the current path by '/' and retrieve the property ID from the correct position
  const propertyId = pathParts[3]; // The property ID is assumed to be in the 4th position

  if (!service) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex gap-5   h-fit">
      <div
        key={service.id}
        className="flex flex-col items-center gap-1 border-b rounded-lg p-5  bg-slate-100"
      >
        <h3 className="font-bold text-xl mb-3">
          Service Type: {service.serviceType}
        </h3>

        <div className="p-5 rounded-lg border">
          <p>Provider: {service.provider}</p>
          <p>Account Number: {service.accountNumber}</p>
          <p>Payment Responsible: {service.paymentResponsible}</p>
        </div>
        <Link
          className={`py-3 px-4 bg-[#D9D9D9] rounded-full transition-all w-auto
          `}
          href={`/dashboard/property/${propertyId}/services/${service.id}`}
        >
          ver
        </Link>
      </div>
    </div>
  );
}
