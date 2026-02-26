"use client";
import React, { useState } from 'react';

import BotonHome from '../components/botonHome/botonHome';
import { useRouter } from 'next/navigation';

const UserForm = () => {
    const [showPassword, setShowPassword] = useState(false);
     const router = useRouter();
     const [formData, setFormData] = useState({
       perfil: 'TIENDA',
       nombre: '',
       apellido: '',
       telefono: '',
       localidad: '',
       email: '',
       direccion: '',
       cuit: '',
       password: ''
     });
   
     const [errors, setErrors] = useState({});
   
     const handleChange = (e) => {
       const { name, value } = e.target;
       setFormData({ ...formData, [name]: value });
     };
   
     const handleSubmit = async (e) => {
         e.preventDefault();
   
         try {
           const res = await fetch("/api/auth/example");
           const data = await res.json();
   
           if (data?.perfil?.CLIENTE?.res === "ok") {
             router.push("/bienvenidaCliente");
             return;
           }
   
           if (data?.perfil?.TIENDA?.res === "ok") {
             router.push("/bienvenidaTienda");
             return;
           }
   
           console.log("Respuesta inesperada:", data);
         } catch (error) {
           console.error("Error en la petición:", error);
         }
       };
           

    return (
      <>
      <div className=" w-full px-4 lg:w-[30%] mx-auto mt-1rem mb-1rem">
      <form 
        onSubmit={handleSubmit} 
        className="border-2 border-[#DB5F7A] rounded-lg p-6 shadow-md bg-white"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-[#DB5F7A]">
          Registro tienda
        </h2>

        {[
          { id: 'nombre', label: 'Nombre' },
          { id: 'apellido', label: 'Apellido' },
          { id: 'telefono', label: 'Teléfono' },
          { id: 'localidad', label: 'Localidad' },
          { id: 'direccion', label: 'Dirección' },
          { id: 'cuit', label: 'CUIT' },
          { id: 'email', label: 'Email', type: 'email' },
          { id: 'password', label: 'Contraseña', type: 'password' },
        ].map(({ id, label, type = 'text' }) => (
          <div key={id} className="mb-4">
            <label 
              htmlFor={id} 
              className="block text-sm font-medium text-[#666666] mb-1"
            >
              {label}
            </label>

            {/* Campo especial para contraseña */}
            {id === 'password' ? (
              <div className="relative w-full">
                <input
                  type={showPassword ? 'text' : type}
                  id={id}
                  name={id}
                  value={formData[id]}
                  onChange={handleChange}
                  className="w-full border border-[#666666] rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#DB5F7A] text-[#666666]"
                  />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-[#666666]"
                >
                  {showPassword ? '👁️' : '🙈'}
                </button>
              </div>
            ) : (
              <input
              type={type}
              id={id}
              name={id}
              value={formData[id]}
              onChange={handleChange}
              className="w-full border border-[#666666] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#DB5F7A] text-[#666666]"
              />
            )}

            {errors[id] && (
              <p className="text-sm text-red-500 mt-1">{errors[id]}</p>
            )}
          </div>
        ))}

        <button 
          type="submit"
          className="w-full bg-[#DB5F7A] text-white py-2 rounded-md hover:bg-[#c44e6a] transition-colors"
        >
          Registrarse
        </button>
      </form>
    </div>
        <BotonHome />
    </>
    );
};

export default UserForm;
