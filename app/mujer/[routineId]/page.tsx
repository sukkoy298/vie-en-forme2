import ExercisePlan from "@/components/ExercisePlan";
import { getRoutine } from "@/app/data/routines";
import { notFound } from "next/navigation";

export default async function MujerRoutinePage({ params }: { params: Promise<{ routineId: string }> }) {
  const { routineId } = await params;
  const routine = getRoutine("mujer", routineId);
  if (!routine) notFound();

  return (
    <ExercisePlan
      title={routine.title}
      subtitle={routine.subtitle}
      themeColor="accent"
      plan={routine.plan}
    />
  );
}
