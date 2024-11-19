export default function MaintenanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col min-h-vh w-vw p-5">
      <div className="pt-5">{children}</div>
    </section>
  );
}
