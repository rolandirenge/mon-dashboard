import { useState } from 'react';
import { FaSearch, FaPlus, FaEdit, FaTrash, FaBook, FaChalkboardTeacher } from 'react-icons/fa';

function Courses() {
  const [courses, setCourses] = useState([
    { 
      id: 1, 
      code: "INF-101", 
      intitule: "Algorithmique et Programmation", 
      credits: 4,
      enseignant: "Prof. Martin",
      semestre: "S1",
      promotion: "L1",
      etudiants: 98
    },
    { 
      id: 2, 
      code: "INF-201", 
      intitule: "Base de données", 
      credits: 3,
      enseignant: "Prof. Dubois",
      semestre: "S2",
      promotion: "L2",
      etudiants: 85
    },
    { 
      id: 3, 
      code: "INF-301", 
      intitule: "Réseaux informatiques", 
      credits: 4,
      enseignant: "Prof. Bernard",
      semestre: "S1",
      promotion: "L3",
      etudiants: 62
    },
    { 
      id: 4, 
      code: "INF-202", 
      intitule: "Programmation Web", 
      credits: 3,
      enseignant: "Prof. Martin",
      semestre: "S2",
      promotion: "L2",
      etudiants: 85
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterPromo, setFilterPromo] = useState('tous');

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.intitule.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.enseignant.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesPromo = filterPromo === 'tous' || course.promotion === filterPromo;
    
    return matchesSearch && matchesPromo;
  });

  const stats = {
    total: courses.length,
    totalCredits: courses.reduce((acc, c) => acc + c.credits, 0),
    totalEtudiants: courses.reduce((acc, c) => acc + c.etudiants, 0),
    moyenneParCours: Math.round(courses.reduce((acc, c) => acc + c.etudiants, 0) / courses.length)
  };

  return (
    <div className="p-8">
      {/* En-tête */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Gestion des cours</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
          <FaPlus /> Nouveau cours
        </button>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500">Total cours</p>
          <p className="text-2xl font-bold">{stats.total}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500">Crédits totaux</p>
          <p className="text-2xl font-bold text-blue-600">{stats.totalCredits}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500">Étudiants inscrits</p>
          <p className="text-2xl font-bold text-green-600">{stats.totalEtudiants}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500">Moy./cours</p>
          <p className="text-2xl font-bold text-purple-600">{stats.moyenneParCours}</p>
        </div>
      </div>

      {/* Recherche et filtres */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher par code, intitulé ou enseignant..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select
            value={filterPromo}
            onChange={(e) => setFilterPromo(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="tous">Toutes promotions</option>
            <option value="L1">L1</option>
            <option value="L2">L2</option>
            <option value="L3">L3</option>
          </select>
        </div>
      </div>

      {/* Liste des cours */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCourses.map(course => (
          <div key={course.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FaBook className="text-blue-600" />
                  <span className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
                    {course.code}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{course.intitule}</h3>
              </div>
              <div className="flex gap-2">
                <button className="text-blue-600 hover:text-blue-800"><FaEdit /></button>
                <button className="text-red-600 hover:text-red-800"><FaTrash /></button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Crédits</p>
                <p className="font-semibold">{course.credits} ECTS</p>
              </div>
              <div>
                <p className="text-gray-500">Semestre</p>
                <p className="font-semibold">{course.semestre}</p>
              </div>
              <div>
                <p className="text-gray-500">Promotion</p>
                <p className="font-semibold">{course.promotion}</p>
              </div>
              <div>
                <p className="text-gray-500">Étudiants</p>
                <p className="font-semibold">{course.etudiants}</p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2 text-gray-600">
                <FaChalkboardTeacher />
                <span className="text-sm">{course.enseignant}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;