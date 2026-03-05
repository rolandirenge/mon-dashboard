const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

let MOCK_USERS = [
  { id: 1, nom: "Admin User", email: "admin@email.com", password: "admin123", role: "admin", telephone: "+243 812 345 678" },
  { id: 2, nom: "Jean Dupont", email: "jean@email.com", password: "password", role: "student", telephone: "+243 823 456 789" },
  { id: 3, nom: "Professeur Martin", email: "martin@email.com", password: "password", role: "teacher", telephone: "+243 834 567 890" }
];

const api = {
  post: async (url, data) => {
    await delay(500);
    if (url === '/auth/login/') {
      const user = MOCK_USERS.find(u => u.email === data.email && u.password === data.password);
      if (user) {
        const { password, ...userWithoutPassword } = user;
        return { data: { access: 'fake-token', refresh: 'fake-refresh', user: userWithoutPassword } };
      }
      throw { response: { status: 401, data: { detail: 'Identifiants incorrects' } } };
    }
    if (url === '/auth/password-reset/') return { data: { message: 'Email envoyé' } };
    if (url === '/users/') return { data: MOCK_USERS.map(({ password, ...u }) => u) };
    return { data: {} };
  },
  get: async (url) => {
    await delay(300);
    if (url === '/auth/profile/') {
      const { password, ...user } = MOCK_USERS[0];
      return { data: user };
    }
    if (url === '/users/') return { data: MOCK_USERS.map(({ password, ...u }) => u) };
    return { data: {} };
  },
  put: async (url, data) => {
    await delay(400);
    return { data };
  },
  delete: async (url) => {
    await delay(400);
    return { data: {} };
  }
};

export default api;