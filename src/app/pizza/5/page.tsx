import RecipeStep from '@/components/RecipeStep';

export default function PizzaStep5() {
  return (
    <RecipeStep
      recipe="pizza"
      currentStep={5}
      totalSteps={5}
      title="¡A hornear!"
      description="Extiende la masa, añade salsa de tomate, queso mozzarella y tus ingredientes favoritos. Hornea a 220°C durante 12-15 minutos."
      image="🔥"
      tips="Precalienta el horno al máximo para conseguir una base crujiente"
    />
  );
}