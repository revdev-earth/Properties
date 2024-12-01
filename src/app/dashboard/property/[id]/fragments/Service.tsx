import { useEffect, useState } from "react";

import { Service as ServiceType } from " +/redux/store";

import { getService } from " +/actions/property/actions_and_mutations";

export const ServiceModal = ({
  serviceId,
  onClose,
}: {
  serviceId: string;
  onClose: () => void;
}) => {
  const [service, setService] = useState<ServiceType | null>(null);

  useEffect(() => {
    const fetchService = async () => {
      const servicegetted = await getService({
        id: serviceId,
      });
      setService(servicegetted);
    };
    fetchService();
  }, [serviceId]);

  if (!service) {
    return <p>No hay información del servicio disponible.</p>;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white h-[90vh] w-11/12 max-w-4xl rounded-lg shadow-lg overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="sticky top-0 bg-white z-10 p-6 shadow-md border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Información del Servicio</h2>
            <button
              onClick={onClose}
              className="text-red-500 hover:text-red-700 font-bold"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 h-full overflow-hidden flex">
          <div className="overflow-y-auto ">
            {/* Basic Details */}
            <section className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Detalles Básicos</h3>
              <p>
                <strong>Tipo:</strong> {service.type}
              </p>
              <p>
                <strong>Proveedor:</strong> {service.provider}
              </p>
              <p>
                <strong>Número de Cuenta:</strong> {service.accountNumber}
              </p>
              <p>
                <strong>Responsable de Pago:</strong>{" "}
                {service.paymentResponsible}
              </p>
            </section>

            {/* Emergency Contacts */}
            <section className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                Contactos de Emergencia y Soporte
              </h3>
              <p>
                <strong>Número de Emergencia:</strong> {service.emergencyNumber}
              </p>
              <p>
                <strong>Contacto de Soporte:</strong>{" "}
                {service.supportContactName}
              </p>
              <p>
                <strong>Teléfono de Soporte:</strong>{" "}
                {service.supportContactPhone}
              </p>
              <p>
                <strong>Email de Soporte:</strong>{" "}
                {service.supportContactEmail || "No disponible"}
              </p>
              <p>
                <strong>Horas de Atención:</strong> {service.supportHours}
              </p>
            </section>

            {/* Clauses and Conditions */}
            <section className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                Cláusulas y Condiciones
              </h3>
              <p>
                <strong>Cláusula de Desconexión:</strong>{" "}
                {service.disconnectionClause || "No especificada"}
              </p>
              <p>
                <strong>Condiciones del Contrato:</strong>{" "}
                {service.contractConditions || "No especificadas"}
              </p>
              <p>
                <strong>Responsabilidades Compartidas:</strong>{" "}
                {service.sharedResponsibilities || "No especificadas"}
              </p>
            </section>

            {/* Incidents */}
            <section className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Incidentes</h3>
              {service.incidents && service.incidents.length > 0 ? (
                <div className="flex flex-col gap-3">
                  {service.incidents.map((incident) => (
                    <div
                      key={incident.id}
                      className="border border-gray-300 rounded-lg p-4"
                    >
                      <h4 className="font-medium mb-2">
                        Incidente (
                        {new Date(incident.incidentDate).toLocaleDateString()})
                      </h4>
                      <p>
                        <strong>Descripción:</strong>{" "}
                        {incident.incidentDescription}
                      </p>
                      <p>
                        <strong>Acciones Tomadas:</strong>{" "}
                        {incident.actionsTaken}
                      </p>
                      <p>
                        <strong>Compensación:</strong>{" "}
                        {incident.compensation || "No aplica"}
                      </p>
                      <p>
                        <strong>Notas:</strong>{" "}
                        {incident.compensationNotes || "No disponible"}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No hay incidentes registrados.</p>
              )}
            </section>

            {/* Consumption and Measurements */}
            <section>
              <h3 className="text-lg font-semibold mb-2">
                Consumo y Mediciones
              </h3>
              {service.consumptionAndMeasurements &&
              service.consumptionAndMeasurements.length > 0 ? (
                <div className="flex flex-col gap-3">
                  {service.consumptionAndMeasurements.map((measurement) => (
                    <div
                      key={measurement.id}
                      className="border border-gray-300 rounded-lg p-4"
                    >
                      <h4 className="font-medium mb-2">
                        Medición (
                        {new Date(measurement.readingDate).toLocaleDateString()}
                        )
                      </h4>
                      <p>
                        <strong>Método de Medición:</strong>{" "}
                        {measurement.measurementMethod || "No especificado"}
                      </p>
                      <p>
                        <strong>Valor de Lectura:</strong>{" "}
                        {measurement.readingValue}
                      </p>
                      <p>
                        <strong>Notas:</strong>{" "}
                        {measurement.readingNotes || "No disponible"}
                      </p>
                      <p>
                        <strong>Consumo Promedio:</strong>{" "}
                        {measurement.averageConsumption || "No calculado"}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No hay datos de consumo registrados.</p>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
