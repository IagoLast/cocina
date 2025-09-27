import RecipeStep from '@/components/RecipeStep';

export default function FabadaStep1() {
  return (
    <RecipeStep
      recipe="fabada"
      currentStep={1}
      totalSteps={6}
      title="Remojar las fabes"
      description="Deja las fabes asturianas (500g) en remojo durante toda la noche en agua fría."
      image="🫘"
      tips="Las fabes deben estar completamente cubiertas de agua"
    />
  );
}