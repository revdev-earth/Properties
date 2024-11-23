export default function CardMaintenanceProperty({
  maintenance,
}: {
  maintenance: any;
}) {
  return (
    <div className="flex flex-col items-center gap-5 rounded-lg">
      <h3 className="font-bold text-lg">
        Type of Maintenance: {maintenance.type}
      </h3>

      <div className="p-5 rounded-lg border">
        <p>Task Description: {maintenance.task}</p>
        <p>Status: {maintenance.status || "N/A"}</p>
        <p>Repair Cost: {maintenance.repairCost || "N/A"}</p>
        <p>Cost Responsible: {maintenance.costResponsible}</p>
      </div>

      <button className="py-3 px-4 bg-[#D9D9D9] rounded-full transition-all w-auto">
        Ver
      </button>
    </div>
  );
}
