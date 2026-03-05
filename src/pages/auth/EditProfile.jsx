import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { validateEmail, validateName } from '../../utils/validators';
import { toast } from 'react-hot-toast';
import Card from '../../components/common/Card';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

function EditProfile() {
  const { user, updateProfile } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ nom: user?.nom || '', email: user?.email || '', telephone: user?.telephone || '' });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!validateName(formData.nom)) newErrors.nom = 'Le nom doit contenir au moins 2 caractères';
    if (!validateEmail(formData.email)) newErrors.email = 'Email invalide';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    const result = await updateProfile(formData);
    setLoading(false);
    if (result.success) { toast.success('Profil mis à jour'); navigate('/auth/profile'); } 
    else { toast.error(result.error || 'Erreur'); }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <Card title="Modifier le profil">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input label="Nom complet" value={formData.nom} onChange={(e) => setFormData({...formData, nom: e.target.value})} error={errors.nom} required />
            <Input label="Email" type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} error={errors.email} required />
            <Input label="Téléphone (optionnel)" value={formData.telephone} onChange={(e) => setFormData({...formData, telephone: e.target.value})} placeholder="+243 XXX XXX XXX" />
            <div className="flex space-x-4">
              <Button type="submit" disabled={loading}>{loading ? 'Enregistrement...' : 'Enregistrer'}</Button>
              <Button type="button" variant="secondary" onClick={() => navigate('/auth/profile')}>Annuler</Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
export default EditProfile;