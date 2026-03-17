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

// pipeline de ejemplo para cargar datos de perfil con useReducer
// LoginForm
//    ↓
// dispatch(LOGIN_REQUEST)
//    ↓
// authService.login()
//    ↓
// dispatch(LOGIN_SUCCESS)
//    ↓
// authReducer
//    ↓
// AuthContext
//    ↓
// estado global actualizado
//    ↓
// toda la app re-renderiza