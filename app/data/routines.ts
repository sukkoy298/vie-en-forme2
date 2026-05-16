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

export type Intensity = "Principiante" | "Intermedio" | "Avanzado";

export type RoutineMeta = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  intensity: Intensity;
  plan: DayPlan[];
};

// ==================== RUTINAS PARA HOMBRE ====================

// HOMBRE - PRINCIPIANTE
const planHombrePrincipiante: DayPlan[] = [
  {
    day: "Lunes",
    focus: "Pecho y Tríceps",
    isRest: false,
    exercises: [
      { name: "Press de Pecho en Máquina", sets: 3, reps: "10-12", notes: "Ajusta asiento, codos a 45°" },
      { name: "Aperturas en Máquina de Mariposa", sets: 2, reps: "12-15", notes: "Peso ligero, controla vuelta" },
      { name: "Press Inclinado con Mancuerna (5-10 kg)", sets: 3, reps: "10-12", notes: "Banco a 30°, controla bajada" },
      { name: "Extensión de Tríceps en Polea Alta", sets: 3, reps: "12-15", notes: "Usa cuerda, codos pegados" },
      { name: "Fondos con Liga (asistida)", sets: 2, reps: "8-10", notes: "Liga colgada en polea alta para asistencia" }
    ]
  },
  {
    day: "Martes",
    focus: "Espalda y Bíceps",
    isRest: false,
    exercises: [
      { name: "Jalón al Pecho en Polea Alta", sets: 3, reps: "10-12", notes: "Agarre ancho, pecho arriba" },
      { name: "Remo en Polea Baja", sets: 3, reps: "10-12", notes: "Barra recta, espalda recta" },
      { name: "Remo con Mancuerna (3-5 kg) a 1 Brazo", sets: 2, reps: "10-12", notes: "Apóyate en banco" },
      { name: "Curl de Bíceps con Barra Pequeña", sets: 3, reps: "12-15", notes: "Palmas al frente, sin balanceo" },
      { name: "Curl Martillo con Mancuerna (3-5 kg)", sets: 2, reps: "12-15", notes: "Palmas enfrentadas" }
    ]
  },
  {
    day: "Miércoles",
    focus: "Piernas y Core",
    isRest: false,
    exercises: [
      { name: "Sentadilla Copita con Mancuerna (5-10 kg)", sets: 3, reps: "10-12", notes: "Pecho erguido, talones firmes" },
      { name: "Peso Muerto Rumano con Mancuernas (5-10 kg)", sets: 3, reps: "10-12", notes: "Espalda recta, rodillas suaves" },
      { name: "Elevación de Talones (Gemelos)", sets: 3, reps: "15-20", notes: "De pie, con mancuerna de 5-10 kg" },
      { name: "Plancha Abdominal", sets: 2, reps: "30-45 seg", notes: "Contrae glúteos y abdomen" },
      { name: "Crunch en Polea Alta", sets: 2, reps: "15-20", notes: "Peso ligero" }
    ]
  },
  {
    day: "Jueves",
    focus: "Hombros y Cardio",
    isRest: false,
    exercises: [
      { name: "Press Militar con Mancuernas (3-5 kg)", sets: 3, reps: "10-12", notes: "Sentado o de pie, core firme" },
      { name: "Elevaciones Laterales con Mancuerna (1-3 kg)", sets: 3, reps: "12-15", notes: "Codos ligeros, sin impulso" },
      { name: "Face Pull con Liga", sets: 3, reps: "15-20", notes: "Liga anclada en polea alta o pared" },
      { name: "Cardio (caminata o bici)", sets: 1, reps: "20 min", notes: "Ritmo moderado" }
    ]
  },
  {
    day: "Viernes",
    focus: "Full Body Ligero",
    isRest: false,
    exercises: [
      { name: "Press de Pecho en Máquina", sets: 3, reps: "10-12", notes: "Peso moderado" },
      { name: "Jalón al Pecho Agarre Cerrado", sets: 3, reps: "10-12", notes: "En polea alta" },
      { name: "Curl de Bíceps con Barra Pequeña", sets: 3, reps: "12-15", notes: "Sin balanceo" },
      { name: "Extensión de Tríceps en Polea Alta", sets: 3, reps: "12-15", notes: "Usa cuerda" },
      { name: "Sentadilla con Mancuerna (5 kg)", sets: 3, reps: "10-12", notes: "Enfriamiento" }
    ]
  },
  {
    day: "Sábado",
    focus: "Descanso Activo",
    isRest: true,
    exercises: [
      { name: "Caminata Ligera", sets: 1, reps: "30 min", notes: "Opcional, para activación" },
      { name: "Estiramientos con Liga", sets: 1, reps: "10 min", notes: "Movilidad articular" }
    ]
  },
  {
    day: "Domingo",
    focus: "Descanso Total",
    isRest: true,
    exercises: []
  }
];

