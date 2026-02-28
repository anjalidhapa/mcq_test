import { Link } from "react-router-dom";

const Root = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-4">
          🎓 Student Examination Portal
        </h1>

        <p className="text-gray-700 text-center mb-6">
          A MERN Stack based online examination system with timed MCQ tests,
          result evaluation, and admin management.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Student Features */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-2 text-green-600">
              Student Features
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Student Registration & Login</li>
              <li>20 Random MCQ Questions</li>
              <li>5 Minutes Timed Test</li>
              <li>Auto Submit on Time Over</li>
              <li>Detailed Result with Correct / Wrong Answers</li>
            </ul>
          </div>

          {/* Admin Features */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-2 text-orange-500">
              Admin Features (Extra / In Progress)
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Admin Login</li>
              <li>View Student Results</li>
              <li>Add / Remove MCQ Questions</li>
              <li>Question Management Dashboard</li>
            </ul>
            <p className="text-sm text-red-500 mt-2">
              Admin panel is an extra feature and still under development.
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded text-center font-semibold"
          >
            Student Login
          </Link>

          <Link
            to="/admin/login"
            className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded text-center font-semibold"
          >
            Admin Login (Extra)
          </Link>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Built using MERN Stack (MongoDB, Express, React, Node.js)
        </p>
      </div>
    </div>
  );
};

export default Root;
