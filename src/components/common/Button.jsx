function Button({ children, onClick, type = 'button', variant = 'primary', size = 'md', disabled = false, fullWidth = false, icon = null }) {
  const baseClasses = "font-semibold rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white focus:ring-blue-500",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-500",
    danger: "bg-red-500 hover:bg-red-600 text-white focus:ring-red-500",
    success: "bg-green-500 hover:bg-green-600 text-white focus:ring-green-500",
    outline: "border-2 border-blue-500 text-blue-500 hover:bg-blue-50 focus:ring-blue-500"
  };

  const sizes = { sm: "px-3 py-1.5 text-sm", md: "px-4 py-2 text-base", lg: "px-6 py-3 text-lg" };
  const width = fullWidth ? "w-full" : "";

  return (
    <button type={type} onClick={onClick} disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${width} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
      {icon && <span className="mr-2">{icon}</span>}{children}
    </button>
  );
}
export default Button;