export const ROLES = {
  ADMIN: 'admin',
  SECRETARY: 'secretary',
  TEACHER: 'teacher',
  STUDENT: 'student'
};

export const hasPermission = (user, requiredRoles) => {
  if (!user) return false;
  return requiredRoles.includes(user.role);
};

export const canManageStudents = (user) => {
  return [ROLES.ADMIN, ROLES.SECRETARY, ROLES.TEACHER].includes(user?.role);
};

export const canManageCourses = (user) => {
  return [ROLES.ADMIN, ROLES.SECRETARY].includes(user?.role);
};

export const canManageGrades = (user) => {
  return [ROLES.ADMIN, ROLES.SECRETARY, ROLES.TEACHER].includes(user?.role);
};