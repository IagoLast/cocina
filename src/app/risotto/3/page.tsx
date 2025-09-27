import RecipeStep from '@/components/RecipeStep';

export default function RisottoStep3() {
  return (
    <RecipeStep
      recipe="risotto"
      currentStep={3}
      totalSteps={5}
      title="Tostar el arroz"
      description="En la misma sartén, añade 1 cebolla picada y 300g de arroz arborio. Sofríe hasta que el arroz esté translúcido."
      image="🌾"
      tips="Es importante tostar el arroz para que mantenga la textura al dente"
    />
  );
}