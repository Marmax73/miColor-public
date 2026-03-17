
import { AuthForm } from "@/features/auth/components/AuthForm";

export default function Page() {
  return <AuthForm tipo="TIENDA" />;
}

// Flujo de registro de tienda:
// AuthForm (UI dinámica)
//    ↓
// useAuthActions (lógica)
//    ↓
// authService (API)
//    ↓
// respuesta
//    ↓
// router.push()