import { useEffect, useState } from "react";
import Button from "../components/Button.jsx";
import { useNavigate } from "react-router-dom";

const StudentResult = () => {
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const latest = localStorage.getItem("latestResult");
    if (latest) {
      setResult(JSON.parse(latest));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  if (!result) return <p className="text-center mt-20">Loading Result...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Your Test Result</h1>
        <p className="text-lg font-semibold mb-4">
          Score: {result.score} / {result.answers.length}
        </p>

        <div className="space-y-4">
          {result.answers.map((a, idx) => (
            <div key={a.questionId} className="p-4 border rounded bg-gray-50">
              <p className="font-semibold mb-2">
                {idx + 1}. {a.questionText}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {a.options.map((option) => {
                  let bgColor = "bg-white";

                  if (option === a.correctOption)
                    bgColor = "bg-green-100 border-green-400 border";
                  else if (option === a.selectedOption && !a.isCorrect)
                    bgColor = "bg-red-100 border-red-400 border";

                  return (
                    <div key={option} className={`p-2 rounded ${bgColor}`}>
                      {option}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <Button onClick={() => navigate("/login")} className="mt-4 w-full">
          Back to Login
        </Button>
      </div>
    </div>
  );
};

export default StudentResult;
