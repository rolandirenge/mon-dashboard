import { useState } from 'react';
import { FaSearch, FaFilter, FaDownload, FaEye, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

function Grades() {
  const [selectedCourse, setSelectedCourse] = useState('all');
  const [selectedSemester, setSelectedSemester] = useState('all');

  // Données simulées des notes
  const [gradesData] = useState({
    courses: [
      { id: 1, code: "INF-101", name: "Algorithmique", promotion: "L1", moyenne: 14.2 },
      { id: 2, code: "INF-201", name: "Base de données", promotion: "L2", moyenne: 13.8 },
      { id: 3, code: "INF-202", name: "Programmation Web", promotion: "L2", moyenne: 15.5 },
      { id: 4, code: "INF-301", name: "Réseaux", promotion: "L3", moyenne: 12.9 },
    ],
    
    students: [
      { id: 1, nom: "Roland Irenge", matricule: "2024-001", notes: { "INF-101": 16, "INF-201": 15, "INF-202": 14, "INF-301": 16 } },
      { id: 2, nom: "Marcelline Rusize", matricule: "2024-002", notes: { "INF-101": 15, "INF-201": 16, "INF-202": 15, "INF-301": 14 } },
      { id: 3, nom: "Enanga Dani", matricule: "2024-003", notes: { "INF-101": 12, "INF-201": 11, "INF-202": 13, "INF-301": 10 } },
      { id: 4, nom: "Kabongo Kupa", matricule: "2024-004", notes: { "INF-101": 17, "INF-201": 18, "INF-202": 16, "INF-301": 17 } },
    ],

    statistics: {
      moyenneGenerale: 14.2,
      tauxReussite: 78,
      meilleureNote: 18,
      plusFaibleNote: 8
    }
  });

  // Calculer les statistiques par cours
  const courseStats = gradesData.courses.map(course => {
    const notes = gradesData.students.map(s => s.notes[course.code] || 0);
    const moyenne = notes.reduce((a, b) => a + b, 0) / notes.length;
    const reussite = notes.filter(n => n >= 10).length / notes.length * 100;
    return { ...course, moyenne: moyenne.toFixed(1), reussite: Math.round(reussite) };
  });

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Gestion des notes</h1>

      {/* Statistiques globales */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500">Moyenne générale</p>
          <p className="text-2xl font-bold text-blue-600">{gradesData.statistics.moyenneGenerale}/20</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500">Taux de réussite</p>
          <p className="text-2xl font-bold text-green-600">{gradesData.statistics.tauxReussite}%</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500">Meilleure note</p>
          <p className="text-2xl font-bold text-purple-600">{gradesData.statistics.meilleureNote}/20</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500">Plus faible note</p>
          <p className="text-2xl font-bold text-orange-600">{gradesData.statistics.plusFaibleNote}/20</p>
        </div>
      </div>

      {/* Filtres */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un étudiant..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg"
          >
            <option value="all">Tous les cours</option>
            {gradesData.courses.map(c => (
              <option key={c.id} value={c.code}>{c.code} - {c.name}</option>
            ))}
          </select>
          <select
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg"
          >
            <option value="all">Tous semestres</option>
            <option value="S1">Semestre 1</option>
            <option value="S2">Semestre 2</option>
          </select>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <FaFilter /> Filtrer
          </button>
        </div>
      </div>

      {/* Statistiques par cours */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {courseStats.map(course => (
          <div key={course.id} className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-gray-800">{course.code}</h3>
            <p className="text-sm text-gray-500 mb-2">{course.name}</p>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-500">Moyenne</p>
                <p className="text-lg font-bold text-blue-600">{course.moyenne}/20</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Réussite</p>
                <p className="text-lg font-bold text-green-600">{course.reussite}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tableau des notes */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Matricule</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Nom</th>
                {gradesData.courses.map(course => (
                  <th key={course.id} className="px-4 py-3 text-center text-sm font-medium text-gray-500">
                    {course.code}
                  </th>
                ))}
                <th className="px-4 py-3 text-center text-sm font-medium text-gray-500">Moyenne</th>
                <th className="px-4 py-3 text-center text-sm font-medium text-gray-500">Statut</th>
                <th className="px-4 py-3 text-center text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {gradesData.students.map(student => {
                const notes = Object.values(student.notes);
                const moyenne = (notes.reduce((a, b) => a + b, 0) / notes.length).toFixed(1);
                const estAdmis = parseFloat(moyenne) >= 10;

                return (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-mono text-sm">{student.matricule}</td>
                    <td className="px-6 py-4 font-medium">{student.nom}</td>
                    {gradesData.courses.map(course => (
                      <td key={course.id} className="px-4 py-4 text-center">
                        <span className={`font-semibold ${
                          student.notes[course.code] >= 10 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {student.notes[course.code] || '-'}
                        </span>
                      </td>
                    ))}
                    <td className="px-4 py-4 text-center font-bold">{moyenne}/20</td>
                    <td className="px-4 py-4 text-center">
                      {estAdmis ? (
                        <span className="inline-flex items-center gap-1 text-green-600">
                          <FaCheckCircle /> Admis
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-red-600">
                          <FaTimesCircle /> Ajourné
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-4 text-center">
                      <button className="text-blue-600 hover:text-blue-800 mx-1">
                        <FaEye />
                      </button>
                      <button className="text-green-600 hover:text-green-800 mx-1">
                        <FaDownload />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Grades;