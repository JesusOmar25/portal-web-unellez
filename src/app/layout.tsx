import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UNELLEZ - Portal Institucional",
  description: "Universidad Nacional Experimental de los Llanos Occidentales Ezequiel Zamora",
};

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
