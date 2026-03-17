"use client"

import { createContext, useReducer, useContext } from "react"
import authReducer, { initialState } from "../reducers/authReducer"

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {

  const [state, dispatch] = useReducer(authReducer, initialState)

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error("useAuth debe usarse dentro de AuthProvider")
  }

  return context
}
