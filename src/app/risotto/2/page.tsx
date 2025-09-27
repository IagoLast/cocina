import RecipeStep from '@/components/RecipeStep';

export default function RisottoStep2() {
  return (
    <RecipeStep
      recipe="risotto"
      currentStep={2}
      totalSteps={5}
      title="Sofreír las setas"
      description="En una sartén grande, sofríe 300g de setas variadas con un poco de aceite y ajo. Salpimienta y reserva."
      image="🧄"
      tips="Las setas deben quedar doradas para concentrar su sabor"
    />
  );
}