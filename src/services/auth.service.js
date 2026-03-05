import api from './api';

const authService = {
  async login(email, password) {
    try {
      const response = await api.post('/auth/login/', { email, password });
      if (response.data.access) {
        localStorage.setItem('access_token', response.data.access);
        localStorage.setItem('refresh_token', response.data.refresh);
      }
      return { success: true, user: response.data.user };
    } catch (error) {
      return { success: false, error: error.response?.data?.detail || 'Erreur de connexion' };
    }
  },

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    return { success: true };
  },

  async forgotPassword(email) {
    try {
      await api.post('/auth/password-reset/', { email });
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Erreur lors de l\'envoi' };
    }
  },

  async resetPassword(token, password) {
    try {
      await api.post('/auth/password-reset/confirm/', { token, password });
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la réinitialisation' };
    }
  },

  async getProfile() {
    try {
      const response = await api.get('/auth/profile/');
      return { success: true, user: response.data };
    } catch (error) {
      return { success: false, error: 'Erreur de chargement' };
    }
  },

  async updateProfile(userData) {
    try {
      const response = await api.put('/auth/profile/', userData);
      return { success: true, user: response.data };
    } catch (error) {
      return { success: false, error: 'Erreur de mise à jour' };
    }
  },

  async getUsers() {
    try {
      const response = await api.get('/users/');
      return { success: true, users: response.data };
    } catch (error) {
      return { success: false, error: 'Erreur de chargement' };
    }
  },

  async createUser(userData) {
    try {
      const response = await api.post('/users/', userData);
      return { success: true, user: response.data };
    } catch (error) {
      return { success: false, error: 'Erreur de création' };
    }
  },

  async updateUser(id, userData) {
    try {
      const response = await api.put(`/users/${id}/`, userData);
      return { success: true, user: response.data };
    } catch (error) {
      return { success: false, error: 'Erreur de modification' };
    }
  },

  async deleteUser(id) {
    try {
      await api.delete(`/users/${id}/`);
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Erreur de suppression' };
    }
  }
};

export default authService;