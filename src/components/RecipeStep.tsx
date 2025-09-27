'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface RecipeStepProps {
  recipe: string;
  currentStep: number;
  totalSteps: number;
  title: string;
  description: string;
  image?: string;
  tips?: string;
}

export default function RecipeStep({ 
  recipe, 
  currentStep, 
  totalSteps, 
  title, 
  description, 
  image,
  tips 
}: RecipeStepProps) {
  const router = useRouter();
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentStep < totalSteps) {
      router.push(`/${recipe}/${currentStep + 1}`);
    }
    if (isRightSwipe && currentStep > 1) {
      router.push(`/${recipe}/${currentStep - 1}`);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    
    if (clickX > width / 2 && currentStep < totalSteps) {
      router.push(`/${recipe}/${currentStep + 1}`);
    } else if (clickX <= width / 2 && currentStep > 1) {
      router.push(`/${recipe}/${currentStep - 1}`);
    }
  };

  const progress = (currentStep / totalSteps) * 100;

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-red-100 to-pink-100 relative overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onClick={handleClick}
    >
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/30">
        <div 
          className="h-full bg-white transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Navigation hints */}
      <div className="absolute top-4 left-4 right-4 flex justify-between text-white/70 text-sm">
        <span>{currentStep > 1 ? '← Anterior' : ''}</span>
        <span className="font-medium">{currentStep} / {totalSteps}</span>
        <span>{currentStep < totalSteps ? 'Siguiente →' : ''}</span>
      </div>

      {/* Content */}
      <div className="flex items-center justify-center min-h-screen p-6">
        <div className="max-w-md w-full text-center space-y-6">
          {image && (
            <div className="text-8xl mb-6">
              {image}
            </div>
          )}
          
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-gray-800 leading-tight">
              {title}
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              {description}
            </p>
            {tips && (
              <div className="bg-white/50 rounded-2xl p-4 mt-4">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">💡 Tip: </span>
                  {tips}
                </p>
              </div>
            )}
          </div>

          {/* Bottom navigation */}
          <div className="pt-8 space-y-4">
            {currentStep === totalSteps ? (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  router.push('/recipes');
                }}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-4 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                ¡Receta completada! 🎉
              </button>
            ) : (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/${recipe}/${currentStep + 1}`);
                }}
                className="w-full bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold py-4 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Siguiente paso →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}