import React from "react";
import BotonHome from "../components/botonHome/botonHome";

const NosotrosPage = () => {
  return (
    <main className="min-h-screen bg-[#0B0F1A] flex items-center justify-center px-4">
      <section className="relative w-full max-w-xl bg-[#11162A] rounded-xl shadow-lg p-6 border border-[#C9A24D]/40">
        

        <h1 className="text-2xl font-semibold text-[#C9A24D] mb-4">
          Nosotros
        </h1>

        <p className="text-sm text-gray-300 leading-relaxed">
          Somos un equipo enfocado en crear soluciones digitales claras,
          eficientes y bien pensadas. Creemos en el diseño sobrio,
          la tecnología bien aplicada y el valor de hacer las cosas simples,
          pero correctamente.
        </p>

        <p className="text-sm text-gray-400 leading-relaxed mt-3">
          Este proyecto es una muestra de nuestro compromiso con la calidad,
          la mejora continua y la atención al detalle en cada desarrollo.
        </p>
        {/* Botón volver */}
        <div className="absolute top-3 right-3">
          <BotonHome />
        </div>
      </section>
    </main>
  );
};

export default NosotrosPage;
