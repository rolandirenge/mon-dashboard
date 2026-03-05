import { useState } from 'react';
import { 
  FaUsers, 
  FaUserCog, 
  FaChartBar, 
  FaCalendarAlt, 
  FaCog,
  FaShieldAlt,
  FaDatabase,
  FaHistory,
  FaDownload,
  FaPlus,
  FaEdit,
  FaTrash
} from 'react-icons/fa';

function Admin() {
  const [activeTab, setActiveTab] = useState('users');

  // Données simulées
  const [users] = useState([
    { id: 1, nom: "Admin Principal", email: "admin@univ.cd", role: "Super Admin", lastLogin: "2026-03-05", status: "actif" },
    { id: 2, nom: "Prof. Martin", email: "martin@univ.cd", role: "Enseignant", lastLogin: "2026-03-04", status: "actif" },
    { id: 3, nom: "Secrétaire Marie", email: "marie@univ.cd", role: "Secrétaire", lastLogin: "2026-03-05", status: "actif" },
    { id: 4, nom: "Prof. Dubois", email: "dubois@univ.cd", role: "Enseignant", lastLogin: "2026-03-03", status: "inactif" },
    { id: 5, nom: "Tech Support", email: "support@univ.cd", role: "Technicien", lastLogin: "2026-03-02", status: "actif" },
  ]);

  const [logs] = useState([
    { id: 1, user: "Admin Principal", action: "Modification des paramètres", date: "2026-03-05 10:30", ip: "192.168.1.45" },
    { id: 2, user: "Secrétaire Marie", action: "Ajout d'un étudiant", date: "2026-03-05 09:15", ip: "192.168.1.23" },
    { id: 3, user: "Prof. Martin", action: "Publication des notes", date: "2026-03-04 16:20", ip: "192.168.1.67" },
    { id: 4, user: "Admin Principal", action: "Sauvegarde de la base", date: "2026-03-04 02:00", ip: "192.168.1.45" },
    { id: 5, user: "Tech Support", action: "Maintenance système", date: "2026-03-03 14:30", ip: "192.168.1.89" },
  ]);

  const [stats] = useState({
    totalUsers: 45,
    activeUsers: 38,
    totalStudents: 245,
    totalCourses: 24,
    totalTeachers: 18,
    storageUsed: "2.4 GB",
    lastBackup: "2026-03-05 02:00",
    systemStatus: "optimal"
  });

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Administration</h1>

      {/* Statistiques globales */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center gap-3">
            <FaUsers className="text-blue-600 text-xl" />
            <div>
              <p className="text-sm text-gray-500">Utilisateurs</p>
              <p className="text-2xl font-bold">{stats.totalUsers}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center gap-3">
            <FaDatabase className="text-green-600 text-xl" />
            <div>
              <p className="text-sm text-gray-500">Stockage utilisé</p>
              <p className="text-2xl font-bold">{stats.storageUsed}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center gap-3">
            <FaCalendarAlt className="text-purple-600 text-xl" />
            <div>
              <p className="text-sm text-gray-500">Dernière sauvegarde</p>
              <p className="text-2xl font-bold">05/03/2026</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center gap-3">
            <FaShieldAlt className="text-green-600 text-xl" />
            <div>
              <p className="text-sm text-gray-500">État système</p>
              <p className="text-2xl font-bold text-green-600">{stats.systemStatus}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Onglets de navigation */}
      <div className="bg-white border-b border-gray-200 mb-6">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('users')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'users'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <FaUserCog className="inline mr-2" /> Gestion utilisateurs
          </button>
          <button
            onClick={() => setActiveTab('logs')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'logs'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <FaHistory className="inline mr-2" /> Journal d'activité
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'settings'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <FaCog className="inline mr-2" /> Paramètres système
          </button>
        </nav>
      </div>

      {/* Contenu des onglets */}
      <div className="bg-white rounded-lg shadow">
        {/* Onglet Utilisateurs */}
        {activeTab === 'users' && (
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Gestion des utilisateurs</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
                <FaPlus /> Nouvel utilisateur
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Nom</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Email</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Rôle</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Dernière connexion</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Statut</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {users.map(user => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">{user.nom}</td>
                      <td className="px-6 py-4">{user.email}</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{user.lastLogin}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          user.status === 'actif' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-800"><FaEdit /></button>
                          <button className="text-red-600 hover:text-red-800"><FaTrash /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Onglet Journal */}
        {activeTab === 'logs' && (
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Journal d'activité</h2>
            <div className="space-y-4">
              {logs.map(log => (
                <div key={log.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <FaHistory className="text-blue-600 mt-1" />
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{log.action}</p>
                    <p className="text-sm text-gray-600">par {log.user}</p>
                    <div className="flex gap-4 mt-2 text-xs text-gray-500">
                      <span>{log.date}</span>
                      <span>IP: {log.ip}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Onglet Paramètres */}
        {activeTab === 'settings' && (
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Paramètres système</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-700 mb-3">Sauvegarde</h3>
                  <p className="text-sm text-gray-600 mb-2">Dernière sauvegarde: {stats.lastBackup}</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
                    <FaDownload /> Sauvegarder maintenant
                  </button>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-700 mb-3">Maintenance</h3>
                  <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700">
                    Nettoyer le cache
                  </button>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-3">Informations système</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="text-gray-500">Version:</span> 1.0.0</p>
                  <p><span className="text-gray-500">Environnement:</span> Production</p>
                  <p><span className="text-gray-500">Dernière mise à jour:</span> 05/03/2026</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;