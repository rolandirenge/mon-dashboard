import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function Home() {
  const { user } = useAuth();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 🎨 FOND DÉGRADÉ ANIMÉ (remplace la vidéo) */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 z-0 animate-gradient"></div>

      {/* Overlay sombre pour améliorer la lisibilité */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10"></div>

      {/* Contenu principal */}
      <div className="relative z-20 min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="bg-transparent">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">DGEI</h1>
            
            <div className="space-x-4">
              {user ? (
                <Link 
                  to="/dashboard" 
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Mon Dashboard
                </Link>
              ) : (
                <>
                  <Link to="/auth/login" className="text-white hover:text-blue-300 transition">
                    Connexion
                  </Link>
                  <Link 
                    to="/auth/register" 
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Inscription
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-6">
              Bienvenue sur la plateforme académique

            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
              Gérez vos notes, consultez vos résultats, téléchargez vos documents officiels
            </p>
            
            {!user && (
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/auth/login"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Connexion Étudiant
                </Link>
                <Link
                  to="/auth/login"
                  className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
                >
                  Connexion Enseignant
                </Link>
              </div>
            )}

            {user && (
              <div className="text-center">
                <p className="text-xl text-white/90 mb-4">
                  Bon retour parmi nous, <span className="font-semibold text-white">{user.nom}</span> !
                </p>
                <Link
                  to="/dashboard"
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition"
                >
                  Accéder à mon espace
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Cartes d'information */}
        <div className="max-w-7xl mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white border border-white/20">
              <h3 className="text-xl font-semibold mb-3">Étudiants</h3>
              <p className="text-white/80">Consultez vos notes, résultats et documents officiels en temps réel.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white border border-white/20">
              <h3 className="text-xl font-semibold mb-3">Enseignants</h3>
              <p className="text-white/80">Gérez vos cours, saisissez les notes et suivez la progression.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white border border-white/20">
              <h3 className="text-xl font-semibold mb-3">Secrétariat</h3>
              <p className="text-white/80">Administrez les inscriptions et gérez les dossiers étudiants.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900/80 backdrop-blur-sm text-white py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p>© 2026 DGEI - Département de Génie Électrique et Informatique</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;