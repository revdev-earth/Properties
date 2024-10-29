import DashboardLayout from "./template";
import CardPropertyDashboard from "../components/card-property-dashboard";
import CardAdminDashboard from "../components/card-admin-dashboard";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="flex gap-[150px]">
        <div className="flex flex-col gap-5 p-5 rounded-lg border max-w-[441px]">
          {new Array(5).fill(null).map(() => (
            <CardPropertyDashboard key={Math.random() + 10} />
          ))}
        </div>
        <div className="flex gap-[150px]">
          <div className="flex flex-col gap-5 p-5 rounded-lg border max-w-[441px]">
            {new Array(5).fill(null).map(() => (
              <CardAdminDashboard key={Math.random() + 10} />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
