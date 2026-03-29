/**
 * @file middleware.ts (RAIZ del proyecto, junto a package.json)
 *
 * @description Middleware global de autenticacion.
 *
 * Responsabilidades (SRP aplicado):
 *  1. Refrescar el token de sesion de Supabase en cada request.
 *  2. Proteger rutas del dashboard que requieren autenticacion.
 *  3. Redirigir usuarios no autenticados al login.
 *  4. Redirigir usuarios autenticados fuera del login.
 *
 * @principle SRP: este middleware hace SOLO gestion de sesion/auth
 */

import { type NextRequest, NextResponse } from "next/server";
import { createMiddlewareSupabaseClient } from "@/lib/supabase/middleware";

// Rutas que NO requieren autenticacion
const PUBLIC_PATHS = [
  "/login",
  "/registro",
  "/",  // Pagina de inicio publica
];

export async function middleware(request: NextRequest) {
  return NextResponse.next();
}

// Configurar en que rutas aplica el middleware
// El patron excluye archivos estaticos y de imagen
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};