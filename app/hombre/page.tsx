import RoutineSelector from "@/components/RoutineSelector";
import { getRoutinesByGender } from "@/app/data/routines";

export default function HombrePage() {
  const routines = getRoutinesByGender("hombre");

  return (
    <RoutineSelector
      title="Rutinas para Hombre"
      subtitle="Elige la intensidad de tu rutina y transforma tu cuerpo al siguiente nivel."
      gender="hombre"
      routines={routines}
    />
  );
}
