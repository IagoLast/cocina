import Link from 'next/link';

export default function IntroTwo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="space-y-6">
          <div className="text-6xl">👩‍🍳</div>
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-gray-800 leading-relaxed">
              Para empezar, vamos a elegir las recetas que te apetece cocinar
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Tengo preparadas algunas opciones deliciosas para ti. ¡Elige las que más te gusten!
            </p>
          </div>
        </div>
        
        <Link 
          href="/recipes"
          className="inline-block bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          ¡Ver recetas! 🍽️
        </Link>
      </div>
    </div>
  );
}