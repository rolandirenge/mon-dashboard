export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePassword = (password) => password.length >= 6;

export const validateName = (name) => name?.trim().length >= 2;

export const validatePhone = (phone) => {
  const re = /^\+?[0-9]{10,15}$/;
  return !phone || re.test(phone);
};