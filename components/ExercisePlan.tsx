"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowLeft, CheckCircle2, Clock, Flame, RotateCcw, BarChart3, Save, Check, Calendar, ChevronDown, ChevronUp } from "lucide-react";

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

const STORAGE_KEY = "fitlife-progress";

type WeekData = {
  completed: string[];
  actualSets: Record<string, number>;
};

function getWeekKey(): string {
  const now = new Date();
  const day = now.getDay();
  const diff = now.getDate() - day + (day === 0 ? -6 : 1);
  const monday = new Date(now);
  monday.setDate(diff);
  monday.setHours(0, 0, 0, 0);
  return monday.toISOString().split("T")[0];
}

function getWeekRange(): string {
  const now = new Date();
  const day = now.getDay();
  const diff = now.getDate() - day + (day === 0 ? -6 : 1);
  const monday = new Date(now);
  monday.setDate(diff);
  const sunday = new Date(monday);
  sunday.setDate(sunday.getDate() + 6);
  const opts: Intl.DateTimeFormatOptions = { day: "numeric", month: "long" };
  return `${monday.toLocaleDateString("es-ES", opts)} - ${sunday.toLocaleDateString("es-ES", opts)}`;
}

function loadProgress(): Record<string, WeekData> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveProgress(data: Record<string, WeekData>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch { /* quota exceeded or private mode */ }
}

