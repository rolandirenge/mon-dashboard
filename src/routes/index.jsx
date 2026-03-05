import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Dashboard from '../pages/dashboard/Dashboard';
import Students from '../pages/students/Students';
import Courses from '../pages/courses/Courses';
import Grades from '../pages/grades/Grades';
import Transcripts from '../pages/transcripts/Transcripts';
import Notifications from '../pages/notifications/Notifications';
import Admin from '../pages/admin/Admin';
import Deliberations from '../pages/deliberations/Deliberations';
import Appeals from '../pages/appeals/Appeals';
const AppRoutes = () => {
  return (
    <Routes>
      {/* Routes publiques */}
      <Route path="/" element={<Home />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />

      {/* Routes privées */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/students" element={<Students />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/grades" element={<Grades />} />
      <Route path="/transcripts" element={<Transcripts />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/deliberations" element={<Deliberations />} />
      <Route path="/appeals" element={<Appeals />} />
    </Routes>
  );
};

export default AppRoutes;