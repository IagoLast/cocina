import RecipeStep from '@/components/RecipeStep';

export default function PizzaStep2() {
  return (
    <RecipeStep
      recipe="pizza"
      currentStep={2}
      totalSteps={5}
      title="Añadir líquidos"
      description="Agrega 300ml de agua tibia y 2 cucharadas de aceite de oliva. Mezcla hasta formar una masa."
      image="💧"
      tips="El agua debe estar tibia, no caliente, para no matar la levadura"
    />
  );
}