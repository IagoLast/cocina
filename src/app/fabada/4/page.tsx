import RecipeStep from '@/components/RecipeStep';

export default function FabadaStep4() {
  return (
    <RecipeStep
      recipe="fabada"
      currentStep={4}
      totalSteps={6}
      title="Añadir fabes y embutidos"
      description="Agrega las fabes escurridas, los embutidos y cubre con agua fría. Añade una pizca de azafrán y sal."
      image="🍲"
      tips="El agua debe cubrir los ingredientes unos 3 dedos por encima"
    />
  );
}