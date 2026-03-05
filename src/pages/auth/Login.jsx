import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(email, password);
    if (result.success) {
      navigate('/dashboard');
    }
  };

  // Comptes de test pour différents rôles
  const testAccounts = [
    { email: "admin@email.com", password: "admin123", role: "Admin", color: "purple" },
    { email: "secretary@email.com", password: "secretary123", role: "Secrétaire", color: "blue" },
    { email: "teacher@email.com", password: "teacher123", role: "Enseignant", color: "green" },
    { email: "student@email.com", password: "student123", role: "Étudiant", color: "orange" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-md border border-white/20">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Connexion</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white/80 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-white"
              placeholder="exemple@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-white/80 mb-2">Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-white"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 mt-6"
          >
            Se connecter
          </button>
        </form>

        {/* Comptes de test - choix rapide du rôle */}
        <div className="mt-6">
          <p className="text-white/60 text-sm text-center mb-3">
            🔑 Choisir un rôle de test :
          </p>
          <div className="grid grid-cols-2 gap-2">
            {testAccounts.map((acc, index) => (
              <button
                key={index}
                onClick={() => {
                  setEmail(acc.email);
                  setPassword(acc.password);
                }}
                className={`bg-${acc.color}-600/20 hover:bg-${acc.color}-600/40 text-white text-sm py-2 px-3 rounded-lg transition border border-white/10`}
              >
                {acc.role}
              </button>
            ))}
          </div>
        </div>

        <p className="text-center text-white/60 text-xs mt-4">
          ⚡ polytech-gei
        </p>
      </div>
    </div>
  );
}

export default Login;