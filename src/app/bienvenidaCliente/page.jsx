
"use client"

import { useAuth } from "@/features/auth/hooks/useAuth"

export default function BienvenidaCliente() {

  const { state } = useAuth()

  return (
    <main className="p-8">

      <h1 className="text-3xl">
        Bienvenido 👋
      </h1>

      {state.user && (
        <p>{state.user.email}</p>
      )}

    </main>
  )
}


// "use client";

// import { useEffect, useReducer } from "react";
// import perfilReducer, { initialState } from "@/features/perfil/perfilReducer";

// export default function BienvenidaCliente() {

//   const [state, dispatch] = useReducer(perfilReducer, initialState);

//   useEffect(() => {

//     async function fetchPerfil() {

//       dispatch({ type: "FETCH_PERFIL_REQUEST" });

//       try {

//         const res = await fetch("/api/example");
//         const data = await res.json();

//         dispatch({
//           type: "FETCH_PERFIL_SUCCESS",
//           payload: data.perfil
//         });

//       } catch (error) {

//         dispatch({
//           type: "FETCH_PERFIL_ERROR",
//           payload: "Error cargando perfil"
//         });

//       }

//     }

//     fetchPerfil();

//   }, []);

//   if (state.loading) return <p>Cargando...</p>;
//   if (state.error) return <p>{state.error}</p>;

//   return (
//     <main className="p-8">
//       <h1 className="text-3xl">Bienvenido, Cliente 👋</h1>

//       {state.perfil?.CLIENTE?.res === "ok" && (
//         <p>Perfil cliente cargado correctamente.</p>
//       )}

//       {state.perfil?.TIENDA?.res === "ok" && (
//         <p>Datos de tienda disponibles.</p>
//       )}

//     </main>
//   );
// }