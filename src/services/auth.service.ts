import type { CredencialesLogin, RespuestaAuth } from '@/types/cms';

/**
 * Servicio de Autenticación del Portal & CMS UNELLEZ
 *
 * Desacopla la lógica de inicio de sesión de los componentes visuales.
 * Actualmente opera con un Mock asíncrono; cuando el backend en PHP esté listo,
 * solo se debe descomentar el bloque `fetch` hacia `/api/v1/auth/login`.
 */
export async function iniciarSesion(
  credenciales: CredencialesLogin
): Promise<RespuestaAuth> {
  const usuarioLimpio = credenciales.usuario.trim();
  const password = credenciales.password;

  // Simulamos latencia de red realista (600ms) para validar estados de carga en la UI
  await new Promise((resolve) => setTimeout(resolve, 600));

  /*
  // =========================================================================
  // BLOQUE LISTO PARA CONEXIÓN CON API REST EN PHP
  // =========================================================================
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'https://api.unellez.edu.ve';

  const respuesta = await fetch(`${apiUrl}/api/v1/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      usuario: usuarioLimpio,
      password,
    }),
  });

  const data: RespuestaAuth = await respuesta.json();
  return data;
  */

  if (!usuarioLimpio) {
    return {
      ok: false,
      mensaje: 'Por favor, ingresa tu nombre de usuario institucional.',
    };
  }

  if (password.length < 6) {
    return {
      ok: false,
      mensaje: 'La contraseña debe tener al menos 6 caracteres.',
    };
  }

  return {
    ok: true,
    token: `mock-jwt-unellez-${Date.now()}`,
    usuario: {
      id: 1,
      nombre: usuarioLimpio,
      direccion: 'DITED',
      rol: 'Operador CMS',
    },
    mensaje: 'Inicio de sesión exitoso. Redirigiendo al portal...',
  };
}
