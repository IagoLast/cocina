import RecipeStep from '@/components/RecipeStep';

export default function FabadaStep6() {
  return (
    <RecipeStep
      recipe="fabada"
      currentStep={6}
      totalSteps={6}
      title="¡Lista para servir!"
      description="Cuando las fabes estén tiernas y el caldo tenga consistencia, retira del fuego. Sirve bien caliente en platos hondos."
      image="🥣"
      tips="Déjala reposar 10 minutos antes de servir para que se asiente"
    />
  );
}