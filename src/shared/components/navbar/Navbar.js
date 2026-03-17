"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import RegistroDropdown from "../RegistroDropdown/RegistroDropdown";
import LoginModal from "@/shared/components/modals/LoginModal";
import { useAuth } from "@/features/auth/context/AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const pathname = usePathname();
  const { state } = useAuth();

  const handleCloseMenu = () => setOpen(false);

  return (
    <nav className="w-full bg-[#0B0F1A] text-[#C9A24D] px-6 py-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">

          {/* Logo + Links */}
          <div className="flex items-center gap-6">
            <Link href="/" onClick={handleCloseMenu}>
              <h1 className="text-3xl font-bold hover:text-white">
                Mi Color
              </h1>
            </Link>

            <ul className="hidden md:flex gap-6">
              <li><Link href="/" onClick={handleCloseMenu}>Inicio</Link></li>
              <li><Link href="/nosotros" onClick={handleCloseMenu}>Nosotros</Link></li>
              <li><Link href="/contact" onClick={handleCloseMenu}>Contacto</Link></li>
            </ul>
          </div>

          {/* Botón mobile */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? "✖" : "☰"}
          </button>

          {/* Desktop actions */}
          <ul className="hidden md:flex gap-4 items-center">

            {/* 🔥 CAMBIO CLAVE: estado global */}
            {state.user ? (
              <>
                <li>
                  <span>Bienvenido {state.user.nombre}</span>
                </li>
                <li>
                  <button className="hover:text-white">
                    Cerrar sesión
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <button onClick={() => setShowModal(true)}>
                    Ingresar
                  </button>
                </li>

                <li>
                  <RegistroDropdown onLinkClick={handleCloseMenu} />
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Mobile menu */}
        {open && (
          <ul className="flex flex-col mt-4 gap-4 md:hidden">
            <li><Link href="/" onClick={handleCloseMenu}>Inicio</Link></li>
            <li><Link href="/nosotros" onClick={handleCloseMenu}>Nosotros</Link></li>
            <li><Link href="/contact" onClick={handleCloseMenu}>Contacto</Link></li>

            {/* 🔥 mismo patrón en mobile */}
            {state.user ? (
              <>
                <li>Bienvenido {state.user.nombre}</li>
                <li>
                  <button>Cerrar sesión</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <button onClick={() => setShowModal(true)}>
                    Ingresar
                  </button>
                </li>
                <RegistroDropdown onLinkClick={handleCloseMenu} />
              </>
            )}
          </ul>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <LoginModal onClose={() => setShowModal(false)} />
      )}
    </nav>
  );
}

//Está faltando logout. 


// const { logout } = useAuth();

// y:

// <button onClick={logout}>Cerrar sesión</button>