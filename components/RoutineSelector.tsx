"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowLeft, Sparkles, Zap, Target, ChevronRight } from "lucide-react";
import { RoutineMeta, Intensity } from "@/app/data/routines";

interface RoutineSelectorProps {
  title: string;
  subtitle: string;
  gender: "hombre" | "mujer";
  routines: RoutineMeta[];
}

const intensityIcons: Record<Intensity, React.ReactNode> = {
  "Principiante": <Sparkles className="w-10 h-10" />,
  "Intermedio": <Zap className="w-10 h-10" />,
  "Avanzado": <Target className="w-10 h-10" />,
};

const intensityColors: Record<Intensity, { gradient: string; badge: string; icon: string }> = {
  "Principiante": {
    gradient: "from-emerald-600/20 to-transparent",
    badge: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    icon: "text-emerald-400",
  },
  "Intermedio": {
    gradient: "from-amber-500/20 to-transparent",
    badge: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    icon: "text-amber-400",
  },
  "Avanzado": {
    gradient: "from-rose-600/20 to-transparent",
    badge: "bg-rose-500/20 text-rose-400 border-rose-500/30",
    icon: "text-rose-400",
  },
};

export default function RoutineSelector({ title, subtitle, gender, routines }: RoutineSelectorProps) {
  const router = useRouter();
  const themeColor = gender === "hombre" ? "brand" : "accent";
  const gradientFrom = themeColor === "brand" ? "from-brand-600/20" : "from-accent-600/20";

  return (
    <div className="min-h-screen bg-neutral-950 pb-20">
      <header className={`relative pt-20 pb-12 px-6 overflow-hidden bg-gradient-to-b ${gradientFrom} to-transparent border-b border-neutral-900`}>
        <div className="max-w-5xl mx-auto">
          <button
            onClick={() => router.push("/")}
            className="flex items-center text-neutral-400 hover:text-neutral-100 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Volver al inicio
          </button>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-white">
              {title}
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 mt-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.15 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {routines.map((routine, index) => {
            const intensity = routine.intensity;
            const colors = intensityColors[intensity];

            return (
              <motion.div
                key={routine.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  onClick={() => router.push(`/${gender}/${routine.id}`)}
                  className="group w-full h-full relative flex flex-col items-start p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all duration-500 overflow-hidden text-left"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="flex items-center justify-between w-full mb-6">
                    <div className={`p-4 rounded-xl bg-neutral-800/80 ${colors.icon} group-hover:scale-110 transition-transform duration-500`}>
                      {intensityIcons[intensity]}
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${colors.badge}`}>
                      {intensity}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-neutral-100 mb-3 group-hover:text-white transition-colors">
                    {routine.title}
                  </h2>
                  <p className="text-neutral-400 mb-6 group-hover:text-neutral-300 transition-colors flex-1">
                    {routine.description}
                  </p>

                  <div className={`flex items-center font-semibold ${themeColor === "brand" ? "text-brand-500" : "text-accent-500"} group-hover:translate-x-2 transition-transform duration-300`}>
                    Ver rutina <ChevronRight className="w-5 h-5 ml-1" />
                  </div>
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </main>
    </div>
  );
}
