import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { 
  FaHome, 
  FaUser,  // ← Ajoute cette icône pour le profil
  FaUserGraduate, 
  FaBook, 
  FaClipboardList, 
  FaFilePdf, 
  FaGavel,
  FaBalanceScale,
  FaBell, 
  FaCog,
  FaGlobe
} from 'react-icons/fa';

function Sidebar() {
  const location = useLocation();
  const { user } = useAuth();

  // Définition de tous les menus avec leurs rôles autorisés
  const menuItems = [
    { path: '/', icon: <FaGlobe />, label: 'Accueil public', roles: ['admin', 'secretary', 'teacher', 'student', 'public'] },
    { path: '/auth/profile', icon: <FaUser />, label: 'Profil', roles: ['admin', 'secretary', 'teacher', 'student'] }, // ← AJOUTÉ
    { path: '/dashboard', icon: <FaHome />, label: 'Dashboard', roles: ['admin', 'secretary', 'teacher', 'student'] },
    { path: '/students', icon: <FaUserGraduate />, label: 'Étudiants', roles: ['admin', 'secretary', 'teacher'] },
    { path: '/courses', icon: <FaBook />, label: 'Cours', roles: ['admin', 'secretary', 'teacher', 'student'] },
    { path: '/grades', icon: <FaClipboardList />, label: 'Notes et résultats', roles: ['admin', 'secretary', 'teacher', 'student'] },
    { path: '/deliberations', icon: <FaGavel />, label: 'Délibérations', roles: ['admin', 'secretary'] },
    { path: '/transcripts', icon: <FaFilePdf />, label: 'Documents', roles: ['admin', 'secretary', 'student'] },
    { path: '/appeals', icon: <FaBalanceScale />, label: 'Recours', roles: ['admin', 'secretary', 'teacher', 'student'] },
    { path: '/notifications', icon: <FaBell />, label: 'Notifications', roles: ['admin', 'secretary', 'teacher', 'student'] },
    { path: '/admin', icon: <FaCog />, label: 'Administration', roles: ['admin'] },
  ];

  // Filtrer les menus selon le rôle de l'utilisateur connecté
  const filteredMenu = menuItems.filter(item => {
    if (!user) return item.path === '/';
    return item.roles.includes(user.role);
  });

  return (
    <aside className="w-64 bg-white shadow-lg h-full min-h-screen">
      <div className="p-6">
        <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Menu
        </h2>
        {user && (
          <div className="mt-3 p-2 bg-blue-50 rounded-lg">
            <p className="text-xs text-gray-500">Connecté en tant que</p>
            <p className="text-sm font-semibold text-blue-600 capitalize">
              {user.role === 'admin' ? 'Administrateur' : 
               user.role === 'secretary' ? 'Secrétaire' :
               user.role === 'teacher' ? 'Enseignant' : 'Étudiant'}
            </p>
          </div>
        )}
      </div>

      <nav className="px-4 pb-6">
        {filteredMenu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg mb-1 transition
              ${location.pathname === item.path 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-sm">{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;