import RecipeStep from '@/components/RecipeStep';

export default function FabadaStep5() {
  return (
    <RecipeStep
      recipe="fabada"
      currentStep={5}
      totalSteps={6}
      title="Cocción lenta"
      description="Deja cocer a fuego muy lento durante 1.5-2 horas. Remueve de vez en cuando y añade agua caliente si es necesario."
      image="⏳"
      tips="La clave está en la cocción lenta y sin prisas"
    />
  );
}