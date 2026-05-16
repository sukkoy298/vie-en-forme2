import ExercisePlan from "@/components/ExercisePlan";
import { getRoutine } from "@/app/data/routines";
import { notFound } from "next/navigation";

export default async function HombreRoutinePage({ params }: { params: Promise<{ routineId: string }> }) {
  const { routineId } = await params;
  const routine = getRoutine("hombre", routineId);
  if (!routine) notFound();

  return (
    <ExercisePlan
      title={routine.title}
      subtitle={routine.subtitle}
      themeColor="brand"
      plan={routine.plan}
    />
  );
}
