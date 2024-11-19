export default function CardMaintenanceProperty(maintenance: any) {
  return (
    <div className="border p-5 ">
      <p>Type of Maintenance: {maintenance.type}</p>
      <p>Task Description: {maintenance.task}</p>
      <p>Status: {maintenance.status || "N/A"}</p>
      <p>Repair Cost: {maintenance.repairCost || "N/A"}</p>
      <p>Cost Responsible: {maintenance.costResponsible}</p>
    </div>
  );
}
