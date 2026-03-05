import { useState } from 'react';
import { FaSearch, FaPlus, FaEdit, FaTrash, FaEye } from 'react-icons/fa';

function Students() {
  const [students, setStudents] = useState([
    { 
      id: 1, 
      nom: "Roland Irenge", 
      matricule: "2024-001", 
      promotion: "L2 Informatique", 
      email: "roland.irenge@univ.cd",
      statut: "actif"
    },
    { 
      id: 2, 
      nom: "Marcelline Rusize", 
      matricule: "2024-002", 
      promotion: "L2 Informatique", 
      email: "marcelline.rusize@univ.cd",
      statut: "actif"
    },
    { 
      id: 3, 
      nom: "Enanga Dani", 
      matricule: "2024-003", 
      promotion: "L1 Informatique", 
      email: "enanga.dani@univ.cd",
      statut: "actif"
    },
    { 
      id: 4, 
      nom: "Kabongo Kupa", 
      matricule: "2024-004", 
      promotion: "L3 Informatique", 
      email: "kabongo.kupa@univ.cd",
      statut: "inactif"
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudents = students.filter(student => 
    student.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.matricule.includes(searchTerm)
  );

  const stats = {
    total: students.length,
    l1: students.filter(s => s.promotion.includes('L1')).length,
    l2: students.filter(s => s.promotion.includes('L2')).length,
    l3: students.filter(s => s.promotion.includes('L3')).length,
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Gestion des étudiants</h1>
      
      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500">Total</p>
          <p className="text-2xl font-bold">{stats.total}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500">L1</p>
          <p className="text-2xl font-bold text-blue-600">{stats.l1}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500">L2</p>
          <p className="text-2xl font-bold text-purple-600">{stats.l2}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500">L3</p>
          <p className="text-2xl font-bold text-green-600">{stats.l3}</p>
        </div>
      </div>

      {/* Recherche */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="relative">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher un étudiant..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>

      {/* Tableau */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Matricule</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Nom</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Promotion</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Statut</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredStudents.map(student => (
              <tr key={student.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">{student.matricule}</td>
                <td className="px-6 py-4 font-medium">{student.nom}</td>
                <td className="px-6 py-4">{student.promotion}</td>
                <td className="px-6 py-4">{student.email}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    student.statut === 'actif' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {student.statut}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Students;