// HOMBRE - INTERMEDIO
const planHombreIntermedio: DayPlan[] = [
  {
    day: "Lunes",
    focus: "Pecho y Tríceps",
    isRest: false,
    exercises: [
      { name: "Press de Pecho en Máquina (Elevación)", sets: 4, reps: "8-10", notes: "Aprieta el pecho al final" },
      { name: "Aperturas en Máquina de Mariposa", sets: 3, reps: "10-12", notes: "Controla vuelta, no dejes caer" },
      { name: "Press Inclinado con Mancuernas (10 kg)", sets: 3, reps: "10-12", notes: "Banco a 30-45°, sube explosivo" },
      { name: "Extensión de Tríceps en Polea Alta", sets: 4, reps: "12-15", notes: "Usa cuerda o barra recta corta" },
      { name: "Press Francés con Mancuerna (5-10 kg)", sets: 3, reps: "10-12", notes: "Un brazo o dos, control en bajada" }
    ]
  },
  {
    day: "Martes",
    focus: "Espalda y Bíceps",
    isRest: false,
    exercises: [
      { name: "Jalón al Pecho en Polea Alta", sets: 4, reps: "8-10", notes: "Agarre ancho, pecho arriba" },
      { name: "Remo en Polea Baja", sets: 4, reps: "8-10", notes: "Barra o agarre V, escápulas al final" },
      { name: "Remo con Mancuerna (10 kg) a 1 Brazo", sets: 3, reps: "10-12", notes: "Apóyate en banco, espalda plana" },
      { name: "Curl de Bíceps con Barra Pequeña (10 kg)", sets: 4, reps: "10-12", notes: "Barra recta o Z" },
      { name: "Curl Martillo con Mancuerna (5-10 kg)", sets: 3, reps: "12-15", notes: "Palmas enfrentadas, sin balanceo" },
      { name: "Remo con Liga (agarre ancho)", sets: 3, reps: "15", notes: "Para quemar dorsal" }
    ]
  },
  {
    day: "Miércoles",
    focus: "Piernas (Fuerza e Hipertrofia)",
    isRest: false,
    exercises: [
      { name: "Sentadilla Copita con Mancuerna (10 kg)", sets: 4, reps: "8-10", notes: "Pecho erguido, talones firmes" },
      { name: "Peso Muerto Rumano con Mancuernas (10 kg)", sets: 4, reps: "10-12", notes: "Espalda recta, estira isquios" },
      { name: "Zancadas con Mancuerna (5-10 kg)", sets: 3, reps: "12 por pierna", notes: "Rodilla trasera casi toca suelo" },
      { name: "Elevación de Talones (Gemelos)", sets: 4, reps: "15-20", notes: "Con mancuerna de 10 kg" },
      { name: "Puente de Glúteo con Barra Pequeña (10 kg)", sets: 3, reps: "12-15", notes: "Aprieta glúteos arriba" },
      { name: "Sentadilla Sumo con Mancuerna (10 kg)", sets: 3, reps: "12", notes: "Glúteo medio" }
    ]
  },
  {
    day: "Jueves",
    focus: "Hombros y Core",
    isRest: false,
    exercises: [
      { name: "Press Militar con Mancuernas (5-10 kg)", sets: 4, reps: "8-10", notes: "De pie o sentado, controla core" },
      { name: "Elevaciones Laterales con Mancuerna (3-5 kg)", sets: 4, reps: "12-15", notes: "Codos ligeros, sin impulso" },
      { name: "Face Pull en Polea Alta con Cuerda", sets: 3, reps: "15-20", notes: "Tira hacia la cara, codos altos" },
      { name: "Elevaciones Frontales con Liga", sets: 3, reps: "15", notes: "Liga anclada abajo" },
      { name: "Crunch en Polea Alta (con cuerda)", sets: 3, reps: "15-20", notes: "Arquea espalda baja para más recorrido" },
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
      { name: "Curl de Bíceps con Barra Pequeña (10 kg)", sets: 3, reps: "12-15", notes: "Puede ser con barra de polea" },
      { name: "Extensión de Tríceps por Encima de Cabeza con Mancuerna", sets: 3, reps: "12-15", notes: "Con mancuerna de 5-10 kg" },
      { name: "Sentadilla Búlgara con Liga (asistida)", sets: 3, reps: "10 por pierna", notes: "Liga para ayudar en subida" }
    ]
  },
  {
    day: "Sábado",
    focus: "Descanso Activo o Cardio",
    isRest: true,
    exercises: [
      { name: "Cardio Ligero", sets: 1, reps: "20-30 min", notes: "Bicicleta o caminata inclinada" },
      { name: "Movilidad con Liga", sets: 1, reps: "10 min", notes: "Hombros y cadera" }
    ]
  },
  {
    day: "Domingo",
    focus: "Descanso Total",
    isRest: true,
    exercises: []
  }
];

