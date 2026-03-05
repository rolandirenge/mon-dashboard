export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('fr-FR', {
    day: '2-digit', month: '2-digit', year: 'numeric'
  });
};

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('fr-CD', {
    style: 'currency', currency: 'CDF', minimumFractionDigits: 0
  }).format(amount);
};

export const formatPhone = (phone) => {
  if (!phone) return '';
  return phone.replace(/(\+243)(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4');
};