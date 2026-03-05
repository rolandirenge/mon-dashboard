import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function StatsCounter({ stats, loading }) {
  const [ref, inView] = useInView({ triggerOnce: true });

  if (loading) {
    return <div className="text-center">Chargement...</div>;
  }

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="text-center">
        <div className="text-3xl font-bold text-blue-600">
          {inView ? <CountUp end={stats?.students_count || 1250} duration={2} /> : '0'}
        </div>
        <div className="text-gray-600">Étudiants</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-blue-600">
          {inView ? <CountUp end={stats?.teachers_count || 48} duration={2} /> : '0'}
        </div>
        <div className="text-gray-600">Enseignants</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-blue-600">
          {inView ? <CountUp end={stats?.courses_count || 156} duration={2} /> : '0'}
        </div>
        <div className="text-gray-600">Cours</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-blue-600">
          {inView ? <CountUp end={stats?.success_rate || 78} duration={2} suffix="%" /> : '0'}
        </div>
        <div className="text-gray-600">Taux réussite</div>
      </div>
    </div>
  );
}

export default StatsCounter;