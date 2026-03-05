import { useState } from 'react';
import { 
  FaBell, 
  FaCheckCircle, 
  FaExclamationTriangle, 
  FaInfoCircle, 
  FaCalendarAlt,
  FaStar,
  FaTrash,
  FaEnvelope,
  FaEnvelopeOpen
} from 'react-icons/fa';

function Notifications() {
  const [filter, setFilter] = useState('toutes');
  
  // Données simulées des notifications
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'success',
      title: 'Notes publiées',
      message: 'Les notes de Programmation Web (L3) ont été publiées.',
      date: '2026-03-05T10:30:00',
      read: false,
      important: true,
      action: 'Voir les notes'
    },
    {
      id: 2,
      type: 'info',
      title: 'Délibération à venir',
      message: 'La délibération du L2 Informatique est prévue pour le 15 Juin 2026.',
      date: '2026-03-04T14:20:00',
      read: false,
      important: false,
      action: 'Ajouter au calendrier'
    },
    {
      id: 3,
      type: 'warning',
      title: 'Document manquant',
      message: 'Votre attestation de scolarité n\'a pas encore été téléchargée.',
      date: '2026-03-03T09:15:00',
      read: true,
      important: true,
      action: 'Télécharger'
    },
    {
      id: 4,
      type: 'success',
      title: 'Inscription confirmée',
      message: 'Votre inscription pour le semestre 2 a été confirmée.',
      date: '2026-03-02T16:45:00',
      read: true,
      important: false,
      action: 'Voir détails'
    },
    {
      id: 5,
      type: 'info',
      title: 'Nouveau cours disponible',
      message: 'Le cours "Intelligence Artificielle" est maintenant disponible.',
      date: '2026-03-01T11:30:00',
      read: false,
      important: false,
      action: 'Consulter'
    },
    {
      id: 6,
      type: 'warning',
      title: 'Date limite approche',
      message: 'La date limite de paiement des frais de laboratoire est dans 3 jours.',
      date: '2026-02-28T13:20:00',
      read: false,
      important: true,
      action: 'Payer maintenant'
    },
  ]);

  const getTypeIcon = (type) => {
    switch(type) {
      case 'success': return <FaCheckCircle className="text-green-500" />;
      case 'warning': return <FaExclamationTriangle className="text-yellow-500" />;
      case 'info': return <FaInfoCircle className="text-blue-500" />;
      default: return <FaBell className="text-gray-500" />;
    }
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'success': return 'bg-green-50 border-green-200';
      case 'warning': return 'bg-yellow-50 border-yellow-200';
      case 'info': return 'bg-blue-50 border-blue-200';
      default: return 'bg-gray-50 border-gray-200';
    }
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const filteredNotifications = notifications.filter(n => {
    if (filter === 'non-lues') return !n.read;
    if (filter === 'importantes') return n.important;
    return true;
  });

  const stats = {
    total: notifications.length,
    nonLues: notifications.filter(n => !n.read).length,
    importantes: notifications.filter(n => n.important).length,
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now - date;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) {
      return `Aujourd'hui à ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
    } else if (days === 1) {
      return 'Hier';
    } else if (days < 7) {
      return `Il y a ${days} jours`;
    } else {
      return date.toLocaleDateString('fr-FR');
    }
  };

  return (
    <div className="p-8">
      {/* En-tête */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Notifications</h1>
          <p className="text-gray-600">Centre de notifications et alertes</p>
        </div>
        <button 
          onClick={markAllAsRead}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
        >
          <FaEnvelopeOpen /> Tout marquer comme lu
        </button>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500">Total notifications</p>
          <p className="text-2xl font-bold">{stats.total}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500">Non lues</p>
          <p className="text-2xl font-bold text-blue-600">{stats.nonLues}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500">Importantes</p>
          <p className="text-2xl font-bold text-yellow-600">{stats.importantes}</p>
        </div>
      </div>

      {/* Filtres */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="flex gap-4">
          <button
            onClick={() => setFilter('toutes')}
            className={`px-4 py-2 rounded-lg transition ${
              filter === 'toutes' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Toutes
          </button>
          <button
            onClick={() => setFilter('non-lues')}
            className={`px-4 py-2 rounded-lg transition ${
              filter === 'non-lues' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Non lues
          </button>
          <button
            onClick={() => setFilter('importantes')}
            className={`px-4 py-2 rounded-lg transition ${
              filter === 'importantes' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Importantes
          </button>
        </div>
      </div>

      {/* Liste des notifications */}
      <div className="space-y-4">
        {filteredNotifications.map(notification => (
          <div
            key={notification.id}
            className={`bg-white border-l-4 rounded-lg shadow p-6 transition hover:shadow-md ${
              !notification.read ? 'border-l-blue-500' : 'border-l-gray-300'
            }`}
          >
            <div className="flex items-start gap-4">
              {/* Icône */}
              <div className="text-2xl">
                {getTypeIcon(notification.type)}
              </div>

              {/* Contenu */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {notification.title}
                  </h3>
                  {notification.important && (
                    <span className="flex items-center gap-1 text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full text-xs">
                      <FaStar size={12} /> Important
                    </span>
                  )}
                  {!notification.read && (
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                      Nouveau
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 mb-3">{notification.message}</p>
                
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1 text-gray-500">
                    <FaCalendarAlt /> {formatDate(notification.date)}
                  </span>
                  {notification.action && (
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      {notification.action}
                    </button>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                {!notification.read && (
                  <button
                    onClick={() => markAsRead(notification.id)}
                    className="text-gray-400 hover:text-blue-600 transition"
                    title="Marquer comme lu"
                  >
                    <FaEnvelope size={18} />
                  </button>
                )}
                <button
                  onClick={() => deleteNotification(notification.id)}
                  className="text-gray-400 hover:text-red-600 transition"
                  title="Supprimer"
                >
                  <FaTrash size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}

        {filteredNotifications.length === 0 && (
          <div className="bg-white p-12 rounded-lg shadow text-center">
            <FaBell className="text-6xl text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Aucune notification
            </h3>
            <p className="text-gray-500">
              Vous n'avez aucune notification pour le moment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Notifications;