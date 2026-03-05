import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function Home() {
  const { user } = useAuth();

  // ✅ PLUS DE REDIRECTION AUTOMATIQUE
  // On affiche toujours la page d'accueil, même si connecté

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Navigation simple - adaptée selon connexion */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">DGEI</h1>
          
          {/* Menu adapté selon l'état de connexion */}
          <div className="space-x-4">
            {user ? (
              // Si connecté → lien vers dashboard
              <Link 
                to="/dashboard" 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Mon Dashboard
              </Link>
            ) : (
              // Si pas connecté → boutons connexion/inscription
              <>
                <Link to="/auth/login" className="text-gray-600 hover:text-blue-600">
                  Connexion
                </Link>
                <Link 
                  to="/auth/register" 
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Inscription
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Bienvenue sur la plateforme académique
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Gérez vos notes, consultez vos résultats, téléchargez vos documents officiels
          </p>
          
          {/* Si pas connecté, afficher les boutons de connexion */}
          {!user && (
            <div className="flex gap-4 justify-center">
              <Link
                to="/auth/login"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
              >
                Connexion Étudiant
              </Link>
              <Link
                to="/auth/login"
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700"
              >
                Connexion Enseignant
              </Link>
            </div>
          )}

          {/* Si connecté, message de bienvenue */}
          {user && (
            <div className="text-center">
              <p className="text-xl text-gray-700 mb-4">
                Bon retour parmi nous, <span className="font-semibold text-blue-600">{user.nom}</span> !
              </p>
              <Link
                to="/dashboard"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700"
              >
                Accéder à mon espace
              </Link>
            </div>
          )}
        </div>

        {/* Cartes d'information (visibles pour tous) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Étudiants</h3>
            <p className="text-gray-600">Consultez vos notes, résultats et documents officiels en temps réel.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Enseignants</h3>
            <p className="text-gray-600">Gérez vos cours, saisissez les notes et suivez la progression.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Secrétariat</h3>
            <p className="text-gray-600">Administrez les inscriptions et gérez les dossiers étudiants.</p>
          </div>
        </div>
      </div>

      {/* Footer simple */}
      <footer className="bg-gray-900 text-white py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2026 DGEI - Département de Génie Électrique et Informatique</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;