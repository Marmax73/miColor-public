"use client";

import { useState } from "react";
import BotonHome from "@/shared/components/botonHome/botonHome";
import  useAuthActions  from "../hooks/useAuthActions";
import { authFormConfig } from "@/features/auth/components/config/authFormConfig";

type Props = {
  tipo: "CLIENTE" | "TIENDA";
};

export function AuthForm({ tipo }: Props) {

  const { register } = useAuthActions();
  const [showPassword, setShowPassword] = useState(false);

  const fields = authFormConfig[tipo];

  const initialState = fields.reduce((acc, field) => {
    acc[field.id] = "";
    return acc;
  }, {} as any);

  const [formData, setFormData] = useState({
    perfil: tipo,
    ...initialState
  });

  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await register(formData);
  };

  return (
    <>
      <div className="w-full px-4 lg:w-[30%] mx-auto">
        <form
          onSubmit={handleSubmit}
          className="border-2 border-[#DB5F7A] rounded-lg p-6 shadow-md bg-white"
        >
          <h2 className="text-2xl text-center mb-6 text-[#DB5F7A]">
            Registro {tipo.toLowerCase()}
          </h2>

          {fields.map(({ id, label, type = "text" }) => (
            <div key={id} className="mb-4">
              <label className="block text-sm mb-1">{label}</label>

              <div className="relative">
                <input
                  type={id === "password" && showPassword ? "text" : type}
                  name={id}
                  value={formData[id]}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2 pr-10"
                />

                {id === "password" && (
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2"
                  >
                    {showPassword ? "👁️" : "🙈"}
                  </button>
                )}
              </div>

              {errors[id] && (
                <p className="text-red-500 text-sm">{errors[id]}</p>
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-[#DB5F7A] text-white py-2 rounded-md"
          >
            Registrarse
          </button>
        </form>
      </div>

      <BotonHome />
    </>
  );
}