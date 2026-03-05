import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import authService from '../../services/auth.service';
import { validateEmail } from '../../utils/validators';
import Card from '../../components/common/Card';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) { toast.error('Email invalide'); return; }
    setLoading(true);
    const response = await authService.forgotPassword(email);
    setLoading(false);
    if (response.success) { setSubmitted(true); toast.success('Email envoyé !'); } 
    else { toast.error(response.error || 'Erreur'); }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center p-4">
        <Card className="max-w-md text-center text-white bg-white/10 backdrop-blur-lg border-white/20">
          <div className="text-6xl mb-4">📧</div>
          <h2 className="text-3xl font-bold mb-4">Email envoyé !</h2>
          <p className="text-white/80 mb-6">Si un compte existe, vous recevrez un email avec les instructions.</p>
          <Link to="/auth/login" className="text-white hover:underline">Retour à la connexion</Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center p-4">
      <Card className="max-w-md text-white bg-white/10 backdrop-blur-lg border-white/20">
        <h2 className="text-3xl font-bold text-center mb-8">Mot de passe oublié</h2>
        <p className="text-white/70 text-center mb-6">Entrez votre email pour recevoir les instructions.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="exemple@email.com" required />
          <Button type="submit" disabled={loading} fullWidth>{loading ? 'Envoi...' : 'Envoyer'}</Button>
        </form>
        <p className="text-center text-white/60 mt-4"><Link to="/auth/login" className="hover:underline">← Retour à la connexion</Link></p>
      </Card>
    </div>
  );
}
export default ForgotPassword;