// HOMBRE - AVANZADO
const planHombreAvanzado: DayPlan[] = [
  {
    day: "Lunes",
    focus: "Pecho y Tríceps (Volumen Alto)",
    isRest: false,
    exercises: [
      { name: "Press de Pecho en Máquina (máx peso)", sets: 5, reps: "6-8", notes: "Peso pesado, técnica estricta" },
      { name: "Press Inclinado con Mancuernas (10 kg)", sets: 4, reps: "8-10", notes: "Banco a 30°, sube explosivo" },
      { name: "Aperturas en Máquina de Mariposa", sets: 3, reps: "10-12", notes: "Drop set al final de cada serie" },
      { name: "Fondos con Peso (mochila o disco)", sets: 4, reps: "8-12", notes: "Añade peso extra si puedes" },
      { name: "Extensión de Tríceps en Polea Alta", sets: 4, reps: "10-12", notes: "Super serie con press francés" },
      { name: "Press Francés con Mancuerna (10 kg)", sets: 4, reps: "10-12", notes: "Tríceps aislado" },
      { name: "Aperturas con Liga Cruzada", sets: 3, reps: "15", notes: "Ligas en poleas para finalizar" },
      { name: "Cardio HIIT", sets: 1, reps: "15 min", notes: "30s intenso / 30s recuperación" }
    ]
  },
  {
    day: "Martes",
    focus: "Espalda y Bíceps (Potencia)",
    isRest: false,
    exercises: [
      { name: "Dominadas con Liga (asistencia mínima)", sets: 5, reps: "6-8", notes: "Agarre ancho, controla bajada" },
      { name: "Remo con Barra en Polea Baja (máx peso)", sets: 5, reps: "6-8", notes: "Peso máximo controlado" },
      { name: "Remo con Mancuerna (10 kg) a 1 Brazo", sets: 4, reps: "8-10", notes: "Peso pesado, buena técnica" },
      { name: "Jalón al Pecho Agarre Cerrado", sets: 3, reps: "10-12", notes: "En polea alta, enfoca dorsal" },
      { name: "Curl de Bíceps con Barra Pequeña (10 kg + ligas)", sets: 4, reps: "8-10", notes: "Añade ligas para resistencia variable" },
      { name: "Curl Martillo con Mancuerna (10 kg)", sets: 3, reps: "10-12", notes: "Alterno o simultáneo" },
      { name: "Remo Isométrico con Liga", sets: 3, reps: "30 seg", notes: "Mantén posición de remo" }
    ]
  },
  {
    day: "Miércoles",
    focus: "Piernas (Fuerza Máxima)",
    isRest: false,
    exercises: [
      { name: "Sentadilla Copita con Mancuerna (10 kg + ligas)", sets: 5, reps: "6-8", notes: "Ligas para resistencia extra" },
      { name: "Peso Muerto Rumano con Mancuernas (10 kg)", sets: 5, reps: "8-10", notes: "Peso pesado, estira isquios" },
      { name: "Zancadas Búlgaras con Mancuerna (10 kg)", sets: 4, reps: "8-10 por pierna", notes: "Pie trasero elevado" },
      { name: "Sentadilla Sumo con Mancuerna (10 kg)", sets: 4, reps: "10-12", notes: "Glúteo medio y aductores" },
      { name: "Elevación de Talones (Gemelos)", sets: 5, reps: "15-20", notes: "Con mancuerna de 10 kg" },
      { name: "Puente de Glúteo a 1 Pierna con Liga", sets: 3, reps: "12 por pierna", notes: "Liga sobre cadera" },
      { name: "Cardio (bicicleta)", sets: 1, reps: "20 min", notes: "Ritmo constante" }
    ]
  },
  {
    day: "Jueves",
    focus: "Hombros y Trapecio",
    isRest: false,
    exercises: [
      { name: "Press Militar con Mancuernas (10 kg)", sets: 5, reps: "6-8", notes: "De pie, máximo peso controlado" },
      { name: "Elevaciones Laterales con Mancuerna (5 kg)", sets: 4, reps: "10-12", notes: "Peso moderado, sin impulso" },
      { name: "Elevaciones Frontales con Mancuerna (5 kg)", sets: 3, reps: "10-12", notes: "Alterno o simultáneo" },
      { name: "Face Pull en Polea Alta (con cuerda)", sets: 4, reps: "15-20", notes: "Super serie con pájaros" },
      { name: "Pájaro con Mancuerna (3-5 kg) inclinado", sets: 4, reps: "12-15", notes: "Hombro posterior" },
      { name: "Encogimientos de Hombros (Shrugs) con Mancuerna (10 kg)", sets: 4, reps: "12-15", notes: "Trapecio" },
      { name: "Crunch en Polea Alta", sets: 4, reps: "15-20", notes: "Peso moderado" },
      { name: "Plancha con Ligas (tensión en brazos)", sets: 3, reps: "45 seg", notes: "Añade dificultad" }
    ]
  },
  {
    day: "Viernes",
    focus: "Full Body (Metabólico)",
    isRest: false,
    exercises: [
      { name: "Press de Pecho en Máquina (circuito)", sets: 4, reps: "10-12", notes: "Poco descanso" },
      { name: "Remo en Polea Baja (circuito)", sets: 4, reps: "10-12", notes: "Poco descanso" },
      { name: "Sentadilla Copita con Mancuerna (10 kg) (circuito)", sets: 4, reps: "10-12", notes: "Poco descanso" },
      { name: "Elevaciones Laterales con Liga (circuito)", sets: 3, reps: "12-15", notes: "Resistencia constante" },
      { name: "Curl de Bíceps + Extensión de Tríceps con Barra", sets: 3, reps: "12 c/u", notes: "Superserie al fallo" },
      { name: "Burpees con Salto (sin equipo)", sets: 3, reps: "10", notes: "Cardio metabólico" },
      { name: "Cardio HIIT (bici o trote)", sets: 1, reps: "20 min", notes: "1 min intenso / 1 min suave" }
    ]
  },
  {
    day: "Sábado",
    focus: "Cardio y Movilidad",
    isRest: false,
    exercises: [
      { name: "Cardio Largo", sets: 1, reps: "40-50 min", notes: "Caminata, bici o elíptica" },
      { name: "Estiramientos dinámicos con Liga", sets: 1, reps: "15 min", notes: "Movilidad articular completa" }
    ]
  },
  {
    day: "Domingo",
    focus: "Descanso Total",
    isRest: true,
    exercises: []
  }
];

