const service1 = {
  // Service Information
  serviceType: "Electricity",
  provider: "Electricidad Global S.A.",
  accountNumber: "1234567890",
  paymentResponsible: "Property Owner",

  // Emergency and Support Contacts
  emergencyNumber: "0800-123456",
  supportContactName: "Juan Pérez",
  supportContactPhone: "0800-7654321",
  supportContactEmail: "soporte@electricidadglobal.com",
  supportHours: "Lunes a Viernes, de 9:00 a 18:00",

  // Conditions and Specific Clauses
  disconnectionClause: "El servicio puede ser suspendido tras 30 días de mora.",
  contractConditions: "Penalización del 20% por cancelación anticipada.",
  sharedResponsibilities:
    "El propietario se encarga de la instalación inicial. El inquilino cubre el consumo mensual.",
};

const service2 = {
  // Service Information
  serviceType: "Internet",
  provider: "FiberNet",
  accountNumber: "9876543210",
  paymentResponsible: "Tenant",

  // Emergency and Support Contacts
  emergencyNumber: "0800-987654",
  supportContactName: "María López",
  supportContactPhone: "0800-1122333",
  supportContactEmail: "soporte@fibernet.com",
  supportHours: "Lunes a Domingo, 24 horas",

  // Conditions and Specific Clauses
  disconnectionClause:
    "Se cobrará una tarifa por reconexión si el servicio es desconectado por falta de pago.",
  contractConditions:
    "Contrato de 12 meses. Penalización del 10% por cancelación anticipada.",
  sharedResponsibilities:
    "El inquilino se encarga de los pagos mensuales y del mantenimiento del equipo proporcionado.",
};

const service3 = {
  // Service Information
  serviceType: "Water",
  provider: "Aguas del Norte",
  accountNumber: "1122334455",
  paymentResponsible: "Property Owner",

  // Emergency and Support Contacts
  emergencyNumber: "0800-333444",
  supportContactName: "Carlos Martínez",
  supportContactPhone: "0800-2233445",
  supportContactEmail: "soporte@aguasdelnorte.com",
  supportHours: "Lunes a Viernes, de 8:00 a 17:00",

  // Conditions and Specific Clauses
  disconnectionClause: "El servicio se suspende tras 60 días de impago.",
  contractConditions:
    "Sin penalización por cancelación, pero se requiere aviso previo de 15 días.",
  sharedResponsibilities:
    "El propietario es responsable de las conexiones de agua. El inquilino debe informar cualquier fuga o desperfecto.",
};

const service4 = {
  // Service Information
  serviceType: "Gas",
  provider: "Gas Natural S.A.",
  accountNumber: "6677889900",
  paymentResponsible: "Tenant",

  // Emergency and Support Contacts
  emergencyNumber: "0800-400500",
  supportContactName: "Ana García",
  supportContactPhone: "0800-2233445",
  supportContactEmail: "soporte@gnatural.com",
  supportHours: "Lunes a Sábado, de 9:00 a 19:00",

  // Conditions and Specific Clauses
  disconnectionClause:
    "Si el servicio es interrumpido por más de 15 días, el inquilino deberá pagar un cargo adicional por reconexión.",
  contractConditions:
    "Contrato mínimo de 6 meses. Cancelación anticipada con penalización del 15%.",
  sharedResponsibilities:
    "El propietario se encarga de la instalación y mantenimiento del medidor. El inquilino paga por el consumo mensual.",
};

const service5 = {
  // Service Information
  serviceType: "Cable TV",
  provider: "VisionCable",
  accountNumber: "5566778899",
  paymentResponsible: "Property Owner",

  // Emergency and Support Contacts
  emergencyNumber: "0800-555666",
  supportContactName: "Luis Fernández",
  supportContactPhone: "0800-3445556",
  supportContactEmail: "soporte@visioncable.com",
  supportHours: "Lunes a Viernes, de 10:00 a 19:00",

  // Conditions and Specific Clauses
  disconnectionClause:
    "El servicio puede ser suspendido por falta de pago después de 30 días.",
  contractConditions:
    "Penalización del 10% por cancelación anticipada. Contrato por 12 meses.",
  sharedResponsibilities:
    "El propietario se encarga de la instalación del servicio. El inquilino debe pagar las tarifas mensuales.",
};
const service6 = {
  // Service Information
  serviceType: "Electricity",
  provider: "EnergiaVerde S.A.",
  accountNumber: "5432167890",
  paymentResponsible: "Tenant",

  // Emergency and Support Contacts
  emergencyNumber: "0800-999888",
  supportContactName: "Luis Gómez",
  supportContactPhone: "0800-1122333",
  supportContactEmail: "soporte@energiaverde.com",
  supportHours: "Lunes a Viernes, de 8:00 a 17:00",

  // Conditions and Specific Clauses
  disconnectionClause:
    "El servicio se suspende automáticamente después de 45 días de impago.",
  contractConditions:
    "Penalización del 25% por cancelación anticipada del contrato de 12 meses.",
  sharedResponsibilities:
    "El propietario debe garantizar la instalación adecuada. El inquilino paga el consumo mensual.",
};

