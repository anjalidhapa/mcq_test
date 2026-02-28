import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Student Pages (root src)
import StudentRegister from "./pages/StudentRegister.jsx";
import StudentLogin from "./pages/StudentLogin.jsx";
import StudentTest from "./pages/StudentTest.jsx";
import StudentResult from "./pages/StudentResult.jsx";

// Admin Pages
import AdminLogin from "./admin/pages/AdminLogin.jsx";
import AdminDashboard from "./admin/pages/AdminDashboard.jsx";
import ManageQuestions from "./admin/pages/ManageQuestions.jsx";
import ViewResults from "./admin/pages/ViewResults.jsx";
import Root from "./pages/Root.jsx";

// Protected Route to check if student is logged in
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

// Admin Protected Route
const AdminProtectedRoute = ({ children }) => {
  const adminToken = localStorage.getItem("adminToken");
  return adminToken ? children : <Navigate to="/admin/login" />;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          {/* Student Routes */}
          <Route path="/" element={<Root />} />
          <Route path="/register" element={<StudentRegister />} />
          <Route path="/login" element={<StudentLogin />} />
          <Route
            path="/test"
            element={
              <ProtectedRoute>
                <StudentTest />
              </ProtectedRoute>
            }
          />
          <Route
            path="/result"
            element={
              <ProtectedRoute>
                <StudentResult />
              </ProtectedRoute>
            }
          />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              <AdminProtectedRoute>
                <AdminDashboard />
              </AdminProtectedRoute>
            }
          />
          <Route
            path="/admin/manage-questions"
            element={
              <AdminProtectedRoute>
                <ManageQuestions />
              </AdminProtectedRoute>
            }
          />
          <Route
            path="/admin/view-results"
            element={
              <AdminProtectedRoute>
                <ViewResults />
              </AdminProtectedRoute>
            }
          />

          {/* Fallback route */}
          <Route
            path="*"
            element={
              <h1 className="text-center mt-20 text-2xl font-bold">
                404 - Page Not Found
              </h1>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