// ==================== RUTINAS PARA MUJER ====================

// MUJER - PRINCIPIANTE
const planMujerPrincipiante: DayPlan[] = [
  {
    day: "Lunes",
    focus: "Glúteos y Cuádriceps",
    isRest: false,
    exercises: [
      { name: "Sentadilla Copita con Mancuerna (3-5 kg)", sets: 3, reps: "10-12", notes: "Pecho erguido, baja controlada" },
      { name: "Puente de Glúteo en el Suelo", sets: 3, reps: "12-15", notes: "Aprieta glúteo arriba, sostén 2 seg" },
      { name: "Elevación de Talones (Gemelos)", sets: 2, reps: "15-20", notes: "De pie, con mancuerna de 3-5 kg" },
      { name: "Patada de Glúteo en Polea Baja (con tobillera)", sets: 3, reps: "12-15 por pierna", notes: "Torso paralelo al suelo" },
      { name: "Abducción de Cadera con Liga (de pie)", sets: 2, reps: "15 por pierna", notes: "Liga en tobillos" },
      { name: "Cardio (caminata inclinada)", sets: 1, reps: "20 min", notes: "Ritmo suave, quema grasa" }
    ]
  },
  {
    day: "Martes",
    focus: "Tren Superior",
    isRest: false,
    exercises: [
      { name: "Press de Pecho en Máquina", sets: 3, reps: "10-12", notes: "Ajusta asiento, peso ligero" },
      { name: "Aperturas en Máquina de Mariposa", sets: 2, reps: "12-15", notes: "Siente el estiramiento" },
      { name: "Jalón al Pecho en Polea Alta", sets: 3, reps: "10-12", notes: "Agarre ancho, pecho arriba" },
      { name: "Remo en Polea Baja", sets: 3, reps: "10-12", notes: "Espalda recta, juntar escápulas" },
      { name: "Elevaciones Laterales con Mancuerna (1-2 kg)", sets: 3, reps: "12-15", notes: "Peso ligero, sin impulso" },
      { name: "Face Pull con Liga", sets: 2, reps: "15", notes: "Liga anclada en polea alta" },
      { name: "Cardio (bicicleta)", sets: 1, reps: "20 min", notes: "Ritmo constante" }
    ]
  },
  {
    day: "Miércoles",
    focus: "Glúteos y Femorales",
    isRest: false,
    exercises: [
      { name: "Peso Muerto Rumano con Mancuernas (5 kg)", sets: 3, reps: "10-12", notes: "Espalda recta, siente el estiramiento" },
      { name: "Sentadilla Búlgara sin peso o con 3 kg", sets: 3, reps: "8-10 por pierna", notes: "Pie trasero en silla o banco" },
      { name: "Abducción de Cadera en Polea Baja (tobillera)", sets: 3, reps: "15 por pierna", notes: "De pie, pierna se abre lateral" },
      { name: "Elevación de Pierna Recta en Polea Baja (tobillera)", sets: 3, reps: "12-15 por pierna", notes: "Pierna sube atrás" },
      { name: "Zancada Lateral con Liga", sets: 2, reps: "10 por lado", notes: "Liga en tobillos" },
      { name: "Cardio (elíptica)", sets: 1, reps: "20-25 min", notes: "Resistencia moderada" }
    ]
  },
  {
    day: "Jueves",
    focus: "Core y Cardio",
    isRest: false,
    exercises: [
      { name: "Crunch en Polea Alta", sets: 3, reps: "15-20", notes: "Peso ligero, controla bajada" },
      { name: "Plancha Abdominal", sets: 3, reps: "30-45 seg", notes: "Contrae glúteos y abdomen" },
      { name: "Russian Twist con Mancuerna (2-3 kg)", sets: 3, reps: "12-15 por lado", notes: "Talones en el suelo" },
      { name: "Elevación de Piernas Acostada", sets: 3, reps: "12-15", notes: "Lumbares pegadas al suelo" },
      { name: "Patada de Glúteo con Liga (en cuadrupedia)", sets: 2, reps: "15 por pierna", notes: "Aislamiento final" },
      { name: "Cardio HIIT", sets: 1, reps: "15 min", notes: "30s intenso / 30s suave (bici o trote)" }
    ]
  },
  {
    day: "Viernes",
    focus: "Full Body (Glúteo y General)",
    isRest: false,
    exercises: [
      { name: "Hip Thrust con Barra Pequeña (5 kg)", sets: 4, reps: "12-15", notes: "Espalda en banco bajo" },
      { name: "Sentadilla Copita con Mancuerna (5 kg)", sets: 3, reps: "10-12", notes: "Enfoca glúteo al subir" },
      { name: "Remo con Mancuerna (3-5 kg) a 1 Brazo", sets: 3, reps: "10-12 por brazo", notes: "Espalda plana" },
      { name: "Press Militar con Mancuernas (3 kg)", sets: 3, reps: "10-12", notes: "Core firme" },
      { name: "Curl de Bíceps con Barra Pequeña (3-5 kg)", sets: 2, reps: "12-15", notes: "Aislado" },
      { name: "Elevación de Talones", sets: 3, reps: "15-20", notes: "Con mancuerna de 5 kg" },
      { name: "Cardio (caminata)", sets: 1, reps: "25 min", notes: "Ritmo moderado" }
    ]
  },
  {
    day: "Sábado",
    focus: "Descanso Activo",
    isRest: true,
    exercises: [
      { name: "Caminata Ligera", sets: 1, reps: "30-40 min", notes: "Opcional, activación" },
      { name: "Estiramientos suaves con Liga", sets: 1, reps: "10 min", notes: "Movilidad" }
    ]
  },
  {
    day: "Domingo",
    focus: "Descanso Total",
    isRest: true,
    exercises: []
  }
];

