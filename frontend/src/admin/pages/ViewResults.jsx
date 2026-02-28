import { useEffect, useState } from "react";
import API from "../api/adminApi.js";

const ViewResults = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const res = await API.get("/results");
      setStudents(res.data);
    };
    fetchResults();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Student Results</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border">
          <thead>
            <tr>
              <th className="border p-2">Student ID</th>
              <th className="border p-2">Score</th>
              <th className="border p-2">Total Questions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s._id}>
                <td className="border p-2">{s.studentId}</td>
                <td className="border p-2">{s.results?.slice(-1)[0]?.score}</td>
                <td className="border p-2">
                  {s.results?.slice(-1)[0]?.answers.length}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewResults;
