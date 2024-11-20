"use client";

import { PropertyBasicService } from "@prisma/client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CardInsident from "./CardInsident";
import CardPayment from "./CardPayment";

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
  console.log(service);
  return (
    <div className="flex gap-5   h-fit">
      <div
        key={service.id}
        className="flex flex-col gap-4 items-center  border-b rounded-lg p-5  bg-slate-100"
      >
        <h3 className="font-bold text-xl mb-3">
          Service Type: {service.serviceType}
        </h3>

        <div className="p-5 rounded-lg border">
          <p>Provider: {service.provider}</p>
          <p>Account Number: {service.accountNumber}</p>
          <p>Payment Responsible: {service.paymentResponsible}</p>
        </div>

        <h3 className="text-lg">Payments</h3>
        <div className="flex flex-col gap-5 p-5 border">
          {service.servicePayment.map((s) => {
            return <CardPayment key={s.id} info={s} />;
          })}
        </div>

        <h3 className="text-lg">Incidents</h3>
        <div>
          {service.incident.map((i) => {
            console.log("service inside: ", i);
            return <CardInsident key={i.id} info={i} />;
          })}
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
