import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import AppRoutes from './routes';
import { useAuth } from './hooks/useAuth';
import { useLocation } from 'react-router-dom';

function AppContent() {
  const { user } = useAuth();
  const location = useLocation();
  
  const publicPages = ['/', '/auth/login', '/auth/register'];
  const isPublicPage = publicPages.includes(location.pathname);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        {/* Sidebar - plus de fixed, juste flex */}
        {user && !isPublicPage && (
          <div className="w-64 flex-shrink-0">
            <Sidebar />
          </div>
        )}
        
        {/* Contenu principal - prend le reste de l'espace */}
        <main className={`flex-1 ${!user || isPublicPage ? 'w-full' : ''}`}>
          <div className="p-6">
            <AppRoutes />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <NotificationProvider>
            <AppContent />
          </NotificationProvider>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;