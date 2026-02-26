 "use client";
 import { usePathname } from "next/navigation";
 import { useEffect } from "react";
 import { useState } from "react";
 import Link from "next/link";
 import RegistroDropdown from "../RegistroDropdown/RegistroDropdown";
 import LoginModal from "@/app/components/modals/LoginModal";

 export default function Navbar() {
   const [open, setOpen] = useState(false);
   const [openLogin, setOpenLogin] = useState(false);
   const handleCloseMenu = () => setOpen(false);
   const pathname = usePathname();
   const [showModal, setShowModal] = useState(false);

  //  useEffect(() => {
  //    setOpen(false);
  //  }, [pathname]);

   
   return (
     <nav className="w-full bg-[#0B0F1A] text-[#C9A24D] px-6 py-4">
       <div className="mx-auto max-w-7xl">
         <div className="flex items-center justify-between">
      {/* Logo + Links principales (desktop) */}
           <div className="flex items-center gap-6">
             <Link
               href="/"
               className="text-2xl font-bold"
               onClick={handleCloseMenu}
             >
               <h1 className="text-3xl font-bold text-[#C9A24D] hover:text-white">
                 Mi Color
               </h1>
             </Link>

           {/* Links principales (solo desktop) */}
             <ul className="hidden md:flex gap-6">
               <li className="px-2 rounded-sm hover:bg-accent-rose hover:text-white">
                 <Link href="/" onClick={handleCloseMenu}>Inicio</Link>
               </li>
               <li className="px-2 rounded-sm hover:bg-accent-rose hover:text-white">
                 <Link href="/about" onClick={handleCloseMenu}>Nosotros</Link>
               </li>
               <li className="px-2 rounded-sm hover:bg-accent-rose hover:text-white">
                 <Link href="/contact" onClick={handleCloseMenu}>Contacto</Link>
               </li>
             </ul>
           </div>
                 ||
           {/* Botón hamburguesa (solo mobile) */}
           <button
             className="md:hidden text-[#C9A24D] text-2xl"
             onClick={() => setOpen(!open)}
           >
             {open ? "✖" : "☰"}
           </button>

           {/* Botones de acción (solo desktop) */}
           <ul className="hidden md:flex gap-4">
            <li className="mr-3 mt-0.8 pt-2 pb-2 px-3 border-3 border-white rounded-lg hover:border border-[var(--color-gold-strong)] hover:text-[var(--color-gold-strong)]">
               <button onClick={() => setShowModal(true)}>
                 Ingresar
               </button>
             </li>
              

             <li className="px-3 pt-1 pb-1 rounded-lg hover:border border-[var(--color-accent-rose)] hover:text-white">
               <RegistroDropdown onLinkClick={handleCloseMenu} />
             </li>
           </ul>
         </div>
             
         {/* Menú desplegable (mobile) */}
         {open && (
           <ul className="flex flex-col mt-4 gap-4 md:hidden">
             <li><Link href="/" onClick={handleCloseMenu}>Inicio</Link></li>
             <li><Link href="/nosotros" onClick={handleCloseMenu}>Nosotros</Link></li>
             <li><Link href="/contact" onClick={handleCloseMenu}>Contacto</Link></li>
             <li >
                <button className="hover:scale-105 hover:border border-[var(--color-accent-rose)] hover:rounded-md pl-2" onClick={() => setOpenLogin(true)}>
                   Ingresar
                </button>
             </li>
             <RegistroDropdown onLinkClick={handleCloseMenu} />
           </ul>
         )}
       </div>
        {/* {openLogin && <LoginModal onClose={() => setOpenLogin(false)} />} */}
        
          {showModal && (
            <LoginModal onClose={() => setShowModal(false)} />
          )}
        
     </nav>

   );
 }