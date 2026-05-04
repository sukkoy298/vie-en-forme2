import ExercisePlan, { DayPlan } from "@/components/ExercisePlan";

export default function MujerPage() {
  const planMujer: DayPlan[] = [
    {
      day: "Lunes",
      focus: "Cuádriceps y Glúteos",
      isRest: false,
      exercises: [
        { name: "Sentadilla Libre", sets: 4, reps: "10-12", notes: "Baja profundo manteniendo la postura" },
        { name: "Zancadas con mancuernas", sets: 3, reps: "10-12", notes: "Da un paso largo hacia adelante. La distancia debe ser suficiente para que, al bajar, ambas rodillas formen un ángulo de aproximadamente 90 grados." },
        { name: "Hip Thrust", sets: 4, reps: "10-12", notes: "Sostén 2 seg. arriba" },
        { name: "Extensiones de Cuádriceps", sets: 3, reps: "15-20", notes: "Al fallo" },
        { name: "Elevación de Talones", sets: 3, reps: "15-20" },
      ]
    },
    {
      day: "Martes",
      focus: "Tren Superior (Espalda, Hombros, Pecho)",
      isRest: false,
      exercises: [
        { name: "Jalón al Pecho", sets: 4, reps: "10-12" },
        { name: "Remo Gironda", sets: 3, reps: "12-15" },
        { name: "Press Militar con Mancuernas", sets: 3, reps: "10-12" },
        { name: "Elevaciones Laterales", sets: 4, reps: "15-20" },
        { name: "Flexiones (con apoyo de rodillas)", sets: 3, reps: "Al fallo" },
      ]
    },
    {
      day: "Miércoles",
      focus: "Cardio, Core y Glúteo (Activación)",
      isRest: false,
      exercises: [
        { name: "Caminar 2 km", sets: 1, reps: "30 min" },
        { name: "Sentadilla Sumo con mancuerna", sets: 4, reps: "10-12", notes: "Glúteo medio" },
        { name: "Crunch Abdominal", sets: 3, reps: "20" },
        { name: "Elevación de Piernas Colgada", sets: 3, reps: "12-15" },
        { name: "Plancha Abdominal", sets: 3, reps: "45 seg" },

      ]
    },
    {
      day: "Jueves",
      focus: "Brazos (Bíceps/Tríceps) y Hombros",
      isRest: false,
      exercises: [
        { name: "Press Arnold", sets: 3, reps: "10-12" },
        { name: "Elevaciones Laterales con Cable", sets: 3, reps: "12-15" },
        { name: "Curl de Bíceps Alterno", sets: 3, reps: "12-15" },
        { name: "Extensión de Tríceps en Polea", sets: 3, reps: "12-15" },
        { name: "Cardio HIIT", sets: 1, reps: "15 min" },
      ]
    },
    {
      day: "Viernes",
      focus: "Femorales y Glúteos",
      isRest: false,
      exercises: [
        { name: "Peso Muerto Rumano", sets: 4, reps: "10-12", notes: "Siente el estiramiento" },
        { name: "Curl Femoral Tumbado", sets: 3, reps: "12-15" },
        { name: "Sentadilla Búlgara", sets: 3, reps: "10-12 por pierna", notes: "Enfocado en glúteo" },
        { name: "Patada de Glúteo en Polea", sets: 4, reps: "15-20 por pierna" },
        { name: "Hip Thrust Invertido o en Máquina", sets: 3, reps: "12-15" },
      ]
    },
    {
      day: "Sábado",
      focus: "Descanso Activo",
      isRest: true,
      exercises: []
    },
    {
      day: "Domingo",
      focus: "Caminata",
      isRest: false,
      exercises: [
        { name: "Caminar 2 km", sets: 1, reps: "30 min" },
      ]
    }
  ];

  return (
    <ExercisePlan
      title="Plan de Entrenamiento: Mujer"
      subtitle="Rutina diseñada para la tonificación del tren inferior, fortalecimiento de glúteos y desarrollo muscular funcional en el tren superior."
      themeColor="accent"
      plan={planMujer}
    />
  );
}
