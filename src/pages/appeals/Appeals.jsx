import { useState } from 'react';
import { FaSearch, FaEye, FaCheck, FaTimes } from 'react-icons/fa';

function Appeals() {
  const [appeals] = useState([
    { id: 1, etudiant: "Roland Irenge", matricule: "2024-001", cours: "Algorithmique", note: 8, date: "2026-03-01", statut: "En attente" },
    { id: 2, etudiant: "Enanga Dani", matricule: "2024-003", cours: "Réseaux", note: 9, date: "2026-03-02", statut: "En cours" },
    { id: 3, etudiant: "Kabongo Kupa", matricule: "2024-004", cours: "Programmation Web", note: 7, date: "2026-03-03", statut: "Traité" },
  ]);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Recours académiques</h1>

      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="relative">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input type="text" placeholder="Rechercher un recours..." className="w-full pl-10 pr-4 py-2 border rounded-lg" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Matricule</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Étudiant</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Cours</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Note</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Date</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Statut</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {appeals.map(appeal => (
              <tr key={appeal.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-mono text-sm">{appeal.matricule}</td>
                <td className="px-6 py-4 font-medium">{appeal.etudiant}</td>
                <td className="px-6 py-4">{appeal.cours}</td>
                <td className="px-6 py-4 text-red-600 font-bold">{appeal.note}/20</td>
                <td className="px-6 py-4">{appeal.date}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    appeal.statut === 'En attente' ? 'bg-yellow-100 text-yellow-800' :
                    appeal.statut === 'En cours' ? 'bg-blue-100 text-blue-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {appeal.statut}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button className="text-blue-600"><FaEye /></button>
                    <button className="text-green-600"><FaCheck /></button>
                    <button className="text-red-600"><FaTimes /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Appeals;