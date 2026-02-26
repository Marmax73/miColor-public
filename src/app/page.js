import Link from "next/link";
export default function HomePage() {
  return (
    <>
      <section className="py-12">
        <div className="bg-[#0B0F1A] z-10 rounded-lg p-1 shadow-md w-full sm:w-auto">
          <div className="border border-[#C9A24D] rounded-lg w-full p-0">

            {/* CONTENEDOR DE IMAGEN */}
            <div className="h-[95vh] sm:h-auto w-full overflow-hidden rounded-lg">
              <img
                src="imagenes/MujerDePortada.webp"
                alt="Portada"
                className="w-full h-full object-cover shadow-md"
              />
            </div>

            <p className="mt-1 mb-0 p-1 text-white rounded-lg shadow-md text-center">
              ¡Bienvenida a la mejor app de estética personal!
            </p>
            <section className="py-12 items-center text-center">
        <Link
          href="./comenzar"
          className="inline-block bg-[#C9A24D] border border-[#9F7C32] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:scale-110 transition duration-300"
        >
          Comenzar
        </Link>
      </section>
          </div>
        </div>
      </section>

      

    </>

  );
}