// MUJER - INTERMEDIO
const planMujerIntermedio: DayPlan[] = [
  {
    day: "Lunes",
    focus: "Glúteos y Cuádriceps (Fuerza)",
    isRest: false,
    exercises: [
      { name: "Sentadilla Búlgara con Mancuerna (5-10 kg)", sets: 4, reps: "10-12 por pierna", notes: "Pie delantero elevado, enfoca glúteo" },
      { name: "Hip Thrust con Barra Pequeña (10 kg)", sets: 4, reps: "12-15", notes: "Sostén 2 seg arriba, aprieta glúteo" },
      { name: "Zancadas con Mancuerna (5-10 kg)", sets: 3, reps: "12 por pierna", notes: "Rodilla trasera casi toca suelo" },
      { name: "Peso Muerto Rumano con Mancuernas (10 kg)", sets: 3, reps: "12", notes: "Énfasis en glúteo e isquios" },
      { name: "Elevación de Talones (Gemelos)", sets: 4, reps: "15-20", notes: "Con mancuerna de 10 kg, sube lento" },
      { name: "Abducción con Liga (sentada)", sets: 3, reps: "20", notes: "Liga en muslos, abre piernas" },
      { name: "Cardio (caminata inclinada)", sets: 1, reps: "25 min", notes: "Quema adicional, activa glúteo" }
    ]
  },
  {
    day: "Martes",
    focus: "Tren Superior (Espalda, Hombros, Pecho)",
    isRest: false,
    exercises: [
      { name: "Press de Pecho en Máquina (Elevación)", sets: 4, reps: "10-12", notes: "Ajusta asiento, codos a 45°" },
      { name: "Aperturas en Máquina de Mariposa", sets: 3, reps: "12-15", notes: "Siente el estiramiento" },
      { name: "Jalón al Pecho en Polea Alta", sets: 4, reps: "10-12", notes: "Agarre ancho, pecho arriba" },
      { name: "Remo en Polea Baja", sets: 4, reps: "10-12", notes: "Barra o agarre V, juntar escápulas" },
      { name: "Press Militar con Mancuernas (5 kg)", sets: 3, reps: "10-12", notes: "De pie o sentado" },
      { name: "Elevaciones Laterales con Mancuerna (3 kg)", sets: 3, reps: "12-15", notes: "Peso moderado" },
      { name: "Face Pull con Liga (polea alta)", sets: 3, reps: "15-20", notes: "Tira hacia la cara, hombros atrás" },
      { name: "Cardio (bicicleta)", sets: 1, reps: "20 min", notes: "Ritmo constante" }
    ]
  },
  {
    day: "Miércoles",
    focus: "Glúteos (Volumen y Aislamiento)",
    isRest: false,
    exercises: [
      { name: "Peso Muerto Rumano con Barra Pequeña (10 kg)", sets: 4, reps: "12-15", notes: "Espalda recta, lleva cadera atrás" },
      { name: "Patada de Glúteo en Polea Baja (tobillera)", sets: 4, reps: "15-20 por pierna", notes: "Torso paralelo al suelo" },
      { name: "Abducción de Cadera en Polea Baja (tobillera)", sets: 3, reps: "15 por pierna", notes: "De pie, pierna se abre lateral" },
      { name: "Elevación de Pierna Recta en Polea Baja (tobillera)", sets: 3, reps: "15 por pierna", notes: "Pierna sube atrás" },
      { name: "Sentadilla Sumo con Mancuerna (10 kg)", sets: 3, reps: "12", notes: "Abre piernas, enfoca glúteo medio" },
      { name: "Puente de Glúteo a 1 Pierna con Liga", sets: 3, reps: "12-15 por pierna", notes: "Liga sobre cadera" },
      { name: "Cardio (treadmill inclinado)", sets: 1, reps: "25 min", notes: "Quema adicional" }
    ]
  },
  {
    day: "Jueves",
    focus: "Core y Hombros",
    isRest: false,
    exercises: [
      { name: "Crunch en Polea Alta (con cuerda)", sets: 4, reps: "15-20", notes: "Arquea espalda baja para más recorrido" },
      { name: "Plancha Abdominal", sets: 3, reps: "45-60 seg", notes: "Contrae glúteos y core" },
      { name: "Elevación de Piernas Colgada (asistida con liga)", sets: 3, reps: "12-15", notes: "Usa liga para ayudar si es necesario" },
      { name: "Russian Twist con Mancuerna (3-5 kg)", sets: 3, reps: "15 por lado", notes: "Oblicuos" },
      { name: "Elevaciones Laterales con Mancuerna (3 kg)", sets: 3, reps: "12-15", notes: "Peso moderado" },
      { name: "Face Pull en Polea Alta", sets: 3, reps: "15-20", notes: "Salud del hombro" },
      { name: "Plancha Lateral con Liga (tensión)", sets: 3, reps: "30 seg por lado", notes: "Core profundo" },
      { name: "Cardio HIIT", sets: 1, reps: "20 min", notes: "30s intenso / 30s suave" }
    ]
  },
  {
    day: "Viernes",
    focus: "Full Body (Femorales y Glúteos)",
    isRest: false,
    exercises: [
      { name: "Sentadilla Copita Profunda (10 kg)", sets: 4, reps: "10-12", notes: "Talones firmes, baja lento" },
      { name: "Peso Muerto Rumano con Mancuernas (10 kg)", sets: 4, reps: "12-15", notes: "Enfoca femorales y glúteo" },
      { name: "Hip Thrust con Barra Pequeña (10 kg)", sets: 4, reps: "12-15", notes: "Aprieta glúteo arriba" },
      { name: "Remo en Polea Baja", sets: 3, reps: "10-12", notes: "Espalda" },
      { name: "Press de Hombros con Mancuernas (5 kg)", sets: 3, reps: "10-12", notes: "Core firme" },
      { name: "Curl de Bíceps con Barra Pequeña (5 kg)", sets: 3, reps: "12-15", notes: "Aislado" },
      { name: "Extensión de Tríceps con Liga (anclada arriba)", sets: 3, reps: "15", notes: "Pushdown" },
      { name: "Cardio (caminata o elíptica)", sets: 1, reps: "20 min", notes: "Recuperación activa" }
    ]
  },
  {
    day: "Sábado",
    focus: "Descanso Activo",
    isRest: true,
    exercises: [
      { name: "Cardio Largo (caminata o bici)", sets: 1, reps: "40-50 min", notes: "Quema grasa, baja intensidad" },
      { name: "Estiramientos con Liga", sets: 1, reps: "15 min", notes: "Todo el cuerpo" }
    ]
  },
  {
    day: "Domingo",
    focus: "Descanso Total",
    isRest: true,
    exercises: []
  }
];

