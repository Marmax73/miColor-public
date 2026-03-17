// src/features/auth/services/authService.ts

export async function registerUser(formData: any) {
  const res = await fetch("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Error en registro");
  }

  return res.json();
}