'use client';
import { Camera } from 'lucide-react';



const handleOpenCamera = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    // Aquí podrías pasar el stream a un <video> para mostrarlo
    console.log("Cámara abierta", stream);
  } catch (err) {
    console.error("No se pudo abrir la cámara", err);
  }
};


export default function CameraButton({ onOpen }) {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <p className='textoIndictivo text-[#0B0F1A]'>Comienza tomando una foto de tu rotro</p>
    <button
      onClick = {handleOpenCamera}
      className="flex items-center bg-[#0B0F1A] gap-2 text-white px-4 py-2 rounded-2xl shadow-md hover:bg-[#12182A] transition "
    >
      <Camera size={20} />
      <span>Abrir cámara</span>
    </button>
    </div>

  );
}