// MUJER - AVANZADO
const planMujerAvanzado: DayPlan[] = [
  {
    day: "Lunes",
    focus: "Glúteos Máximos (Potencia)",
    isRest: false,
    exercises: [
      { name: "Sentadilla Búlgara con Mancuerna (10 kg) pesada", sets: 5, reps: "8-10 por pierna", notes: "Pie delantero elevado" },
      { name: "Hip Thrust con Barra Pequeña (10 kg + ligas)", sets: 5, reps: "8-10", notes: "Añade ligas para resistencia variable" },
      { name: "Peso Muerto Rumano con Mancuernas (10 kg) pesado", sets: 4, reps: "10-12", notes: "Peso pesado, controla bajada" },
      { name: "Patada de Glúteo en Polea Baja (tobillera)", sets: 4, reps: "15-20 por pierna", notes: "Drop set en última serie" },
      { name: "Abducción de Cadera en Polea Baja (tobillera)", sets: 4, reps: "20 por pierna", notes: "Peso máximo controlado" },
      { name: "Zancada Lateral con Liga (resistencia alta)", sets: 3, reps: "12 por lado", notes: "Liga en tobillos" },
      { name: "Puente de Glúteo a 1 Pierna con Liga y Peso", sets: 3, reps: "10-12 por pierna", notes: "Combinación avanzada" },
      { name: "Cardio (caminata inclinada máxima)", sets: 1, reps: "20 min", notes: "Alta inclinación, ritmo rápido" }
    ]
  },
  {
    day: "Martes",
    focus: "Tren Superior (Fuerza y Volumen)",
    isRest: false,
    exercises: [
      { name: "Press de Pecho en Máquina (máx peso)", sets: 5, reps: "8-10", notes: "Peso pesado" },
      { name: "Aperturas en Máquina de Mariposa", sets: 4, reps: "10-12", notes: "Drop set" },
      { name: "Dominadas Asistidas con Liga (resistencia mínima)", sets: 4, reps: "6-8", notes: "Controla subida y bajada" },
      { name: "Remo en Polea Baja (agarre V)", sets: 5, reps: "8-10", notes: "Peso pesado" },
      { name: "Press Militar con Mancuernas (10 kg)", sets: 4, reps: "8-10", notes: "De pie" },
      { name: "Elevaciones Laterales + Frontales (5 kg)", sets: 4, reps: "10 c/u", notes: "Superserie" },
      { name: "Face Pull en Polea Alta (con cuerda)", sets: 4, reps: "15-20", notes: "Salud del hombro" },
      { name: "Remo con Liga (agarre ancho, al fallo)", sets: 3, reps: "20", notes: "Quemador final" }
    ]
  },
  {
    day: "Miércoles",
    focus: "Glúteos (Aislamiento y Resistencia)",
    isRest: false,
    exercises: [
      { name: "Sentadilla Sumo con Mancuerna (10 kg) pesada", sets: 5, reps: "10-12", notes: "Peso pesado, abre piernas" },
      { name: "Elevación de Pierna Recta en Polea Baja (tobillera)", sets: 4, reps: "15-20 por pierna", notes: "Concéntrate en glúteo" },
      { name: "Zancada Trasera en Polea Baja (tobillera)", sets: 4, reps: "12 por pierna", notes: "Polea baja, da paso atrás" },
      { name: "Patada de Glúteo en Cuadrupedia con Liga", sets: 4, reps: "20 por pierna", notes: "Liga en pierna que trabaja" },
      { name: "Abducción de Cadera en Máquina de Mariposa (si se puede)", sets: 4, reps: "20", notes: "Si no, polea baja" },
      { name: "Hip Thrust Isométrico con Liga", sets: 3, reps: "30-45 seg", notes: "Mantén contracción" },
      { name: "Cardio HIIT (bici o treadmill)", sets: 1, reps: "25 min", notes: "Intervalos: 45s intenso / 15s recuperación" }
    ]
  },
  {
    day: "Jueves",
    focus: "Core y Hombros (Fuerza)",
    isRest: false,
    exercises: [
      { name: "Crunch en Polea Alta (con cuerda, peso máximo controlado)", sets: 4, reps: "15-20", notes: "Concéntrate en contracción" },
      { name: "Plancha Abdominal con Peso (mochila pequeña)", sets: 4, reps: "45-60 seg", notes: "Añade peso extra" },
      { name: "Elevación de Piernas Colgada (sin asistencia)", sets: 4, reps: "10-15", notes: "Recto abdominal inferior" },
      { name: "Russian Twist con Mancuerna (5-10 kg)", sets: 4, reps: "15-20 por lado", notes: "Oblicuos" },
      { name: "Press Arnold con Mancuerna (5-10 kg)", sets: 4, reps: "8-10", notes: "Hombro completo" },
      { name: "Elevaciones Laterales con Escalera (3-5-10 kg)", sets: 3, reps: "8 c/u", notes: "Drop set piramidal" },
      { name: "Face Pull en Polea Alta (con cuerda)", sets: 4, reps: "20", notes: "Al fallo" },
      { name: "Plancha Lateral con Elevación de Pierna", sets: 3, reps: "12 por lado", notes: "Core y glúteo medio" }
    ]
  },
  {
    day: "Viernes",
    focus: "Full Body (Quemador Total)",
    isRest: false,
    exercises: [
      { name: "Sentadilla Copita con Mancuerna (10 kg) + Saltos", sets: 4, reps: "8-10", notes: "Explosivo" },
      { name: "Peso Muerto Rumano a 1 Pierna con Mancuerna (5-10 kg)", sets: 4, reps: "8-10 por pierna", notes: "Equilibrio y fuerza" },
      { name: "Hip Thrust con Barra Pequeña (10 kg + ligas)", sets: 4, reps: "10-12", notes: "Resistencia variable" },
      { name: "Press de Pecho Inclinado con Mancuerna (10 kg)", sets: 3, reps: "8-10", notes: "Pecho alto" },
      { name: "Remo con Mancuerna (10 kg) a 1 Brazo", sets: 3, reps: "10 por brazo", notes: "Espalda" },
      { name: "Burpees con Salto (sin equipo)", sets: 4, reps: "10", notes: "Quemador calórico" },
      { name: "Curl + Press Militar con Mancuerna (5 kg)", sets: 3, reps: "10 c/u", notes: "Superserie bíceps-hombro" },
      { name: "Cardio (trote suave)", sets: 1, reps: "15 min", notes: "Enfriamiento" }
    ]
  },
  {
    day: "Sábado",
    focus: "Cardio y Movilidad",
    isRest: false,
    exercises: [
      { name: "Cardio Largo (caminata o bici)", sets: 1, reps: "50-60 min", notes: "Quema grasa, baja intensidad" },
      { name: "Estiramientos dinámicos con Liga", sets: 1, reps: "20 min", notes: "Movilidad completa" },
      { name: "Foam Rolling (si tienes)", sets: 1, reps: "10 min", notes: "Recuperación muscular" }
    ]
  },
  {
    day: "Domingo",
    focus: "Descanso Total",
    isRest: true,
    exercises: []
  }
];

