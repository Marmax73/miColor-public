// src/app/api/registerExample/route.ts
//endpoint de registro. Código de soporte. 
import { NextResponse } from "next/server";




export async function GET() {
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