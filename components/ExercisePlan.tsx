"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowLeft, CheckCircle2, Clock, Flame, RotateCcw } from "lucide-react";

export type Exercise = {
  name: string;
  sets: number;
  reps: string;
  notes?: string;
};

export type DayPlan = {
  day: string;
  focus: string;
  isRest: boolean;
  exercises: Exercise[];
};

interface ExercisePlanProps {
  title: string;
  subtitle: string;
  themeColor: "brand" | "accent";
  plan: DayPlan[];
}

export default function ExercisePlan({ title, subtitle, themeColor, plan }: ExercisePlanProps) {
  const router = useRouter();
  
  // State for completed exercises
  const [completed, setCompleted] = useState<Set<string>>(new Set());

  // Use effect to load from local storage if desired, but for now we just use state
  const toggleExercise = (day: string, exerciseName: string) => {
    const id = `${day}-${exerciseName}`;
    setCompleted(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const clearCompleted = () => {
    setCompleted(new Set());
  };
  
  const colorClasses = {
    brand: {
      text: "text-brand-500",
      bg: "bg-brand-500",
      bgLight: "bg-brand-500/10",
      borderHover: "hover:border-brand-500",
      gradient: "from-brand-600/20 to-transparent",
    },
    accent: {
      text: "text-accent-500",
      bg: "bg-accent-500",
      bgLight: "bg-accent-500/10",
      borderHover: "hover:border-accent-500",
      gradient: "from-accent-600/20 to-transparent",
    }
  };

  const theme = colorClasses[themeColor];

  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-neutral-950 pb-20">
      {/* Header */}
      <header className={`relative pt-20 pb-12 px-6 overflow-hidden bg-gradient-to-b ${theme.gradient} border-b border-neutral-900`}>
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

      {/* Plan Content */}
      <main className="max-w-5xl mx-auto px-6 mt-12">
        <motion.div 
          variants={containerVars}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          {plan.map((dayPlan, index) => (
            <motion.div 
              key={dayPlan.day} 
              variants={itemVars}
              className={`bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg ${theme.borderHover}`}
            >
              <div className={`p-6 border-b border-neutral-800 flex flex-col md:flex-row md:items-center justify-between gap-4 ${dayPlan.isRest ? 'bg-neutral-900/50' : theme.bgLight}`}>
                <div>
                  <h2 className="text-2xl font-bold text-neutral-100 flex items-center">
                    {dayPlan.day}
                    {dayPlan.isRest && <span className="ml-3 text-sm font-medium px-3 py-1 bg-neutral-800 text-neutral-400 rounded-full">Descanso</span>}
                  </h2>
                  <p className={`mt-1 font-medium ${dayPlan.isRest ? 'text-neutral-500' : theme.text}`}>
                    {dayPlan.focus}
                  </p>
                </div>
                {!dayPlan.isRest && (
                  <div className="flex gap-4 text-sm font-medium text-neutral-400">
                    <div className="flex items-center"><Clock className="w-4 h-4 mr-1" /> ~60 min</div>
                    <div className="flex items-center"><Flame className="w-4 h-4 mr-1" /> Intensa</div>
                  </div>
                )}
              </div>
              
              {!dayPlan.isRest && (
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {dayPlan.exercises.map((exercise, i) => {
                      const id = `${dayPlan.day}-${exercise.name}`;
                      const isDone = completed.has(id);
                      
                      return (
                        <div 
                          key={i} 
                          onClick={() => toggleExercise(dayPlan.day, exercise.name)}
                          className={`cursor-pointer p-4 rounded-xl border flex flex-col transition-all duration-300 ${
                            isDone 
                              ? `bg-neutral-900 border-neutral-700 opacity-60 grayscale-[50%]` 
                              : `bg-neutral-950 border-neutral-800/50 hover:border-neutral-700 hover:shadow-md`
                          }`}
                        >
                          <div className="flex items-start justify-between mb-3">
                            <h3 className={`font-semibold leading-tight pr-2 ${isDone ? 'text-neutral-500 line-through' : 'text-neutral-200'}`}>
                              {exercise.name}
                            </h3>
                            <CheckCircle2 className={`w-6 h-6 shrink-0 transition-all duration-300 ${isDone ? `${theme.text} opacity-100 scale-110` : 'text-neutral-600 opacity-40'}`} />
                          </div>
                          <div className="mt-auto flex items-center gap-3">
                            <span className={`px-2.5 py-1 rounded-md text-sm font-medium border ${isDone ? 'bg-neutral-800 border-neutral-700 text-neutral-500' : 'bg-neutral-900 border-neutral-800 text-neutral-300'}`}>
                              {exercise.sets} series
                            </span>
                            <span className={`px-2.5 py-1 rounded-md text-sm font-medium border ${isDone ? 'bg-neutral-800 border-neutral-700 text-neutral-500' : 'bg-neutral-900 border-neutral-800 text-neutral-300'}`}>
                              {exercise.reps} reps
                            </span>
                          </div>
                          {exercise.notes && (
                            <p className={`mt-3 text-xs italic ${isDone ? 'text-neutral-600' : 'text-neutral-500'}`}>
                              * {exercise.notes}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
        
        {completed.size > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 flex justify-center"
          >
            <button
              onClick={clearCompleted}
              className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 ${theme.text}`}
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Limpiar ejercicios realizados ({completed.size})
            </button>
          </motion.div>
        )}
      </main>
    </div>
  );
}
