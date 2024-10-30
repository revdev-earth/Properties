"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-5">
      <Link
        className={`link ${
          pathname === "/information" ? "active" : ""
        } py-3 px-4 bg-[#D9D9D9] rounded-full`}
        href="/dashboard/property/information"
      >
        Information
      </Link>
      <Link
        className={`link ${
          pathname === "/legal" ? "active" : ""
        } py-3 px-4 bg-[#D9D9D9] rounded-full`}
        href="/dashboard/property/legal"
      >
        Legal
      </Link>
      <Link
        className={`link ${
          pathname === "/tenats" ? "active" : ""
        } py-3 px-4 bg-[#D9D9D9] rounded-full`}
        href="/dashboard/property/tenats"
      >
        Tenats
      </Link>
      <Link
        className={`link ${
          pathname === "/insurance" ? "active" : ""
        } py-3 px-4 bg-[#D9D9D9] rounded-full`}
        href="/dashboard/property/insurance"
      >
        Insurance
      </Link>
      <Link
        className={`link ${
          pathname === "/services" ? "active" : ""
        } py-3 px-4 bg-[#D9D9D9] rounded-full`}
        href="/dashboard/property/services"
      >
        Services
      </Link>
      <Link
        className={`link ${
          pathname === "/maintenance" ? "active" : ""
        } py-3 px-4 bg-[#D9D9D9] rounded-full`}
        href="/dashboard/property/maintenance"
      >
        Maintenance
      </Link>
      <Link
        className={`link ${
          pathname === "/photos-and-architectural" ? "active" : ""
        } py-3 px-4 bg-[#D9D9D9] rounded-full`}
        href="/dashboard/property/photos-and-architectural"
      >
        Photos and architectural
      </Link>
      <Link
        className={`link ${
          pathname === "/settings" ? "active" : ""
        } py-3 px-4 bg-[#D9D9D9] rounded-full`}
        href="/dashboard/property/settings"
      >
        Settings
      </Link>
    </nav>
  );
}
