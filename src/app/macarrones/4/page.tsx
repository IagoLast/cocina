import RecipeStep from '@/components/RecipeStep';

export default function MacarronesStep4() {
  return (
    <RecipeStep
      recipe="macarrones"
      currentStep={4}
      totalSteps={4}
      title="¡A disfrutar!"
      description="Escurre la pasta y mézclala con la salsa de queso. Sirve inmediatamente con un poco de pimienta negra por encima."
      image="🍽️"
      tips="Puedes añadir pan rallado tostado por encima para más textura"
    />
  );
}