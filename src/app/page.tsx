import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="space-y-4">
          <div className="text-6xl animate-bounce">🎁</div>
          <h1 className="text-3xl font-bold text-gray-800 leading-tight">
            ¡Tienes una sorpresa!
          </h1>
          <p className="text-lg text-gray-600">
            Algo especial te está esperando...
          </p>
        </div>
        
        <Link 
          href="/intro"
          className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          ¡Empezar!
        </Link>
      </div>
    </div>
  );
}
