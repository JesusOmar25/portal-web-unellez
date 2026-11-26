'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { iniciarSesion } from '@/services/auth.service';

/**
 * Formulario de Inicio de Sesión (Client Component)
 *
 * Lleva `'use client'` porque gestiona el estado de los campos (`usuario`, `password`),
 * la visibilidad de la contraseña, mensajes de error/éxito y el envío asíncrono
 * hacia `auth.service.ts` sin recargar la página.
 */
export default function LoginForm() {
  const router = useRouter();

  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [exito, setExito] = useState<string | null>(null);
  const [avisoRecuperacion, setAvisoRecuperacion] = useState(false);

  async function manejarEnvio(e: FormEvent<HTMLFormElement>) {
    // Evita el comportamiento por defecto del navegador (recargar la página con POST)
    e.preventDefault();
    setError(null);
    setExito(null);
    setAvisoRecuperacion(false);

    if (!usuario.trim() || !password) {
      setError('Debes completar tu usuario y contraseña para continuar.');
      return;
    }

    setCargando(true);
    try {
      const resultado = await iniciarSesion({ usuario, password });

      if (!resultado.ok) {
        setError(resultado.mensaje ?? 'Credenciales inválidas. Intenta nuevamente.');
        return;
      }

      setExito(resultado.mensaje ?? 'Acceso concedido. Redirigiendo...');
      setTimeout(() => {
        router.push('/');
      }, 700);
    } catch {
      setError('No se pudo conectar con el servidor de autenticación. Intenta más tarde.');
    } finally {
      setCargando(false);
    }
  }

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* Identidad visual en móvil (oculta en escritorio donde aparece el panel izquierdo) */}
      <div className="lg:hidden flex justify-center mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 group focus:outline-hidden"
          aria-label="Ir a página de inicio UNELLEZ"
        >
          <div className="w-10 h-10 flex items-center justify-center text-[#F08324]">
            <svg width="42" height="42" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.5963 0L22.6218 10.946C22.6218 10.946 22.5325 12.471 24.0204 12.471C25.7328 12.471 28.4049 12.4684 28.4049 12.4684V13.7619L21.43 13.7723C21.43 13.7723 19.0029 13.9909 19.0029 10.9382C19.0029 7.88549 19.008 1.86858 19.008 1.86858L22.5937 0H22.5963Z" fill="#F08324" />
              <path d="M17.8546 2.4904V13.4364C17.8546 13.4364 17.7856 15.0473 19.4139 15.0473H33.083V16.2445L16.8848 16.2575C16.8848 16.2575 14.4424 16.424 14.4424 13.3635C14.4424 10.8808 14.4424 4.27569 14.4424 4.27569L17.8571 2.48779L17.8546 2.4904Z" fill="#F08324" />
              <path d="M13.2045 4.89762V16.1221C13.2045 16.1221 13.1483 17.4754 15.019 17.4754C16.8897 17.4754 37.669 17.4832 37.669 17.4832V18.7402H12.2398C12.2398 18.7402 9.58813 18.8313 9.58813 15.6484C9.58813 13.9881 9.59834 6.78441 9.59834 6.78441L13.2019 4.89502L13.2045 4.89762Z" fill="#F08324" />
              <path d="M8.61366 7.30762L8.62387 17.9517C8.62387 17.9517 8.64939 19.75 10.9361 19.75C12.8731 19.75 42.4291 19.7344 42.4291 19.7344V21.1996L7.58261 21.2022C7.58261 21.2022 4.79825 21.0669 4.7906 17.5067C4.78549 14.8418 4.7906 9.29591 4.7906 9.29591L8.61111 7.31022L8.61366 7.30762Z" fill="#F08324" />
              <path d="M3.61123 9.78516V20.8639C3.61123 20.8639 3.58827 22.1417 5.54318 22.1443C7.6844 22.1443 41.949 22.1287 41.949 22.1287C41.949 22.1287 45.0779 22.3993 45.0779 25.2673V33.8372L41.6836 35.6277V24.9732C41.6836 24.9732 41.7015 23.5574 40.2595 23.5574C39.2106 23.5574 2.97831 23.5678 2.97831 23.5678C2.97831 23.5678 0 23.5861 0 21.3271V11.6772L3.61379 9.78776L3.61123 9.78516Z" fill="#F08324" />
              <path d="M36.4542 38.5789L36.444 27.357C36.444 27.357 36.5588 26.1443 35.0403 26.1443H2.59277V24.7285H37.6741C37.6741 24.7285 40.2849 24.8144 40.2849 28.0415V36.5307L36.4567 38.5763L36.4542 38.5789Z" fill="#F08324" />
              <path d="M22.6345 45.9313L22.6116 35.0711C22.6116 35.0711 22.7673 33.442 21.0497 33.442H16.8106L16.803 32.1069L23.1424 32.1147C23.1424 32.1147 26.2075 32.0757 26.2075 35.1076V44.0237L22.6345 45.9313Z" fill="#F08324" />
              <path d="M27.0218 43.5967V32.1145C27.0218 32.1145 27.0473 30.8419 25.8299 30.8445C24.6968 30.8445 12.0103 30.8445 12.0103 30.8445V29.8062H28.3846C28.3846 29.8062 28.3846 29.8062 28.3871 29.8062C28.456 29.8114 30.6304 30.0091 30.6304 32.4086V41.6344L27.0218 43.5993V43.5967Z" fill="#F08324" />
              <path d="M31.8633 41.0178V29.9729C31.8633 29.9729 31.9143 28.6248 30.0436 28.6248C28.1729 28.6248 7.39111 28.617 7.39111 28.617V27.3704L32.9684 27.3652C32.9684 27.3652 35.472 27.4225 35.472 30.254C35.472 31.9039 35.472 39.0894 35.472 39.0894L31.8633 41.0152V41.0178Z" fill="#F08324" />
            </svg>
          </div>
          <span className="font-['Inter'] text-2xl font-black tracking-tight text-[#F08324]">
            UNELLEZ
          </span>
        </Link>
      </div>

      {/* Título principal */}
      <h1 className="text-2xl sm:text-3xl font-semibold text-[#F08324] text-center mb-8">
        Iniciar sesión
      </h1>

      <form onSubmit={manejarEnvio} className="space-y-5" noValidate>
        {/* Campo Usuario */}
        <div>
          <label
            htmlFor="usuario"
            className="block text-sm font-medium text-gray-700 mb-1.5 ml-1"
          >
            Usuario
          </label>
          <input
            id="usuario"
            name="usuario"
            type="text"
            autoComplete="username"
            required
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="ejem: pepitoperez"
            disabled={cargando}
            className="w-full rounded-full border border-gray-200 bg-white px-5 py-3 text-sm text-gray-800 placeholder:text-gray-400 shadow-sm focus:border-[#F08324] focus:outline-hidden focus:ring-2 focus:ring-[#F08324]/25 transition-all disabled:bg-gray-50 disabled:opacity-70"
          />
        </div>

        {/* Campo Contraseña */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1.5 ml-1"
          >
            Contraseña
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={mostrarPassword ? 'text' : 'password'}
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              disabled={cargando}
              className="w-full rounded-full border border-gray-200 bg-white pl-5 pr-12 py-3 text-sm text-gray-800 placeholder:text-gray-400 shadow-sm focus:border-[#F08324] focus:outline-hidden focus:ring-2 focus:ring-[#F08324]/25 transition-all disabled:bg-gray-50 disabled:opacity-70"
            />
            <button
              type="button"
              onClick={() => setMostrarPassword((prev) => !prev)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-[#F08324] transition-colors cursor-pointer"
              aria-label={mostrarPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            >
              {mostrarPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mensaje de error */}
        {error && (
          <div
            role="alert"
            className="rounded-2xl bg-red-50 border border-red-200 px-4 py-3 text-xs sm:text-sm text-red-700"
          >
            {error}
          </div>
        )}

        {/* Mensaje de éxito */}
        {exito && (
          <div
            role="status"
            className="rounded-2xl bg-emerald-50 border border-emerald-200 px-4 py-3 text-xs sm:text-sm text-emerald-700"
          >
            {exito}
          </div>
        )}

        {/* Botón Acceder y enlace inferior alineados según Figma */}
        <div className="pt-2 flex flex-col items-center sm:items-end">
          <div className="flex flex-col items-center gap-3 w-full sm:w-auto">
            <button
              type="submit"
              disabled={cargando}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#F08324] hover:bg-[#d9721b] active:bg-[#c26111] text-white font-medium px-10 py-3 text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer disabled:opacity-65 disabled:cursor-not-allowed"
            >
              {cargando && <Loader2 className="w-4 h-4 animate-spin" />}
              <span>{cargando ? 'Accediendo...' : 'Acceder'}</span>
            </button>

            <button
              type="button"
              onClick={() => setAvisoRecuperacion((prev) => !prev)}
              className="text-xs text-gray-500 hover:text-[#F08324] transition-colors cursor-pointer"
            >
              ¿Olvidó su contraseña?
            </button>
          </div>
        </div>

        {/* Aviso institucional al solicitar recuperación */}
        {avisoRecuperacion && (
          <p className="rounded-2xl bg-orange-50 border border-orange-100 px-4 py-3 text-xs text-slate-600 text-center">
            Para restablecer tu clave de operador, comunícate con soporte técnico de{' '}
            <span className="font-semibold text-[#F08324]">DITED</span>.
          </p>
        )}
      </form>
    </div>
  );
}
