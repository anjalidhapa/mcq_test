import { useState } from "react";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";
import API from "../api/api.js";
import { useNavigate } from "react-router-dom";

const StudentRegister = () => {
  const [username, setUsername] = useState("");
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await API.post("/students/register", {
        username,
        studentId,
        password,
      });
      alert(res.data.message);
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Error registering");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Student Register
        </h1>
        <Input
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          label="Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleRegister} className="w-full">
          Register
        </Button>
      </div>
    </div>
  );
};

export default StudentRegister;
