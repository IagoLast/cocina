import RecipeStep from '@/components/RecipeStep';

export default function FabadaStep3() {
  return (
    <RecipeStep
      recipe="fabada"
      currentStep={3}
      totalSteps={6}
      title="Sofreír el ajo"
      description="En la olla donde harás la fabada, sofríe 4 dientes de ajo laminados en un poco de aceite hasta que estén dorados."
      image="🧄"
      tips="No dejes que el ajo se queme o dará sabor amargo"
    />
  );
}