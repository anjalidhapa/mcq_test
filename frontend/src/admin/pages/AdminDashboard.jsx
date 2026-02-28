import { Link } from "react-router-dom";
import AdminNav from "../components/AdminNav.jsx";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNav />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            to="/admin/view-results"
            className="p-4 bg-blue-500 text-white rounded shadow text-center"
          >
            View Student Results
          </Link>
          <Link
            to="/admin/manage-questions"
            className="p-4 bg-green-500 text-white rounded shadow text-center"
          >
            Manage Questions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
