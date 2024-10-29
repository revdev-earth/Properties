"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-5">
      <Link
        className={`link ${
          pathname === "/informacion" ? "active" : ""
        } py-3 px-4 bg-[#D9D9D9] rounded-full`}
        href="/dashboard/property/informacion"
      >
        Informacion
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
          pathname === "/inquilinos" ? "active" : ""
        } py-3 px-4 bg-[#D9D9D9] rounded-full`}
        href="/dashboard/property/inquilinos"
      >
        inquilinos
      </Link>
      <Link
        className={`link ${
          pathname === "/seguros" ? "active" : ""
        } py-3 px-4 bg-[#D9D9D9] rounded-full`}
        href="/dashboard/property/seguros"
      >
        Seguros
      </Link>
      <Link
        className={`link ${
          pathname === "/servicios" ? "active" : ""
        } py-3 px-4 bg-[#D9D9D9] rounded-full`}
        href="/dashboard/property/servicios"
      >
        Servicios
      </Link>
      <Link
        className={`link ${
          pathname === "/mantenimiento" ? "active" : ""
        } py-3 px-4 bg-[#D9D9D9] rounded-full`}
        href="/dashboard/property/mantenimiento"
      >
        Mantenimineto
      </Link>
      <Link
        className={`link ${
          pathname === "/fotos-y-planos" ? "active" : ""
        } py-3 px-4 bg-[#D9D9D9] rounded-full`}
        href="/dashboard/property/fotos-y-planos"
      >
        Fotos y planos
      </Link>
      <Link
        className={`link ${
          pathname === "/ajustes" ? "active" : ""
        } py-3 px-4 bg-[#D9D9D9] rounded-full`}
        href="/dashboard/property/ajustes"
      >
        Ajustes
      </Link>
    </nav>
  );
}
