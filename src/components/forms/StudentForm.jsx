import { useState } from 'react';
import Modal from '../common/Modal';
import Input from '../common/Input';
import Button from '../common/Button';

function StudentForm({ isOpen, onClose, student = null, onSave }) {
  const [formData, setFormData] = useState({
    nom: student?.nom || '',
    matricule: student?.matricule || '',
    promotion: student?.promotion || '',
    email: student?.email || '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={student ? 'Modifier' : 'Ajouter'}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input 
          label="Nom complet" 
          value={formData.nom} 
          onChange={(e) => setFormData({...formData, nom: e.target.value})}
          required 
        />
        <Input 
          label="Matricule" 
          value={formData.matricule} 
          onChange={(e) => setFormData({...formData, matricule: e.target.value})}
          required 
        />
        <Input 
          label="Promotion" 
          value={formData.promotion} 
          onChange={(e) => setFormData({...formData, promotion: e.target.value})}
          required 
        />
        <Input 
          label="Email" 
          type="email" 
          value={formData.email} 
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required 
        />
        <div className="flex justify-end space-x-3 pt-4">
          <Button type="button" variant="secondary" onClick={onClose}>Annuler</Button>
          <Button type="submit">{student ? 'Modifier' : 'Ajouter'}</Button>
        </div>
      </form>
    </Modal>
  );
}
export default StudentForm;