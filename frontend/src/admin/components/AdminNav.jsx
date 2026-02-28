import { Link, useNavigate } from "react-router-dom";

const AdminNav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex space-x-4 font-semibold">
        <Link to="/admin/dashboard" className="hover:text-gray-300">
          Dashboard
        </Link>
        <Link to="/admin/manage-questions" className="hover:text-gray-300">
          Manage Questions
        </Link>
        <Link to="/admin/view-results" className="hover:text-gray-300">
          View Results
        </Link>
      </div>
      <button
        onClick={handleLogout}
        className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </nav>
  );
};

export default AdminNav;
