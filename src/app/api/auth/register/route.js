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
  

