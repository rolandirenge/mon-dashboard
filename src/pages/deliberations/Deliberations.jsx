import { useState } from 'react';
import { FaCalendarAlt, FaUsers, FaCheckCircle, FaTimesCircle, FaEye } from 'react-icons/fa';

function Deliberations() {
  const [sessions] = useState([
    { id: 1, promotion: "L3 Informatique", date: "15/06/2026", etudiants: 62, admis: 48, ajournes: 14, taux: 77, statut: "Prévue" },
    { id: 2, promotion: "L2 Informatique", date: "18/06/2026", etudiants: 85, admis: 0, ajournes: 0, taux: 0, statut: "À venir" },
    { id: 3, promotion: "L1 Informatique", date: "22/06/2026", etudiants: 98, admis: 0, ajournes: 0, taux: 0, statut: "À venir" },
  ]);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Délibérations</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Sessions prévues</h3>
          <p className="text-3xl font-bold text-blue-600">{sessions.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Étudiants concernés</h3>
          <p className="text-3xl font-bold text-purple-600">
            {sessions.reduce((acc, s) => acc + s.etudiants, 0)}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Taux réussite (L3)</h3>
          <p className="text-3xl font-bold text-green-600">{sessions[0].taux}%</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Promotion</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Date</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Étudiants</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Admis</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Ajournés</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Taux</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Statut</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {sessions.map(session => (
              <tr key={session.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">{session.promotion}</td>
                <td className="px-6 py-4">{session.date}</td>
                <td className="px-6 py-4">{session.etudiants}</td>
                <td className="px-6 py-4 text-green-600">{session.admis}</td>
                <td className="px-6 py-4 text-red-600">{session.ajournes}</td>
                <td className="px-6 py-4">{session.taux}%</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    session.statut === 'Prévue' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {session.statut}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-blue-600 hover:text-blue-800"><FaEye /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Deliberations;