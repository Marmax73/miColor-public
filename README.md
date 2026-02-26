VIDRIERA - APLICACIÓN WEB FULL STACK

Aplicación web full stack desarrollada con arquitectura moderna basada en Next.js (App Router), Prisma ORM y PostgreSQL. Implementa autenticación con JWT, control de roles y despliegue en entorno productivo.

🌐 Demo en producción

https://mi-color-ojffsoqr4-marcelo-martinezs-projects-e96e9b17.vercel.app/

ARQUITECTURA

La aplicación sigue una arquitectura full stack integrada:

Frontend: Next.js (App Router) + React

Backend: API Routes (Next.js)

Base de datos: PostgreSQL (Neon)

ORM: Prisma

Autenticación: JWT (JSON Web Tokens)

Deploy: Vercel

Estilos: TailwindCSS

El proyecto utiliza renderizado híbrido (SSR + Client Components) y manejo de estado en cliente para autenticación y navegación condicional.

AUTENTICACIÓN Y CONTROL DE ACCESO

Registro y login mediante API segura

Generación de token JWT firmado con clave secreta

Persistencia del token en cliente

Sistema de roles:

CLIENTE

TIENDA

Redirección condicional según perfil de usuario

 MODELADO DE BASE DE DATOS

La base de datos está gestionada con Prisma ORM.

Esquema tipado

Migraciones versionadas

Uso de enums para control de roles

Integración con Neon (PostgreSQL serverless)

⚙️ Flujo de Desarrollo

Migraciones gestionadas con Prisma

Variables de entorno para credenciales y JWT

Separación clara entre lógica de API y componentes UI

Uso de use client para control de renderizado en App Router

Manejo de hydration y SSR