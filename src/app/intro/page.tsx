import Link from 'next/link';

export default function Intro() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="space-y-6">
          <div className="text-6xl">💝</div>
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-gray-800 leading-relaxed">
              Tu novio que es informático y te quiere mucho sabe que te hace ilusión hacer batch cooking...
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Así que te ha programado un juego que te ayudará a cocinar de manera organizada y divertida.
            </p>
          </div>
        </div>
        
        <Link 
          href="/intro/2"
          className="inline-block bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          Continuar ❤️
        </Link>
      </div>
    </div>
  );
}