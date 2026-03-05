import PublicNavbar from '../layout/PublicNavbar';
import PublicFooter from '../layout/PublicFooter';

function PublicHome() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PublicNavbar />
      
      <main>
        {/* Hero Section temporaire */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-6">
              Gérez votre parcours académique en toute simplicité
            </h1>
            <p className="text-xl mb-8">
              Suivez vos notes, gérez vos cours, accédez à vos documents officiels
            </p>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
}

export default PublicHome;