import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'

export const metadata: Metadata = {
  title: "UNELLEZ - Portal Institucional",
  description: "Universidad Nacional Experimental de los Llanos Occidentales Ezequiel Zamora",
};

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-slate-800">
        {children}
      </body>
    </html>
  );
}
