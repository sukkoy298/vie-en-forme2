import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vie En Forme | Planes de Entrenamiento",
  description: "Encuentra tu plan de entrenamiento ideal para cada día de la semana.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.className} h-full antialiased dark`}>
      <body className="min-h-screen bg-neutral-950 text-neutral-50 flex flex-col selection:bg-indigo-500/30">
        {children}
      </body>
    </html>
  );
}
