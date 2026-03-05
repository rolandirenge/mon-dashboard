import { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaPlus, FaSearch } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import authService from '../../services/auth.service';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import Modal from '../../components/common/Modal';
import Input from '../../components/common/Input';

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({ nom: '', email: '', role: 'student', telephone: '' });

  useEffect(() => { loadUsers(); }, []);

  const loadUsers = async () => {
    setLoading(true);
    const response = await authService.getUsers();
    if (response.success) setUsers(response.users);
    else toast.error('Erreur de chargement');
    setLoading(false);
  };

  const handleDelete = async (userId, userNom) => {
    if (window.confirm(`Supprimer ${userNom} ?`)) {
      const response = await authService.deleteUser(userId);
      if (response.success) { toast.success('Utilisateur supprimé'); loadUsers(); } 
      else { toast.error('Erreur'); }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response;
    if (editingUser) response = await authService.updateUser(editingUser.id, formData);
    else response = await authService.createUser(formData);
    
    if (response.success) {
      toast.success(editingUser ? 'Utilisateur modifié' : 'Utilisateur créé');
      setShowModal(false);
      setEditingUser(null);
      setFormData({ nom: '', email: '', role: 'student', telephone: '' });
      loadUsers();
    } else { toast.error('Erreur'); }
  };

  const filteredUsers = users.filter(user =>
    user.nom?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRoleBadgeColor = (role) => {
    switch(role) {
      case 'admin': return 'bg-purple-100 text-purple-800';
      case 'teacher': return 'bg-blue-100 text-blue-800';
      case 'secretary': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-8">
      <Card title="Gestion des utilisateurs" subtitle="Administration des comptes">
        <div className="flex justify-between items-center mb-6">
          <div className="relative flex-1 max-w-md">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input type="text" placeholder="Rechercher..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
          </div>
          <Button onClick={() => { setEditingUser(null); setFormData({ nom: '', email: '', role: 'student', telephone: '' }); setShowModal(true); }}>
            <FaPlus className="mr-2" /> Nouvel utilisateur
          </Button>
        </div>

        {loading ? <div className="text-center py-12"><Spinner /></div> : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr><th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nom</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rôle</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th></tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">{user.nom}</td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getRoleBadgeColor(user.role)}`}>{user.role}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-3">
                        <button onClick={() => { setEditingUser(user); setFormData(user); setShowModal(true); }} className="text-blue-600 hover:text-blue-900"><FaEdit /></button>
                        <button onClick={() => handleDelete(user.id, user.nom)} className="text-red-600 hover:text-red-900"><FaTrash /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title={editingUser ? 'Modifier' : 'Ajouter'} size="md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input label="Nom" value={formData.nom} onChange={(e) => setFormData({...formData, nom: e.target.value})} required />
          <Input label="Email" type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
          <Input label="Téléphone" value={formData.telephone} onChange={(e) => setFormData({...formData, telephone: e.target.value})} />
          <div><label className="block text-sm font-medium text-gray-700 mb-1">Rôle</label>
            <select value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
              <option value="student">Étudiant</option><option value="teacher">Enseignant</option>
              <option value="secretary">Secrétaire</option><option value="admin">Admin</option>
            </select>
          </div>
          {!editingUser && <Input label="Mot de passe" type="password" value={formData.password || ''} onChange={(e) => setFormData({...formData, password: e.target.value})} required />}
          <div className="flex justify-end space-x-3 pt-4">
            <Button type="button" variant="secondary" onClick={() => setShowModal(false)}>Annuler</Button>
            <Button type="submit">{editingUser ? 'Modifier' : 'Créer'}</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
export default UserManagement;