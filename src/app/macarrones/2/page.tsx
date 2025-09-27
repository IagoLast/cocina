import RecipeStep from '@/components/RecipeStep';

export default function MacarronesStep2() {
  return (
    <RecipeStep
      recipe="macarrones"
      currentStep={2}
      totalSteps={4}
      title="Preparar la salsa"
      description="Mientras se cuece la pasta, derrite 50g de mantequilla en una sartén. Añade 3 cucharadas de harina y mezcla."
      image="🧈"
      tips="Remueve constantemente para evitar que se formen grumos"
    />
  );
}