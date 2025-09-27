import RecipeStep from '@/components/RecipeStep';

export default function RisottoStep4() {
  return (
    <RecipeStep
      recipe="risotto"
      currentStep={4}
      totalSteps={5}
      title="Añadir caldo gradualmente"
      description="Agrega el caldo caliente de cucharón en cucharón, removiendo constantemente. Espera a que se absorba antes de añadir más."
      image="🥄"
      tips="La paciencia es clave: no añadas todo el caldo de una vez"
    />
  );
}