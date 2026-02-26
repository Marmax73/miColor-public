import { NextResponse } from "next/server";


export function Registroexample() {
  const mockData = {
    perfil:{
      CLIENTE :{
        res: "ok"
      },
      TIENDA: {
        res : "ok"  
      }
    }
  };

  return NextResponse.json(mockData);
}
  

// export async function POST(req) {
//   try {
//     const {
//       perfil,
//       nombre,
//       apellido,
//       telefono,
//       localidad,
//       direccion,
//       cuit,
//       email,
//       password,
//     } = await req.json();

//     // 🔎 Verificar usuario existente
//     const existingUser = await prisma.user.findUnique({
//       where: { email },
//     });

//     if (existingUser) {
//       return NextResponse.json(
//         alert(`Error: ${data?.error || "Error desconocido"}`),
//         { status: 400 }
//       );
//     }


//     // 🔐 Hash contraseña
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // 🧠 Crear usuario según perfil
//     const newUser = await prisma.user.create({
//       data: {
//         perfil,
//         nombre,
//         apellido,
//         telefono,
//         localidad,
//         direccionComercial:
//           perfil === "userTienda" ? direccion : null,
//         cuit: perfil === "userTienda" ? cuit : null,
//         email,
//         password: hashedPassword,
//       },
//     });

//     return NextResponse.json(
//       {
//         success: true,
//         message: "Usuario registrado correctamente",
//         userId: newUser.id,
//       },
//       { status: 201 }
//     );

//   } catch (error) {
//     console.error("Error en register:", error);
//     return NextResponse.json(
//       { error: "Error interno del servidor" },
//       { status: 500 }
//     );
//   }
// }
