'use client';

import { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';

export default function LoginModal({ onClose }) {
  const modalRef = useRef(null);
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeModal = () => {
    if (typeof onClose === "function") {
      onClose();         // Modal controlado por estado: useState()
    } else {
      router.back();     // Modal montado por ruta: link a /login
    }
  };

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('/api/auth/example');
      const data = await res.json();

      if (data?.perfil?.CLIENTE?.res === "ok") {
         if (typeof onClose === "function") {
        onClose();   // cerrar si es modal por estado
      }
        router.push('/bienvenidaCliente');
        return;
      }

      if (data?.perfil?.TIENDA?.res === "ok") {
         if (typeof onClose === "function") {
          onClose();   // cerrar si es modal por estado
        }
        router.push('/bienvenidaTienda');
        return;
      }

      if (!data.ok) {
        setError(data.message);
      }

    } catch (err) {
      setError("Error al iniciar sesión");
    }
  };

  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999]"
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className="bg-white p-6 rounded-xl w-[90%] max-w-sm shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl mb-4">Ingresar</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Contraseña"
            className="border p-2 rounded"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button className="bg-black text-white py-2 rounded hover:bg-gray-800">
            Entrar
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
}