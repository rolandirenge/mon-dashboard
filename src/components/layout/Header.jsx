import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';  // ← Chemin corrigé
import { FaUser, FaSignOutAlt } from 'react-icons/fa';

function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600 hover:text-blue-800">
          Département de génie éléctrique et informatique - Dashboard
        </Link>

        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <Link to="/dashboard" className="text-gray-600 hover:text-blue-600 flex items-center gap-1">
                <FaUser size={14} />
                <span className="hidden md:inline">{user.nom?.split(' ')[0] || 'Dashboard'}</span>
              </Link>
              <button onClick={logout} className="text-gray-600 hover:text-red-600 flex items-center gap-1">
                <FaSignOutAlt size={16} />
                <span className="hidden md:inline">Déconnexion</span>
              </button>
            </>
          ) : (
            <>
              <Link to="/auth/login" className="text-gray-600 hover:text-blue-600">Connexion</Link>
              <Link to="/auth/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Inscription
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;