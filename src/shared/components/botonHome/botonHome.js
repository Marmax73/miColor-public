"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon } from "lucide-react";

const BotonHome = () => {
  const pathname = usePathname();

  const isNosotros = pathname === "/nosotros";

  return (
    <Link
      href="/"
      aria-label="Volver a la portada"
      className="
      inline-flex items-center justify-end
      w-full
      p-3
      bg-transparent
      hover:opacity-80
      transition
      sm:hidden
    "

    >
      <HomeIcon
        size={20}
        className={isNosotros ? "text-[#C9A24D]" : "text-[#0B0F1A]"}
      />
    </Link>
  );
};

export default BotonHome;
