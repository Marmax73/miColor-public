export type AuthState = {
  user: null | {
    email: string
  }
  loading: boolean
  error: string | null
}

export type AuthAction =
  | { type: "LOGIN_REQUEST" }
  | { type: "LOGIN_SUCCESS"; payload: { email: string } }
  | { type: "LOGIN_ERROR"; payload: string }
  | { type: "LOGOUT" }

export const initialState: AuthState = {
  user: null,
  loading: false,
  error: null
}

export default function authReducer(
  state: AuthState,
  action: AuthAction
): AuthState {

  switch (action.type) {

    case "LOGIN_REQUEST":
      return { ...state, loading: true }

    case "LOGIN_SUCCESS":
      return { ...state, loading: false, user: action.payload }

    case "LOGIN_ERROR":
      return { ...state, loading: false, error: action.payload }

    case "LOGOUT":
      return { ...state, user: null }

    default:
      return state
  }
}