import { FaInfoCircle, FaCheckCircle, FaExclamationTriangle, FaTimesCircle } from 'react-icons/fa';

function Alert({ type = 'info', message, onClose }) {
  const types = {
    info: { bg: 'bg-blue-50', border: 'border-blue-400', text: 'text-blue-700', icon: <FaInfoCircle className="text-blue-500" /> },
    success: { bg: 'bg-green-50', border: 'border-green-400', text: 'text-green-700', icon: <FaCheckCircle className="text-green-500" /> },
    warning: { bg: 'bg-yellow-50', border: 'border-yellow-400', text: 'text-yellow-700', icon: <FaExclamationTriangle className="text-yellow-500" /> },
    error: { bg: 'bg-red-50', border: 'border-red-400', text: 'text-red-700', icon: <FaTimesCircle className="text-red-500" /> }
  };
  const { bg, border, text, icon } = types[type];

  return (
    <div className={`${bg} border-l-4 ${border} p-4 rounded-lg flex items-start justify-between`}>
      <div className="flex items-start">
        <div className="mr-3 mt-0.5">{icon}</div>
        <p className={text}>{message}</p>
      </div>
      {onClose && <button onClick={onClose} className={text}><FaTimesCircle /></button>}
    </div>
  );
}
export default Alert;