// ==================== EXPORTACIÓN ====================

export const routinesHombre: RoutineMeta[] = [
  {
    id: "principiante",
    title: "Plan Principiante",
    subtitle: "Rutina de adaptación y técnica",
    description: "Enfoque en aprender los movimientos básicos con peso controlado. 3-4 días por semana. Ideal para primeros 2-3 meses.",
    intensity: "Principiante",
    plan: planHombrePrincipiante
  },
  {
    id: "intermedio",
    title: "Plan Intermedio",
    subtitle: "Rutina de hipertrofia y fuerza",
    description: "Entrenamiento equilibrado enfocado en el desarrollo muscular de todo el cuerpo. 5 días por semana con volumen moderado-alto.",
    intensity: "Intermedio",
    plan: planHombreIntermedio
  },
  {
    id: "avanzado",
    title: "Plan Avanzado",
    subtitle: "Rutina de alta intensidad y volumen",
    description: "Para personas con experiencia (6+ meses entrenando). Técnicas avanzadas: drop sets, superseries, sobrecarga progresiva.",
    intensity: "Avanzado",
    plan: planHombreAvanzado
  }
];

export const routinesMujer: RoutineMeta[] = [
  {
    id: "principiante",
    title: "Plan Principiante",
    subtitle: "Rutina de adaptación y tonificación",
    description: "Enfoque en glúteos y tonificación general. 3-4 días por semana con peso ligero a moderado. Ideal para empezar.",
    intensity: "Principiante",
    plan: planMujerPrincipiante
  },
  {
    id: "intermedio",
    title: "Plan Intermedio",
    subtitle: "Rutina de fuerza y volumen en glúteos",
    description: "Entrenamiento equilibrado con énfasis en glúteos y tren inferior. 5 días por semana con sobrecarga progresiva.",
    intensity: "Intermedio",
    plan: planMujerIntermedio
  },
  {
    id: "avanzado",
    title: "Plan Avanzado",
    subtitle: "Rutina de alta intensidad para glúteos y definición",
    description: "Para mujeres con experiencia (6+ meses). Técnicas avanzadas, volumen alto y enfoque en glúteos máximos.",
    intensity: "Avanzado",
    plan: planMujerAvanzado
  }
];

export function getRoutinesByGender(gender: "hombre" | "mujer"): RoutineMeta[] {
  return gender === "hombre" ? routinesHombre : routinesMujer;
}

export function getRoutine(gender: "hombre" | "mujer", id: string): RoutineMeta | undefined {
  return getRoutinesByGender(gender).find(r => r.id === id);
}