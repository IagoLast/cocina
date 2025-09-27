import RecipeStep from '@/components/RecipeStep';

export default function MacarronesStep3() {
  return (
    <RecipeStep
      recipe="macarrones"
      currentStep={3}
      totalSteps={4}
      title="Añadir leche y queso"
      description="Agrega gradualmente 500ml de leche, removiendo constantemente. Después añade 200g de queso cheddar rallado."
      image="🥛"
      tips="Añade la leche poco a poco para conseguir una textura cremosa"
    />
  );
}