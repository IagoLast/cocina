import RecipeStep from '@/components/RecipeStep';

export default function PizzaStep1() {
  return (
    <RecipeStep
      recipe="pizza"
      currentStep={1}
      totalSteps={5}
      title="Preparar la masa"
      description="En un bol grande, mezcla 500g de harina, 1 cucharadita de sal, 1 cucharadita de azúcar y 7g de levadura seca."
      image="🍕"
      tips="Asegúrate de que la levadura esté fresca para que la masa suba bien"
    />
  );
}