import RecipeStep from '@/components/RecipeStep';

export default function RisottoStep1() {
  return (
    <RecipeStep
      recipe="risotto"
      currentStep={1}
      totalSteps={5}
      title="Preparar el caldo"
      description="Calienta 1 litro de caldo de verduras o pollo y manténlo caliente en una olla aparte."
      image="🍄"
      tips="El caldo debe estar siempre caliente para no cortar la cocción del arroz"
    />
  );
}