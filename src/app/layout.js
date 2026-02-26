import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import { Playfair_Display } from "next/font/google";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-playfair",
  display: "swap",
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "miColor",
  description: "App creada con Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />

        <main className="flex-1 mx-auto w-full max-w-7xl px-4 border-t border-gray-200">
          {children}
        </main>

        <footer className="mt-auto min-h-[64px] flex items-center justify-center mx-auto w-full max-w-7xl text-[#0B0F1A] px-4 border-t border-gray-200 py-4 text-center text-sm">
          &copy; {new Date().getFullYear()} Vidriera. All rights reserved. Marcelo Martínez.
          Esta es una aplicación de muestra. No devuelve funcionalidad práctica alguna.
        </footer>
      </body>

    </html>
  );
}
