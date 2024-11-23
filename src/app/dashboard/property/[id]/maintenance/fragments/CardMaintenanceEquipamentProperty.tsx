export default function CardMaintenanceEquipamentProperty({
  equipament,
}: {
  equipament: any;
}) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-lg">
      <h3 className="font-bold text-lg mb-3">
        Equipment Name: {equipament.equipmentName}
      </h3>

      <div className="p-5 rounded-lg border">
        <p>Maintenance Frequency: {equipament.maintenanceFrequency}</p>
        <p>
          Last Maintenance Date:
          {equipament.lastMaintenanceDate
            ? new Date(equipament.lastMaintenanceDate).toLocaleDateString()
            : "N/A"}
        </p>
        <p>Maintenance Cost: {equipament.maintenanceCost || "N/A"}</p>
        <p>Cost Responsible: {equipament.costResponsible}</p>
      </div>

      <button className="py-3 px-4 bg-[#D9D9D9] rounded-full transition-all w-auto">
        Ver
      </button>
    </div>
  );
}
