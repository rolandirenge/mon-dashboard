import { useState } from 'react';
import { FaSearch, FaFilePdf, FaDownload, FaEye, FaPrint, FaHistory } from 'react-icons/fa';

function Transcripts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('tous');

  // Données simulées des documents
  const [documents] = useState([
    {
      id: 1,
      etudiant: "Roland Irenge",
      matricule: "2024-001",
      type: "Relevé de notes",
      promotion: "L2 Informatique",
      semestre: "S1 2025-2026",
      date: "2026-03-01",
      taille: "245 KB"
    },
    {
      id: 2,
      etudiant: "Marcelline Rusize",
      matricule: "2024-002",
      type: "Attestation de scolarité",
      promotion: "L2 Informatique",
      semestre: "2025-2026",
      date: "2026-02-28",
      taille: "180 KB"
    },
    {
      id: 3,
      etudiant: "Enanga Dani",
      matricule: "2024-003",
      type: "Relevé de notes",
      promotion: "L1 Informatique",
      semestre: "S2 2025-2026",
      date: "2026-02-25",
      taille: "230 KB"
    },
    {
      id: 4,
      etudiant: "Kabongo Kupa",
      matricule: "2024-004",
      type: "Diplôme",
      promotion: "L3 Informatique",
      semestre: "2025-2026",
      date: "2026-02-20",
      taille: "520 KB"
    },
    {
      id: 5,
      etudiant: "Roland Irenge",
      matricule: "2024-001",
      type: "Attestation de réussite",
      promotion: "L2 Informatique",
      semestre: "S1 2025-2026",
      date: "2026-02-15",
      taille: "195 KB"
    },
  ]);

  const [recentActivity] = useState([
    { id: 1, action: "Génération de relevé", user: "Roland Irenge", time: "Il y a 5 min" },
    { id: 2, action: "Téléchargement d'attestation", user: "Marcelline Rusize", time: "Il y a 2h" },
    { id: 3, action: "Nouveau document ajouté", user: "Admin", time: "Il y a 1 jour" },
  ]);

  const filteredDocs = documents.filter(doc => {
    const matchesSearch = doc.etudiant.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.matricule.includes(searchTerm) ||
                         doc.type.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = filterType === 'tous' || doc.type === filterType;
    
    return matchesSearch && matchesType;
  });

  const stats = {
    total: documents.length,
    relevés: documents.filter(d => d.type.includes("Relevé")).length,
    attestations: documents.filter(d => d.type.includes("Attestation")).length,
    diplomes: documents.filter(d => d.type === "Diplôme").length,
  };

  const getTypeColor = (type) => {
    if (type.includes("Relevé")) return "bg-blue-100 text-blue-800";
    if (type.includes("Attestation")) return "bg-green-100 text-green-800";
    if (type === "Diplôme") return "bg-purple-100 text-purple-800";
    return "bg-gray-100 text-gray-800";
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Documents officiels</h1>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500">Total documents</p>
          <p className="text-2xl font-bold">{stats.total}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500">Relevés de notes</p>
          <p className="text-2xl font-bold text-blue-600">{stats.relevés}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500">Attestations</p>
          <p className="text-2xl font-bold text-green-600">{stats.attestations}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500">Diplômes</p>
          <p className="text-2xl font-bold text-purple-600">{stats.diplomes}</p>
        </div>
      </div>

      {/* Barre de recherche et filtres */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher par étudiant, matricule ou type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="tous">Tous les types</option>
            <option value="Relevé de notes">Relevés de notes</option>
            <option value="Attestation de scolarité">Attestations</option>
            <option value="Diplôme">Diplômes</option>
          </select>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Générer un document
          </button>
        </div>
      </div>

      {/* Grille principale */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Liste des documents */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Étudiant</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Type</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Date</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Taille</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredDocs.map(doc => (
                  <tr key={doc.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-gray-800">{doc.etudiant}</p>
                        <p className="text-xs text-gray-500">{doc.matricule}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getTypeColor(doc.type)}`}>
                        {doc.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {new Date(doc.date).toLocaleDateString('fr-FR')}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{doc.taille}</td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-800" title="Aperçu">
                          <FaEye />
                        </button>
                        <button className="text-green-600 hover:text-green-800" title="Télécharger">
                          <FaDownload />
                        </button>
                        <button className="text-gray-600 hover:text-gray-800" title="Imprimer">
                          <FaPrint />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Activités récentes */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <FaHistory /> Activités récentes
          </h3>
          <div className="space-y-4">
            {recentActivity.map(activity => (
              <div key={activity.id} className="border-l-4 border-blue-500 pl-4 py-2">
                <p className="font-medium text-gray-800">{activity.action}</p>
                <p className="text-sm text-gray-500">par {activity.user}</p>
                <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transcripts;