import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Gérez votre parcours académique en toute simplicité
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Suivez vos notes, gérez vos cours, accédez à vos documents officiels
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/auth/login"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100"
            >
              Accéder à mon espace
            </Link>
            <a
              href="#features"
              className="px-8 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-700"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;