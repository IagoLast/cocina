import RecipeStep from '@/components/RecipeStep';

export default function FabadaStep2() {
  return (
    <RecipeStep
      recipe="fabada"
      currentStep={2}
      totalSteps={6}
      title="Preparar los embutidos"
      description="Corta en trozos grandes: chorizo asturiano, morcilla asturiana y un trozo de lacón o panceta."
      image="🥓"
      tips="Los embutidos deben ser de buena calidad para una fabada auténtica"
    />
  );
}