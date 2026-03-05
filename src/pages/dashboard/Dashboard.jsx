import { useState } from 'react';
import { FaUsers, FaBook, FaChalkboardTeacher, FaCheckCircle, FaBell, FaCalendarAlt } from 'react-icons/fa';

function Dashboard() {
  const [stats] = useState({
    etudiants: 245,
    enseignants: 18,
    cours: 24,
    tauxReussite: 78
  });

  const [repartition] = useState([
    { promotion: 'L1 Informatique', count: 98, color: 'bg-blue-500', width: '40%' },
    { promotion: 'L2 Informatique', count: 85, color: 'bg-purple-500', width: '35%' },
    { promotion: 'L3 Informatique', count: 62, color: 'bg-green-500', width: '25%' },
  ]);

  const [activities] = useState([
    { id: 1, icon: <FaUsers className="text-blue-500" />, title: 'Nouvel étudiant inscrit', description: 'Roland Irene - L2', time: 'Il y a 5 min', bg: 'bg-blue-50' },
    { id: 2, icon: <FaBook className="text-green-500" />, title: 'Notes publiées', description: 'Programmation Web - L3', time: 'Il y a 2h', bg: 'bg-green-50' },
    { id: 3, icon: <FaCalendarAlt className="text-purple-500" />, title: 'Délibération prévue', description: 'L2 Informatique - 15 Juin', time: 'Dans 3 jours', bg: 'bg-purple-50' },
  ]);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* En-tête */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Tableau de bord</h1>
        <p className="text-gray-600 mt-1">Bienvenue sur votre espace personnel</p>
      </div>

      {/* Cartes de statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Carte Étudiants */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition border-l-4 border-blue-500">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <FaUsers className="text-blue-600 text-xl" />
            </div>
            <span className="text-green-500 text-sm font-semibold bg-green-50 px-2 py-1 rounded-full">
              +12%
            </span>
          </div>
          <p className="text-3xl font-bold text-gray-800">{stats.etudiants}</p>
          <p className="text-gray-500 text-sm mt-1">Étudiants inscrits</p>
        </div>

        {/* Carte Cours */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition border-l-4 border-purple-500">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <FaBook className="text-purple-600 text-xl" />
            </div>
            <span className="text-green-500 text-sm font-semibold bg-green-50 px-2 py-1 rounded-full">
              +3
            </span>
          </div>
          <p className="text-3xl font-bold text-gray-800">{stats.cours}</p>
          <p className="text-gray-500 text-sm mt-1">Cours disponibles</p>
        </div>

        {/* Carte Enseignants */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition border-l-4 border-green-500">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <FaChalkboardTeacher className="text-green-600 text-xl" />
            </div>
            <span className="text-gray-500 text-sm font-semibold bg-gray-100 px-2 py-1 rounded-full">
              6 permanents
            </span>
          </div>
          <p className="text-3xl font-bold text-gray-800">{stats.enseignants}</p>
          <p className="text-gray-500 text-sm mt-1">Enseignants</p>
        </div>

        {/* Carte Taux de réussite */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition border-l-4 border-orange-500">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-orange-100 rounded-lg">
              <FaCheckCircle className="text-orange-600 text-xl" />
            </div>
            <span className="text-green-500 text-sm font-semibold bg-green-50 px-2 py-1 rounded-full">
              +5%
            </span>
          </div>
          <p className="text-3xl font-bold text-gray-800">{stats.tauxReussite}%</p>
          <p className="text-gray-500 text-sm mt-1">Taux de réussite</p>
        </div>
      </div>

      {/* Section Répartition et Activités */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Répartition des étudiants */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Répartition des étudiants</h2>
          <div className="space-y-4">
            {repartition.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-gray-700">{item.promotion}</span>
                  <span className="text-gray-600">{item.count} étudiants</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className={`${item.color} h-2.5 rounded-full`} 
                    style={{ width: item.width }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activités récentes */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Activités récentes</h2>
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className={`${activity.bg} p-4 rounded-lg`}>
                <div className="flex items-start gap-3">
                  <div className="mt-1">{activity.icon}</div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{activity.title}</p>
                    <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                    <p className="text-xs text-gray-400 mt-2">{activity.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section supplémentaire - Dernières notes */}
      <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Dernières notes publiées</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">Algorithmique - L2</p>
            <p className="text-xl font-bold text-blue-600">16/20</p>
            <p className="text-xs text-gray-400 mt-1">Publié le 05/03</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">Base de données - L2</p>
            <p className="text-xl font-bold text-green-600">15/20</p>
            <p className="text-xs text-gray-400 mt-1">Publié le 05/03</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">Réseaux - L3</p>
            <p className="text-xl font-bold text-purple-600">14/20</p>
            <p className="text-xs text-gray-400 mt-1">Publié le 04/03</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;