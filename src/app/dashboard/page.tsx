import DashboardLayout from "./template";
import CardPropertyDashboard from "../components/card-property-dashboard";
import CardAdminDashboard from "../components/card-admin-dashboard";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="flex gap-[150px]">
        <div className="flex flex-col gap-5 p-5 rounded-lg border max-w-[441px]">
          <CardPropertyDashboard />
          <CardPropertyDashboard />
          <CardPropertyDashboard />
          <CardPropertyDashboard />
          <CardPropertyDashboard />
        </div>
        <div className="flex gap-[150px]">
          <div className="flex flex-col gap-5 p-5 rounded-lg border max-w-[441px]">
            <CardAdminDashboard />
            <CardAdminDashboard />
            <CardAdminDashboard />
            <CardAdminDashboard />
            <CardAdminDashboard />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
