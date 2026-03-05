import { FaGraduationCap, FaUsers, FaFilePdf, FaChartLine, FaCalendarCheck, FaBell } from 'react-icons/fa';

function FeaturesGrid() {
  const features = [
    { icon: <FaGraduationCap />, title: "Gestion des notes", desc: "Saisie simplifiée, calcul automatique", color: "bg-blue-100 text-blue-600" },
    { icon: <FaUsers />, title: "Délibérations", desc: "Processus transparent et sécurisé", color: "bg-purple-100 text-purple-600" },
    { icon: <FaFilePdf />, title: "Documents officiels", desc: "Relevés PDF en un clic", color: "bg-green-100 text-green-600" },
    { icon: <FaChartLine />, title: "Statistiques", desc: "Suivi des performances", color: "bg-yellow-100 text-yellow-600" },
    { icon: <FaCalendarCheck />, title: "Calendrier", desc: "Examens et délibérations", color: "bg-red-100 text-red-600" },
    { icon: <FaBell />, title: "Notifications", desc: "Alertes en temps réel", color: "bg-indigo-100 text-indigo-600" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((f, i) => (
        <div key={i} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl">
          <div className={`w-12 h-12 ${f.color} rounded-lg flex items-center justify-center mb-4 text-xl`}>
            {f.icon}
          </div>
          <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
          <p className="text-gray-600">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default FeaturesGrid;