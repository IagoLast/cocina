import RecipeStep from '@/components/RecipeStep';

export default function MacarronesStep1() {
  return (
    <RecipeStep
      recipe="macarrones"
      currentStep={1}
      totalSteps={4}
      title="Hervir agua"
      description="Pon a hervir una olla grande con agua abundante y sal. Añade 400g de macarrones cuando hierva."
      image="🧀"
      tips="Usa mucha agua para que la pasta no se pegue"
    />
  );
}