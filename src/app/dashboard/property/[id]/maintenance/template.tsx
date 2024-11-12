import { NavLinks } from "./fragments/NavLinks";

export default function MaintenanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col min-h-vh w-vw p-5">
      <header className="flex flex-col gap-7">
        <div className="flex gap-5 items-center font-semibold">
          <p>Maintenances</p>
        </div>
        <NavLinks />
        <div className="border-b border-black" />
      </header>
      <div className="pt-5">{children}</div>
    </section>
  );
}
