  
"use client"
import Link from "next/link";
import BotonHome from "../components/botonHome/botonHome";



export default function ComenzarPage() {
    return (
    <>
      <section className="py-12">
            <div className="contornointernoOro border border-[#C9A24D] rounded-lg w-full p-0"> 
                <p className="mt-4 text-muted-foreground bg-F4F1EC  p-1 mt-1 mb-0 text-brown rounded-lg shadow-md text-center">
                  ¡Hola! Esta página está en contrucción; mientras tanto, puedes registrarte en la app haciendo click en el botón de <span className="italic">Registro</span> la barra de navegación! ¡Gracias por tu paciencia! 🙌
                </p>
            </div>
            <div className="text-center mt-2">
              <h3 className="mb-3 p-2 text-brown text-lg">Ya estás registrada! Da click al botón!</h3>
              <div className="mt-3">
              <Link href="/login" className="text-brown text-lg bg-[var(--color-accent-rosedos)] border rounded-lg p-2 mt-3" type="button">
                Ingresar
              </Link>
              </div>

            </div>
       </section>
       <section>
        <BotonHome />
       </section>
    </>
  );
}
        
            
          
        

