"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Dumbbell, Activity, ChevronRight } from "lucide-react";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex-1 flex flex-col items-center justify-center p-6 sm:p-12 md:p-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-neutral-950">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500">
          Vie En Forme
        </h1>
        <p className="text-xl md:text-2xl text-neutral-400 font-medium max-w-2xl mx-auto">
          Selecciona tu plan de entrenamiento y transforma tu cuerpo hoy.
        </p>
      </motion.div>

      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Card Hombre */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button
            onClick={() => router.push("/hombre")}
            className="group w-full relative flex flex-col items-center p-12 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-brand-500 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="p-6 bg-brand-500/10 rounded-full mb-8 group-hover:scale-110 group-hover:bg-brand-500/20 transition-all duration-500">
              <Dumbbell className="w-16 h-16 text-brand-500" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-neutral-100 group-hover:text-white transition-colors">
              Plan para Hombre
            </h2>
            <p className="text-neutral-400 mb-8 group-hover:text-neutral-300 transition-colors">
              Enfocado en hipertrofia, fuerza en tren superior y desarrollo muscular equilibrado.
            </p>
            <div className="flex items-center text-brand-500 font-semibold group-hover:translate-x-2 transition-transform duration-300">
              Ver rutina <ChevronRight className="w-5 h-5 ml-1" />
            </div>
          </button>
        </motion.div>

        {/* Card Mujer */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button
            onClick={() => router.push("/mujer")}
            className="group w-full relative flex flex-col items-center p-12 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-accent-500 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-accent-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="p-6 bg-accent-500/10 rounded-full mb-8 group-hover:scale-110 group-hover:bg-accent-500/20 transition-all duration-500">
              <Activity className="w-16 h-16 text-accent-500" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-neutral-100 group-hover:text-white transition-colors">
              Plan para Mujer
            </h2>
            <p className="text-neutral-400 mb-8 group-hover:text-neutral-300 transition-colors">
              Enfocado en tonificación, glúteos, piernas y un core fuerte y definido.
            </p>
            <div className="flex items-center text-accent-500 font-semibold group-hover:translate-x-2 transition-transform duration-300">
              Ver rutina <ChevronRight className="w-5 h-5 ml-1" />
            </div>
          </button>
        </motion.div>
      </div>
    </main>
  );
}