export default function ExercisePlan({ title, subtitle, themeColor, plan }: ExercisePlanProps) {
  const router = useRouter();
  const weekKey = getWeekKey();

  const [progress, setProgress] = useState<Record<string, WeekData>>({});
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [actualSets, setActualSets] = useState<Record<string, number>>({});
  const [showSavedFeedback, setShowSavedFeedback] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [expandedHistoryWeek, setExpandedHistoryWeek] = useState<string | null>(null);

  useEffect(() => {
    const data = loadProgress();
    setProgress(data);
    const week = data[weekKey];
    if (week) {
      setCompleted(new Set(week.completed));
      setActualSets(week.actualSets);
    }
  }, [weekKey]);

  const persist = useCallback((comp: Set<string>, sets: Record<string, number>) => {
    setProgress(prev => {
      const next = { ...prev, [weekKey]: { completed: Array.from(comp), actualSets: sets } };
      saveProgress(next);
      return next;
    });
  }, [weekKey]);

  const toggleExercise = (day: string, exerciseName: string) => {
    setCompleted(prev => {
      const next = new Set(prev);
      const id = `${day}-${exerciseName}`;
      if (next.has(id)) next.delete(id);
      else next.add(id);
      persist(next, actualSets);
      return next;
    });
  };

  const handleActualSets = (day: string, exerciseName: string, value: number) => {
    const id = `${day}-${exerciseName}`;
    setActualSets(prev => {
      const next = { ...prev, [id]: value };
      persist(completed, next);
      return next;
    });
  };

  const handleSaveProgress = () => {
    persist(completed, actualSets);
    setShowSavedFeedback(true);
    setTimeout(() => setShowSavedFeedback(false), 2000);
  };

  const clearCompleted = () => {
    setCompleted(new Set());
    setActualSets({});
    persist(new Set(), {});
  };

  function groupByDay(items: string[]): [string, string[]][] {
    const map = new Map<string, string[]>();
    for (const id of items) {
      const idx = id.indexOf("-");
      const day = id.slice(0, idx);
      const exercise = id.slice(idx + 1);
      if (!map.has(day)) map.set(day, []);
      map.get(day)!.push(exercise);
    }
    return Array.from(map.entries());
  }

  function formatWeekFromKey(weekKey: string): string {
    const [y, m, d] = weekKey.split("-").map(Number);
    const monday = new Date(y, m - 1, d);
    const sunday = new Date(monday);
    sunday.setDate(sunday.getDate() + 6);
    const opts: Intl.DateTimeFormatOptions = { day: "numeric", month: "long" };
    return `${monday.toLocaleDateString("es-ES", opts)} - ${sunday.toLocaleDateString("es-ES", opts)}`;
  }

  const historyWeeks = Object.keys(progress).filter(k => k !== weekKey).sort().reverse();
  const totalExercises = plan.reduce((acc, d) => acc + (d.isRest ? 0 : d.exercises.length), 0);
  const completedCount = completed.size;
  const totalPlannedSets = plan.reduce((acc, d) => acc + (d.isRest ? 0 : d.exercises.reduce((s, e) => s + e.sets, 0)), 0);
  const totalActualSets = Object.values(actualSets).reduce((acc, v) => acc + (v || 0), 0);

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
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-neutral-950 pb-20">
      <header className={`relative pt-20 pb-12 px-6 overflow-hidden bg-gradient-to-b ${theme.gradient} border-b border-neutral-900`}>
        <div className="max-w-5xl mx-auto">
          <button
            onClick={() => router.back()}
            className="flex items-center text-neutral-400 hover:text-neutral-100 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Volver atrás
          </button>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-white">
              {title}
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mb-6">
              {subtitle}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className={`flex items-center px-4 py-2 rounded-full ${theme.bgLight} border border-neutral-800`}>
                <BarChart3 className={`w-4 h-4 mr-2 ${theme.text}`} />
                <span className="text-neutral-300">
                  Semana del <span className="text-neutral-100 font-medium">{getWeekRange()}</span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 mt-12">
        {/* Progress Summary */}
        {(completedCount > 0 || totalActualSets > 0) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-8 p-4 rounded-xl ${theme.bgLight} border border-neutral-800`}
          >
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <span className="text-neutral-400">
                Ejercicios: <span className={`font-semibold ${theme.text}`}>{completedCount}/{totalExercises}</span>
              </span>
              <span className="text-neutral-400">
                Series planificadas: <span className="font-semibold text-neutral-200">{totalPlannedSets}</span>
              </span>
              {totalActualSets > 0 && (
                <span className="text-neutral-400">
                  Series realizadas: <span className={`font-semibold ${theme.text}`}>{totalActualSets}</span>
                </span>
              )}
            </div>
          </motion.div>
        )}

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
                      const actual = actualSets[id];

                      return (
                        <div
                          key={i}
                          className={`p-4 rounded-xl border flex flex-col transition-all duration-300 ${
                            isDone
                              ? `bg-neutral-900 border-neutral-700 opacity-60 grayscale-[50%]`
                              : `bg-neutral-950 border-neutral-800/50 hover:border-neutral-700 hover:shadow-md`
                          }`}
                        >
                          <div className="flex items-start justify-between mb-3">
                            <h3 className={`font-semibold leading-tight pr-2 ${isDone ? 'text-neutral-500 line-through' : 'text-neutral-200'}`}>
                              {exercise.name}
                            </h3>
                            <button onClick={() => toggleExercise(dayPlan.day, exercise.name)} className="shrink-0">
                              <CheckCircle2 className={`w-6 h-6 transition-all duration-300 ${isDone ? `${theme.text} opacity-100 scale-110` : 'text-neutral-600 opacity-40 hover:opacity-70'}`} />
                            </button>
                          </div>

                          <div className="mt-auto space-y-2">
                            <div className="flex items-center gap-3">
                              <span className={`px-2.5 py-1 rounded-md text-sm font-medium border ${isDone ? 'bg-neutral-800 border-neutral-700 text-neutral-500' : 'bg-neutral-900 border-neutral-800 text-neutral-300'}`}>
                                {exercise.sets} series
                              </span>
                              <span className={`px-2.5 py-1 rounded-md text-sm font-medium border ${isDone ? 'bg-neutral-800 border-neutral-700 text-neutral-500' : 'bg-neutral-900 border-neutral-800 text-neutral-300'}`}>
                                {exercise.reps}
                              </span>
                            </div>

                            <div className="flex items-center gap-2">
                              <span className="text-xs text-neutral-500">Realizadas:</span>
                              <input
                                type="number"
                                min={0}
                                max={exercise.sets}
                                value={actual ?? ""}
                                onChange={(e) => {
                                  const val = e.target.value === "" ? 0 : Math.max(0, Math.min(exercise.sets, parseInt(e.target.value) || 0));
                                  handleActualSets(dayPlan.day, exercise.name, val);
                                }}
                                className={`w-16 px-2 py-1 text-sm rounded-md border bg-neutral-900 text-neutral-200 text-center appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none ${
                                  isDone ? 'border-neutral-700 opacity-60' : 'border-neutral-700 hover:border-neutral-500 focus:border-brand-500 focus:outline-none'
                                }`}
                                placeholder="0"
                              />
                              <span className="text-xs text-neutral-500">/ {exercise.sets}</span>
                            </div>
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
            className="mt-12 flex flex-col items-center gap-4"
          >
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={handleSaveProgress}
                className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  showSavedFeedback
                    ? 'bg-green-600/20 text-green-400 border border-green-600/50'
                    : 'bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-neutral-200'
                }`}
              >
                {showSavedFeedback ? (
                  <><Check className="w-5 h-5 mr-2" /> ¡Progreso guardado!</>
                ) : (
                  <><Save className="w-5 h-5 mr-2" /> Guardar progreso</>
                )}
              </button>
              <button
                onClick={clearCompleted}
                className="flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-neutral-400"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Limpiar progreso ({completedCount})
              </button>
            </div>
          </motion.div>
        )}

        {historyWeeks.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16"
          >
            <button
              onClick={() => setShowHistory(!showHistory)}
              className="flex items-center gap-2 text-neutral-400 hover:text-neutral-200 transition-colors mb-4"
            >
              <Calendar className="w-5 h-5" />
              <span className="font-semibold">Historial de semanas anteriores ({historyWeeks.length})</span>
              {showHistory ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {showHistory && (
              <div className="space-y-3">
                {historyWeeks.map((wk) => {
                  const weekData = progress[wk];
                  if (!weekData) return null;
                  const isExpanded = expandedHistoryWeek === wk;
                  const totalSets = Object.values(weekData.actualSets).reduce((a, b) => a + (b || 0), 0);

                  return (
                    <div
                      key={wk}
                      className="bg-neutral-900/50 border border-neutral-800 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => setExpandedHistoryWeek(isExpanded ? null : wk)}
                        className="w-full flex items-center justify-between p-4 hover:bg-neutral-800/50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${theme.bg}`} />
                          <span className="text-neutral-200 font-medium text-sm">
                            {formatWeekFromKey(wk)}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-neutral-400">
                            {weekData.completed.length} ejercicios
                          </span>
                          {totalSets > 0 && (
                            <span className="text-neutral-500">
                              {totalSets} series
                            </span>
                          )}
                          {isExpanded ? <ChevronUp className="w-4 h-4 text-neutral-500" /> : <ChevronDown className="w-4 h-4 text-neutral-500" />}
                        </div>
                      </button>

                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          className="px-4 pb-4 border-t border-neutral-800"
                        >
                          <div className="pt-3 space-y-1">
                            {weekData.completed.length === 0 ? (
                              <p className="text-neutral-500 text-sm">Sin ejercicios completados</p>
                            ) : (
                              groupByDay(weekData.completed).map(([day, exercises]) => (
                                <div key={day}>
                                  <p className="text-neutral-400 text-xs font-semibold uppercase tracking-wider mt-3 mb-1">{day}</p>
                                  {exercises.map((ex) => (
                                    <div key={ex} className="flex items-center justify-between text-sm py-1">
                                      <div className="flex items-center gap-2">
                                        <CheckCircle2 className={`w-3.5 h-3.5 ${theme.text}`} />
                                        <span className="text-neutral-300">{ex}</span>
                                      </div>
                                      {weekData.actualSets[`${day}-${ex}`] !== undefined && (
                                        <span className="text-neutral-500 text-xs">
                                          {weekData.actualSets[`${day}-${ex}`]} series
                                        </span>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              ))
                            )}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </motion.div>
        )}
      </main>
    </div>
  );
}
