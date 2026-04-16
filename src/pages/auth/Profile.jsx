import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaTag, FaPhone, FaCalendar, FaEdit, FaKey, FaGraduationCap, FaHistory } from 'react-icons/fa';

function Profile() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('info');

  if (!user) return <div className="p-8 text-center">Chargement...</div>;

  const getRoleBadge = (role) => {
    switch(role) {
      case 'admin': return 'bg-purple-100 text-purple-800';
      case 'secretary': return 'bg-blue-100 text-blue-800';
      case 'teacher': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRoleLabel = (role) => {
    switch(role) {
      case 'admin': return 'Administrateur';
      case 'secretary': return 'Secrétaire';
      case 'teacher': return 'Enseignant';
      default: return 'Étudiant';
    }
  };

  // Déterminer la promotion en fonction du rôle et de l'utilisateur
  const getPromotion = () => {
    if (user.role === 'student') {
      // Simulation de promotions différentes selon l'étudiant
      switch(user.email) {
        case 'student@email.com':
          return 'L2 Informatique';
        case 'roland@email.com':
          return 'L2 Informatique';
        case 'marcelline@email.com':
          return 'L2 Informatique';
        default:
          return 'L1 Informatique';
      }
    } else if (user.role === 'teacher') {
      return 'Corps enseignant';
    } else if (user.role === 'secretary') {
      return 'Secrétariat académique';
    } else {
      return 'Administration';
    }
  };

  // Données simulées du profil
  const profileData = {
    ...user,
    telephone: user.telephone || '+243 812 345 678',
    dateNaissance: '15/05/1998',
    adresse: 'Lubumbashi, RDC',
    matricule: user.role === 'student' ? '2024-001' : 'ENS-001',
    departement: 'Génie Électrique et Informatique',
    dateInscription: '01/09/2024',
    derniereConnexion: '05/03/2026 14:30',
    moyenne: user.role === 'student' ? '14.5/20' : null,
    credits: user.role === 'student' ? '45/60' : null,
    rang: user.role === 'student' ? '12e' : null,
    promotion: getPromotion() // ✅ AJOUT DE LA PROMOTION
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* En-tête du profil */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-12 text-white">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center border-4 border-white">
                <span className="text-4xl font-bold">
                  {profileData.nom?.charAt(0) || 'U'}
                </span>
              </div>
              <div>
                <h1 className="text-3xl font-bold">{profileData.nom}</h1>
                <p className="text-white/80 mt-1">{profileData.email}</p>
                <div className="flex flex-wrap gap-3 mt-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getRoleBadge(profileData.role)} text-gray-800`}>
                    {getRoleLabel(profileData.role)}
                  </span>
                  {profileData.role === 'student' && (
                    <span className="bg-blue-500/30 text-white px-3 py-1 rounded-full text-sm">
                      Matricule: {profileData.matricule}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation par onglets */}
          <div className="flex overflow-x-auto border-b border-gray-200 px-8">
            <button
              onClick={() => setActiveTab('info')}
              className={`py-4 px-6 font-medium text-sm border-b-2 transition whitespace-nowrap ${
                activeTab === 'info' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <FaUser className="inline mr-2" /> Informations
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`py-4 px-6 font-medium text-sm border-b-2 transition whitespace-nowrap ${
                activeTab === 'security' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <FaKey className="inline mr-2" /> Sécurité
            </button>
            {profileData.role === 'student' && (
              <button
                onClick={() => setActiveTab('academic')}
                className={`py-4 px-6 font-medium text-sm border-b-2 transition whitespace-nowrap ${
                  activeTab === 'academic' 
                    ? 'border-blue-600 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <FaGraduationCap className="inline mr-2" /> Parcours
              </button>
            )}
            <button
              onClick={() => setActiveTab('activity')}
              className={`py-4 px-6 font-medium text-sm border-b-2 transition whitespace-nowrap ${
                activeTab === 'activity' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <FaHistory className="inline mr-2" /> Activité
            </button>
          </div>
        </div>

        {/* Contenu des onglets */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Onglet Informations */}
          {activeTab === 'info' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Informations personnelles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <FaUser className="text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-500">Nom complet</p>
                      <p className="font-semibold text-gray-800">{profileData.nom}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <FaEnvelope className="text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-semibold text-gray-800">{profileData.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <FaPhone className="text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-500">Téléphone</p>
                      <p className="font-semibold text-gray-800">{profileData.telephone}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <FaCalendar className="text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-500">Date de naissance</p>
                      <p className="font-semibold text-gray-800">{profileData.dateNaissance}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <FaTag className="text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-500">Département</p>
                      <p className="font-semibold text-gray-800">{profileData.departement}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <FaGraduationCap className="text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-500">
                        {user.role === 'student' ? 'Promotion' : 'Fonction'}
                      </p>
                      <p className="font-semibold text-gray-800">{profileData.promotion}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <Link
                  to="/auth/profile/edit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
                >
                  <FaEdit /> Modifier le profil
                </Link>
              </div>
            </div>
          )}

          {/* Onglet Sécurité */}
          {activeTab === 'security' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Sécurité</h2>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500 mb-2">Dernière connexion</p>
                  <p className="font-semibold">{profileData.derniereConnexion}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500 mb-2">Mot de passe</p>
                  <div className="flex justify-between items-center">
                    <p className="font-mono">••••••••</p>
                    <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                      <FaKey /> Changer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Onglet Parcours académique (pour étudiants) */}
          {activeTab === 'academic' && profileData.role === 'student' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Parcours académique</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-500">Moyenne</p>
                  <p className="text-2xl font-bold text-blue-600">{profileData.moyenne}</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-gray-500">Crédits</p>
                  <p className="text-2xl font-bold text-green-600">{profileData.credits}</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <p className="text-sm text-gray-500">Rang</p>
                  <p className="text-2xl font-bold text-purple-600">{profileData.rang}</p>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500 mb-2">Promotion actuelle</p>
                <p className="font-semibold text-lg">{profileData.promotion}</p>
              </div>
            </div>
          )}

          {/* Onglet Activité */}
          {activeTab === 'activity' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Activité récente</h2>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-medium">Connexion</p>
                  <p className="text-sm text-gray-500">Dernière connexion le {profileData.derniereConnexion}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-medium">Profil</p>
                  <p className="text-sm text-gray-500">Profil créé le {profileData.dateInscription}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bouton déconnexion */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={logout}
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Déconnexion
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;