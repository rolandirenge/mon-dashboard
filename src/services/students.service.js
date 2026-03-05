import api from './api';

const studentsService = {
  async getStudents() {
    try {
      const response = await api.get('/students/');
      return { success: true, students: response.data };
    } catch (error) {
      return { success: false, error: 'Erreur de chargement' };
    }
  },

  async getStudent(id) {
    try {
      const response = await api.get(`/students/${id}/`);
      return { success: true, student: response.data };
    } catch (error) {
      return { success: false, error: 'Erreur de chargement' };
    }
  },

  async createStudent(studentData) {
    try {
      const response = await api.post('/students/', studentData);
      return { success: true, student: response.data };
    } catch (error) {
      return { success: false, error: 'Erreur de création' };
    }
  },

  async updateStudent(id, studentData) {
    try {
      const response = await api.put(`/students/${id}/`, studentData);
      return { success: true, student: response.data };
    } catch (error) {
      return { success: false, error: 'Erreur de modification' };
    }
  },

  async deleteStudent(id) {
    try {
      await api.delete(`/students/${id}/`);
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Erreur de suppression' };
    }
  }
};

export default studentsService;