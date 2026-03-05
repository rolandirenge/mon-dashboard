import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext(null);

const MOCK_USERS = [
  { id: 1, nom: "Admin Principal", email: "admin@email.com", password: "admin123", role: "admin" },
  { id: 2, nom: "Secrétaire Marie", email: "secretary@email.com", password: "secretary123", role: "secretary" },
  { id: 3, nom: "Professeur Martin", email: "teacher@email.com", password: "teacher123", role: "teacher" },
  { id: 4, nom: "Étudiant Roland", email: "student@email.com", password: "student123", role: "student" },
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    
    const foundUser = MOCK_USERS.find(u => u.email === email && u.password === password);
    
    if (foundUser) {
      const { password, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      console.log('✅ Connexion réussie:', userWithoutPassword); // Debug
      setLoading(false);
      return { success: true, user: userWithoutPassword };
    } else {
      setError("Email ou mot de passe incorrect");
      setLoading(false);
      return { success: false, error: "Email ou mot de passe incorrect" };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    loading,
    error,
    login,
    logout,
    isAuthenticated: !!user,
    hasRole: (roles) => {
      if (!user) return false;
      return roles.includes(user.role);
    }
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};