const service7 = {
  // Service Information
  serviceType: "Internet",
  provider: "UltraNet",
  accountNumber: "2345678901",
  paymentResponsible: "Property Owner",

  // Emergency and Support Contacts
  emergencyNumber: "0800-678234",
  supportContactName: "Raúl Díaz",
  supportContactPhone: "0800-2233445",
  supportContactEmail: "soporte@ultranet.com",
  supportHours: "Lunes a Domingo, 24 horas",

  // Conditions and Specific Clauses
  disconnectionClause:
    "El servicio puede ser suspendido por 7 días si se detecta uso excesivo o fraude.",
  contractConditions:
    "Contrato de 6 meses. Penalización del 15% si se cancela antes de tiempo.",
  sharedResponsibilities:
    "El propietario es responsable de la instalación inicial. El inquilino paga por el servicio mensual.",
};

const service8 = {
  // Service Information
  serviceType: "Water",
  provider: "Aguas Urbanas",
  accountNumber: "2233445566",
  paymentResponsible: "Tenant",

  // Emergency and Support Contacts
  emergencyNumber: "0800-345678",
  supportContactName: "Carlos Martínez",
  supportContactPhone: "0800-3445556",
  supportContactEmail: "soporte@aguasurbanas.com",
  supportHours: "Lunes a Viernes, de 8:00 a 18:00",

  // Conditions and Specific Clauses
  disconnectionClause:
    "El servicio será suspendido tras 60 días de impago. Reconexión disponible por un cargo adicional.",
  contractConditions:
    "No se permiten cancelaciones anticipadas sin penalización de 10%.",
  sharedResponsibilities:
    "El propietario es responsable de las conexiones de agua. El inquilino cubre el consumo mensual.",
};

const service9 = {
  // Service Information
  serviceType: "Gas",
  provider: "GasPlus S.A.",
  accountNumber: "9988776655",
  paymentResponsible: "Property Owner",

  // Emergency and Support Contacts
  emergencyNumber: "0800-444555",
  supportContactName: "Ana García",
  supportContactPhone: "0800-2233445",
  supportContactEmail: "soporte@gasplus.com",
  supportHours: "Lunes a Sábado, de 9:00 a 20:00",

  // Conditions and Specific Clauses
  disconnectionClause:
    "En caso de falta de pago, el servicio se cortará tras 30 días. Requiere pago completo para reconexión.",
  contractConditions:
    "Contrato de 12 meses con un cargo por cancelación anticipada del 20%.",
  sharedResponsibilities:
    "El propietario es responsable de la instalación del medidor. El inquilino cubre el consumo de gas.",
};

const service10 = {
  // Service Information
  serviceType: "Cable TV",
  provider: "VisionCable",
  accountNumber: "7766554433",
  paymentResponsible: "Tenant",

  // Emergency and Support Contacts
  emergencyNumber: "0800-555777",
  supportContactName: "Juliana Pérez",
  supportContactPhone: "0800-3344556",
  supportContactEmail: "soporte@visioncable.com",
  supportHours: "Lunes a Viernes, de 9:00 a 18:00",

  // Conditions and Specific Clauses
  disconnectionClause:
    "El servicio será desconectado tras 30 días de impago, con cargo por reconexión.",
  contractConditions:
    "Contrato de 12 meses, cancelación anticipada con penalización del 15%.",
  sharedResponsibilities:
    "El propietario debe garantizar que el servicio de cable esté activado. El inquilino paga por el servicio mensual.",
};

module.exports = {
  service1,
  service2,
  service3,
  service4,
  service5,
  service6,
  service7,
  service8,
  service9,
  service10,
};
