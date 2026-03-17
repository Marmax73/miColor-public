type Field = {
  id: string;
  label: string;
  type?: string;
};

export const authFormConfig: Record<string, Field[]> = {
  CLIENTE: [
    { id: "nombre", label: "Nombre" },
    { id: "apellido", label: "Apellido" },
    { id: "telefono", label: "Teléfono" },
    { id: "localidad", label: "Localidad" },
    { id: "email", label: "Email", type: "email" },
    { id: "password", label: "Contraseña", type: "password" }
  ],
  TIENDA: [
    { id: "nombre", label: "Nombre" },
    { id: "apellido", label: "Apellido" },
    { id: "telefono", label: "Teléfono" },
    { id: "localidad", label: "Localidad" },
    { id: "direccion", label: "Dirección" },
    { id: "cuit", label: "CUIT" },
    { id: "email", label: "Email", type: "email" },
    { id: "password", label: "Contraseña", type: "password" }
  ]
};