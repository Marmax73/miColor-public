export type PerfilState = {
  loading: boolean;
  perfil: {
    CLIENTE: { res: string } | null;
    TIENDA: { res: string } | null;
  } | null;
  error: string | null;
};

export type PerfilAction =
  | { type: "FETCH_PERFIL_REQUEST" }
  | { type: "FETCH_PERFIL_SUCCESS"; payload: PerfilState["perfil"] }
  | { type: "FETCH_PERFIL_ERROR"; payload: string };

export const initialState: PerfilState = {
  loading: false,
  perfil: null,
  error: null
};

export default function perfilReducer(
  state: PerfilState,
  action: PerfilAction
): PerfilState {

  switch (action.type) {

    case "FETCH_PERFIL_REQUEST":
      return { ...state, loading: true, error: null };

    case "FETCH_PERFIL_SUCCESS":
      return { ...state, loading: false, perfil: action.payload };

    case "FETCH_PERFIL_ERROR":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}