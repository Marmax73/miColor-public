-- CreateEnum
CREATE TYPE "Perfil" AS ENUM ('CLIENTE', 'TIENDA');

-- CreateEnum
CREATE TYPE "TipoMedia" AS ENUM ('FOTO', 'VIDEO');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "perfil" "Perfil" NOT NULL DEFAULT 'CLIENTE',
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "localidad" TEXT NOT NULL,
    "direccionComercial" TEXT,
    "cuit" TEXT,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Multimedia" (
    "id" SERIAL NOT NULL,
    "tipo" "TipoMedia" NOT NULL,
    "url" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Multimedia_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Multimedia" ADD CONSTRAINT "Multimedia_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
