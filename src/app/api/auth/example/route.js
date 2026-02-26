// src/app/api/example/route.ts

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