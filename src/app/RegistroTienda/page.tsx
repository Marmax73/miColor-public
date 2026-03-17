import RegistroTiendaForm from "@/features/auth/components/RegistroTiendaForm";

export default function Page() {
  return <RegistroTiendaForm />;
}
// Flujo de registro de cliente:
// AuthForm (UI dinámica)
//    ↓
// useAuthActions (lógica)
//    ↓
// authService (API)
//    ↓
// respuesta
//    ↓
// router.push()