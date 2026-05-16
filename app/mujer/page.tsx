import RoutineSelector from "@/components/RoutineSelector";
import { getRoutinesByGender } from "@/app/data/routines";

export default function MujerPage() {
  const routines = getRoutinesByGender("mujer");

  return (
    <RoutineSelector
      title="Rutinas para Mujer"
      subtitle="Selecciona la intensidad adecuada para ti y alcanza tus metas fitness."
      gender="mujer"
      routines={routines}
    />
  );
}
