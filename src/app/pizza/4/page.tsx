import RecipeStep from '@/components/RecipeStep';

export default function PizzaStep4() {
  return (
    <RecipeStep
      recipe="pizza"
      currentStep={4}
      totalSteps={5}
      title="Fermentar"
      description="Coloca la masa en un bol engrasado, cubre con un paño húmedo y deja reposar 1 hora hasta que doble su tamaño."
      image="⏰"
      tips="Busca un lugar cálido para que la masa fermente mejor"
    />
  );
}