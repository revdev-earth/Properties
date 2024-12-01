import { useState } from "react";

import { Service as ServiceType } from " +/redux/store";

import { ServiceModal } from " +/app/dashboard/property/[id]/fragments/Service";

const Services = ({ services }: { services: ServiceType[] }) => {
  const [serviceId, setServiceId] = useState<string>();

  if (!services || services.length === 0) {
    return null;
  }

  return (
    <div className="mt-3">
      <h3>Services</h3>

      <div className="flex flex-col gap-3 mt-2">
        {services.map((service) => (
          <button
            key={service.id}
            className="btn btn-secondary text-left"
            onClick={() => setServiceId(service.id)}
          >
            {service.type} - {service.provider}
          </button>
        ))}
      </div>

      {serviceId && (
        <ServiceModal serviceId={serviceId} onClose={() => setServiceId("")} />
      )}
    </div>
  );
};

export default Services;
