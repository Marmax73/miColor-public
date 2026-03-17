import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function RegistroDropdown({ onLinkClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef(null);

  // Detecta si es móvil
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Cierra el submenú y el menú padre (si aplica)
  const handleLinkClick = () => {
    setIsOpen(false);
    if (onLinkClick) onLinkClick();
  };

  // Cierra el submenú si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 text-sm font-medium text-[#0B0F1A] bg-white rounded-md shadow hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] focus:outline-none"
      >
        Registro
      </button>

      {isOpen && (
        <div
          className={`absolute mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-[var(--color-accent-rose)] ring-opacity-50 z-50 transition-all duration-300 ease-in-out`}
        >
          <div className="py-1">
            <Link
              href="/RegistroCliente"
              className="block px-4 py-2 text-sm text-[#0B0F1A] hover:bg-[var(--color-accent-rose)] hover:text-white rounded"
              onClick={handleLinkClick}
            >
              Registro Cliente
            </Link>
            <Link
              href="/RegistroTienda"
              className="block px-4 py-2 text-sm text-[#0B0F1A] hover:bg-[var(--color-accent-rose)] hover:text-white rounded"
              onClick={handleLinkClick}
            >
              Registro Tienda
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
