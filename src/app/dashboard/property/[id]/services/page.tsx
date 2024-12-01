"use client";

import { useSelector } from " +/redux";
import Services from "../fragments/Services";

export default function ServicesPage() {
  const services = useSelector((s) => s.property.services);

  if (!services) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-5">
      <Services services={services} />
    </div>
  );
}
