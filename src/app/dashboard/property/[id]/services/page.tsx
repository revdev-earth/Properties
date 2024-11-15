"use client";

import { useEffect, useState } from "react";
import { PropertyBasicService } from "@prisma/client";

import { PropsJustParams } from "../types";
import { getPropertyServicesByPropertyId } from " +/actions/property/actions_and_mutations";
import Service from "./Service";

export default function Services({ params }: PropsJustParams) {
  const [id, setId] = useState<string | null>(null);
  const [services, setServices] = useState<PropertyBasicService | null>(null);

  useEffect(() => {
    async function resolveParams() {
      const resolvedParams = await params;
      setId(resolvedParams.id);
    }
    resolveParams();
  }, [params]);

  useEffect(() => {
    if (id) {
      async function fetchServicesProperty() {
        if (id !== null) {
          const { basicService } = (await getPropertyServicesByPropertyId({
            id,
          })) || { basicService: null };
          setServices(basicService);
        }
      }
      fetchServicesProperty();
    }
  }, [id]);

  console.log("services  ::", services);

  if (!services) {
    return <div>Loading...</div>;
  }

  return services.map((service) => (
    <Service key={service.id} service={service} />
  ));
}
