import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Input({ label, type = 'text', value, onChange, placeholder, error, required = false, disabled = false, icon = null }) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="space-y-1">
      {label && <label className="block text-sm font-medium text-gray-700">{label} {required && <span className="text-red-500">*</span>}</label>}
      <div className="relative">
        {icon && <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">{icon}</div>}
        <input type={inputType} value={value} onChange={onChange} placeholder={placeholder} disabled={disabled} required={required}
          className={`w-full px-4 py-2 rounded-lg border ${icon ? 'pl-10' : ''} ${isPassword ? 'pr-12' : ''} 
          ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'} 
          focus:outline-none focus:ring-2 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed`}/>
        {isPassword && (
          <button type="button" onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}
export default Input;