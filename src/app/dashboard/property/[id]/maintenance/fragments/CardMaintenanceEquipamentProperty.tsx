export default function CardMaintenanceEquipamentProperty({
  equipament,
}: {
  equipament: any;
}) {
  return (
    <div className="border p-5 ">
      <p>Equipment Name: {equipament.equipmentName}</p>
      <p>Maintenance Frequency: {equipament.maintenanceFrequency}</p>
      <p>
        Last Maintenance Date:{" "}
        {equipament.lastMaintenanceDate
          ? new Date(equipament.lastMaintenanceDate).toLocaleDateString()
          : "N/A"}
      </p>
      <p>Maintenance Cost: {equipament.maintenanceCost || "N/A"}</p>
      <p>Cost Responsible: {equipament.costResponsible}</p>
    </div>
  );
}
