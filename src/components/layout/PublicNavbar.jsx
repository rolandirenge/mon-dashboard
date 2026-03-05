import { Link } from 'react-router-dom';

function PublicNavbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">
          DGEI
        </Link>
        <div className="space-x-4">
          <Link to="/auth/login" className="text-gray-600 hover:text-blue-600">
            Connexion
          </Link>
          <Link 
            to="/auth/register" 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Inscription
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default PublicNavbar;