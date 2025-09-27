import RecipeStep from '@/components/RecipeStep';

export default function PizzaStep3() {
  return (
    <RecipeStep
      recipe="pizza"
      currentStep={3}
      totalSteps={5}
      title="Amasar"
      description="Amasa la masa en una superficie enharinada durante 8-10 minutos hasta que esté suave y elástica."
      image="👐"
      tips="La masa está lista cuando al estirarla puedes ver a través de ella sin que se rompa"
    />
  );
}