import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import LoginForm from '@/components/auth/LoginForm';

export const metadata: Metadata = {
  title: 'Iniciar sesión | Portal UNELLEZ',
  description:
    'Acceso al sistema institucional y gestión de contenidos de la Universidad Nacional Experimental de los Llanos Occidentales Ezequiel Zamora.',
};

/**
 * Pantalla de Inicio de Sesión (/login) - Server Component
 *
 * Estructura de pantalla completa dividida en 12 columnas en escritorio:
 * - Izquierda (7 cols, oculta en móvil): Tarjeta visual con aula universitaria,
 *   filtro cálido naranja institucional e identidad UNELLEZ en blanco puro.
 * - Derecha (5 cols, 12 cols en móvil): Formulario interactivo `<LoginForm />`.
 */
export default function LoginPage() {
  return (
    <main className="min-h-screen w-full bg-white grid grid-cols-1 lg:grid-cols-12">
      {/* Columna Izquierda: Panel Visual (7 columnas en escritorio, oculta en móvil) */}
      <section
        aria-label="Identidad visual UNELLEZ"
        className="hidden lg:block lg:col-span-7 p-4 lg:p-6"
      >
        <div className="relative h-full w-full min-h-[calc(100vh-3rem)] rounded-3xl overflow-hidden shadow-sm">
          {/* Imagen de fondo de estudiantes en aula */}
          <Image
            src="/images/hero-aula-unellez.jpg"
            alt="Estudiantes en aula de clases de la UNELLEZ"
            fill
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover object-center pointer-events-none"
          />

          {/* Filtro cálido naranja institucional + oscurecimiento sutil para contraste */}
          <div
            className="absolute inset-0 bg-[#F08324]/45 mix-blend-multiply pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/15 to-[#F08324]/25 pointer-events-none"
            aria-hidden="true"
          />

          {/* Isotipo y Logotipo UNELLEZ centrado en blanco puro */}
          <div className="relative z-10 h-full w-full flex items-center justify-center p-10">
            <Link
              href="/"
              className="inline-flex items-center gap-4 sm:gap-5 group focus:outline-hidden"
              aria-label="Volver al inicio del Portal UNELLEZ"
            >
              <svg
                className="w-20 h-20 xl:w-24 xl:h-24 transition-transform duration-200 group-hover:scale-105 drop-shadow-xs"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M22.5963 0L22.6218 10.946C22.6218 10.946 22.5325 12.471 24.0204 12.471C25.7328 12.471 28.4049 12.4684 28.4049 12.4684V13.7619L21.43 13.7723C21.43 13.7723 19.0029 13.9909 19.0029 10.9382C19.0029 7.88549 19.008 1.86858 19.008 1.86858L22.5937 0H22.5963Z" fill="#FFFFFF" />
                <path d="M17.8546 2.4904V13.4364C17.8546 13.4364 17.7856 15.0473 19.4139 15.0473H33.083V16.2445L16.8848 16.2575C16.8848 16.2575 14.4424 16.424 14.4424 13.3635C14.4424 10.8808 14.4424 4.27569 14.4424 4.27569L17.8571 2.48779L17.8546 2.4904Z" fill="#FFFFFF" />
                <path d="M13.2045 4.89762V16.1221C13.2045 16.1221 13.1483 17.4754 15.019 17.4754C16.8897 17.4754 37.669 17.4832 37.669 17.4832V18.7402H12.2398C12.2398 18.7402 9.58813 18.8313 9.58813 15.6484C9.58813 13.9881 9.59834 6.78441 9.59834 6.78441L13.2019 4.89502L13.2045 4.89762Z" fill="#FFFFFF" />
                <path d="M8.61366 7.30762L8.62387 17.9517C8.62387 17.9517 8.64939 19.75 10.9361 19.75C12.8731 19.75 42.4291 19.7344 42.4291 19.7344V21.1996L7.58261 21.2022C7.58261 21.2022 4.79825 21.0669 4.7906 17.5067C4.78549 14.8418 4.7906 9.29591 4.7906 9.29591L8.61111 7.31022L8.61366 7.30762Z" fill="#FFFFFF" />
                <path d="M3.61123 9.78516V20.8639C3.61123 20.8639 3.58827 22.1417 5.54318 22.1443C7.6844 22.1443 41.949 22.1287 41.949 22.1287C41.949 22.1287 45.0779 22.3993 45.0779 25.2673V33.8372L41.6836 35.6277V24.9732C41.6836 24.9732 41.7015 23.5574 40.2595 23.5574C39.2106 23.5574 2.97831 23.5678 2.97831 23.5678C2.97831 23.5678 0 23.5861 0 21.3271V11.6772L3.61379 9.78776L3.61123 9.78516Z" fill="#FFFFFF" />
                <path d="M36.4542 38.5789L36.444 27.357C36.444 27.357 36.5588 26.1443 35.0403 26.1443H2.59277V24.7285H37.6741C37.6741 24.7285 40.2849 24.8144 40.2849 28.0415V36.5307L36.4567 38.5763L36.4542 38.5789Z" fill="#FFFFFF" />
                <path d="M22.6345 45.9313L22.6116 35.0711C22.6116 35.0711 22.7673 33.442 21.0497 33.442H16.8106L16.803 32.1069L23.1424 32.1147C23.1424 32.1147 26.2075 32.0757 26.2075 35.1076V44.0237L22.6345 45.9313Z" fill="#FFFFFF" />
                <path d="M27.0218 43.5967V32.1145C27.0218 32.1145 27.0473 30.8419 25.8299 30.8445C24.6968 30.8445 12.0103 30.8445 12.0103 30.8445V29.8062H28.3846C28.3846 29.8062 28.3846 29.8062 28.3871 29.8062C28.456 29.8114 30.6304 30.0091 30.6304 32.4086V41.6344L27.0218 43.5993V43.5967Z" fill="#FFFFFF" />
                <path d="M31.8633 41.0178V29.9729C31.8633 29.9729 31.9143 28.6248 30.0436 28.6248C28.1729 28.6248 7.39111 28.617 7.39111 28.617V27.3704L32.9684 27.3652C32.9684 27.3652 35.472 27.4225 35.472 30.254C35.472 31.9039 35.472 39.0894 35.472 39.0894L31.8633 41.0152V41.0178Z" fill="#FFFFFF" />
              </svg>

              <span className="font-['Inter'] text-5xl xl:text-6xl font-black tracking-tight text-white drop-shadow-xs">
                UNELLEZ
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Columna Derecha: Formulario de Acceso (5 cols en escritorio, 12 cols en móvil) */}
      <section
        aria-label="Formulario de inicio de sesión"
        className="col-span-1 lg:col-span-5 flex flex-col justify-center items-center px-6 py-12 sm:px-12"
      >
        <LoginForm />
      </section>
    </main>
  );
}
