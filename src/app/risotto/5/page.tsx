import RecipeStep from '@/components/RecipeStep';

export default function RisottoStep5() {
  return (
    <RecipeStep
      recipe="risotto"
      currentStep={5}
      totalSteps={5}
      title="¡Mantecatura final!"
      description="Cuando el arroz esté al dente (18-20 min), añade las setas, mantequilla y queso parmesano. Remueve y sirve inmediatamente."
      image="🧀"
      tips="La mantecatura final es lo que hace el risotto cremoso y brillante"
    />
  );
}