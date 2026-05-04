import ExercisePlan, { DayPlan } from "@/components/ExercisePlan";

export default function HombrePage() {
  const planHombre: DayPlan[] = [
    {
      day: "Lunes",
      focus: "Pecho y Tríceps",
      isRest: false,
      exercises: [
        { name: "Press de Pecho en Máquina (Elevación)", sets: 4, reps: "8-10", notes: "Aprieta el pecho al final" },
        { name: "Aperturas en Máquina de Mariposa", sets: 3, reps: "10-12", notes: "Controla la vuelta, no dejes caer" },
        { name: "Press Inclinado con Mancuernas", sets: 3, reps: "10-12", notes: "Banco a 30-45°" },
        { name: "Extensión de Tríceps en Polea Alta", sets: 4, reps: "12-15", notes: "Usa cuerda o barra recta corta" },
        { name: "Press Francés con Mancuerna", sets: 3, reps: "10-12", notes: "Un brazo o dos, control en bajada" }
      ]
    },
    {
      day: "Martes",
      focus: "Espalda y Bíceps",
      isRest: false,
      exercises: [
        { name: "Jalón al Pecho en Polea Alta", sets: 4, reps: "8-10", notes: "Agarre ancho, pecho arriba" },
        { name: "Remo en Polea Baja", sets: 4, reps: "8-10", notes: "Barra o agarre V, escápulas al final" },
        { name: "Remo con Mancuerna a 1 Brazo", sets: 3, reps: "10-12", notes: "Apóyate en banco, espalda plana" },
        { name: "Curl de Bíceps en Polea Baja", sets: 4, reps: "10-12", notes: "Barra recta o cuerda" },
        { name: "Curl Martillo con Mancuerna", sets: 3, reps: "12-15", notes: "Palmas enfrentadas, sin balanceo" }
      ]
    },
    {
      day: "Miércoles",
      focus: "Piernas (Fuerza e Hipertrofia)",
      isRest: false,
      exercises: [
        { name: "Sentadilla con Mancuerna (Goblet)", sets: 4, reps: "8-10", notes: "Pecho erguido, talones firmes" },
        { name: "Peso Muerto Rumano con Mancuernas", sets: 4, reps: "10-12", notes: "Espalda recta, estira isquios" },
        { name: "Zancadas con Mancuerna", sets: 3, reps: "12 por pierna", notes: "Rodilla trasera casi toca suelo" },
        { name: "Elevación de Talones (Gemelos)", sets: 4, reps: "15-20", notes: "Con mancuerna o en máquina" },
        { name: "Puente de Glúteo con Mancuerna", sets: 3, reps: "12-15", notes: "Aprieta glúteos arriba" }
      ]
    },
    {
      day: "Jueves",
      focus: "Hombros y Core",
      isRest: false,
      exercises: [
        { name: "Press Militar con Mancuernas", sets: 4, reps: "8-10", notes: "De pie o sentado, controla el core" },
        { name: "Elevaciones Laterales con Mancuerna", sets: 4, reps: "12-15", notes: "Codos ligeros, sin impulso" },
        { name: "Face Pull en Polea Alta", sets: 3, reps: "15-20", notes: "Tira hacia la cara, codos altos" },
        { name: "Crunch en Polea Alta (con cuerda)", sets: 3, reps: "15-20", notes: "Arquea la espalda baja para más recorrido" },
        { name: "Plancha Abdominal", sets: 3, reps: "45-60 seg", notes: "Contrae glúteos y abdomen" }
      ]
    },
    {
      day: "Viernes",
      focus: "Full Body (Brazos extra)",
      isRest: false,
      exercises: [
        { name: "Press de Pecho Inclinado en Máquina", sets: 3, reps: "10-12", notes: "Polea o multipower" },
        { name: "Jalón al Pecho Agarre Cerrado", sets: 3, reps: "10-12", notes: "En polea alta, enfoca dorsal" },
        { name: "Remo en Polea Baja (agarre abierto)", sets: 3, reps: "10-12", notes: "Mantén torso fijo" },
        { name: "Curl de Bíceps con Barra Z (mancuerna)", sets: 3, reps: "12-15", notes: "Puede ser con barra de polea" },
        { name: "Extensión de Tríceps por Encima de la Cabeza", sets: 3, reps: "12-15", notes: "Con mancuerna o polea baja" }
      ]
    },
    {
      day: "Sábado",
      focus: "Descanso Activo o Cardio",
      isRest: true,
      exercises: []
    },
    {
      day: "Domingo",
      focus: "Descanso Total",
      isRest: true,
      exercises: []
    }
  ];

  return (
    <ExercisePlan
      title="Plan de Entrenamiento: Hombre"
      subtitle="Rutina estructurada para hipertrofia, ganancia de fuerza y desarrollo muscular enfocado en el tren superior y piernas equilibradas."
      themeColor="brand"
      plan={planHombre}
    />
  );
}
