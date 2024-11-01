"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { href: "/dashboard/property/information", label: "Information" },
  { href: "/dashboard/property/legal", label: "Legal" },
  { href: "/dashboard/property/tenats", label: "Tenats" },
  { href: "/dashboard/property/insurance", label: "Insurance" },
  { href: "/dashboard/property/services", label: "Services" },
  { href: "/dashboard/property/maintenance", label: "Maintenance" },
  {
    href: "/dashboard/property/photos-and-architectural",
    label: "Photos and architectural",
  },
  { href: "/dashboard/property/settings", label: "Settings" },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-5">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          className={`link ${
            pathname === link.href ? "active" : ""
          } py-3 px-4 bg-[#D9D9D9] rounded-full`}
          href={link.href}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
