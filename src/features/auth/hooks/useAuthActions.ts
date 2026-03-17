"use client";

import { useRouter } from "next/navigation";
import { registerUser } from "../services/authService";

export default function useAuthActions() {

  const router = useRouter();

  const register = async (formData: any) => {
    try {

      const data = await registerUser(formData);

      if (data?.perfil?.CLIENTE?.res === "ok") {
        router.push("/bienvenidaCliente");
        return;
      }

      if (data?.perfil?.TIENDA?.res === "ok") {
        router.push("/bienvenidaTienda");
        return;
      }

      console.log("Respuesta inesperada:", data);

    } catch (error) {
      console.error("Error en registro:", error);
    }
  };

  return { register };
}