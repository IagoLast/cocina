'use client';

import Link from 'next/link';
import { useState } from 'react';

const recipes = [
  {
    id: 'pizza',
    name: 'Pizza Casera',
    emoji: '🍕',
    description: 'Pizza deliciosa hecha desde cero',
    time: '45 min',
    difficulty: 'Fácil'
  },
  {
    id: 'macarrones',
    name: 'Macarrones con Queso',
    emoji: '🧀',
    description: 'Cremosos y reconfortantes',
    time: '30 min',
    difficulty: 'Muy fácil'
  },
  {
    id: 'fabada',
    name: 'Fabada Asturiana',
    emoji: '🫘',
    description: 'El clásico guiso español',
    time: '2 horas',
    difficulty: 'Medio'
  },
  {
    id: 'risotto',
    name: 'Risotto de Setas',
    emoji: '🍄',
    description: 'Cremoso risotto italiano',
    time: '40 min',
    difficulty: 'Medio'
  }
];

export default function Recipes() {
  const [selectedRecipes, setSelectedRecipes] = useState<string[]>([]);

  const toggleRecipe = (recipeId: string) => {
    setSelectedRecipes(prev => 
      prev.includes(recipeId) 
        ? prev.filter(id => id !== recipeId)
        : [...prev, recipeId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 p-4">
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center space-y-4 pt-8">
          <div className="text-5xl">👩‍🍳</div>
          <h1 className="text-2xl font-bold text-gray-800">
            Elige tus recetas favoritas
          </h1>
          <p className="text-gray-600">
            Selecciona las que te apetezca cocinar hoy
          </p>
        </div>

        <div className="space-y-4">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              onClick={() => toggleRecipe(recipe.id)}
              className={`p-4 rounded-2xl cursor-pointer transition-all duration-200 ${
                selectedRecipes.includes(recipe.id)
                  ? 'bg-white shadow-lg ring-2 ring-blue-500 scale-105'
                  : 'bg-white/70 shadow-md hover:shadow-lg hover:scale-102'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="text-3xl">{recipe.emoji}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{recipe.name}</h3>
                  <p className="text-sm text-gray-600">{recipe.description}</p>
                  <div className="flex space-x-4 text-xs text-gray-500 mt-1">
                    <span>⏱️ {recipe.time}</span>
                    <span>📊 {recipe.difficulty}</span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedRecipes.includes(recipe.id)
                      ? 'bg-blue-500 border-blue-500'
                      : 'border-gray-300'
                  }`}>
                    {selectedRecipes.includes(recipe.id) && (
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedRecipes.length > 0 && (
          <div className="fixed bottom-4 left-4 right-4 max-w-md mx-auto">
            <Link
              href={`/${selectedRecipes[0]}/1`}
              className="block w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-4 px-6 rounded-full text-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              ¡Empezar a cocinar! ({selectedRecipes.length} receta{selectedRecipes.length > 1 ? 's' : ''})
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}