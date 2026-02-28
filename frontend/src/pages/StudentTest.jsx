import { useState, useEffect } from "react";
import API from "../api/api.js";
import Button from "../components/Button.jsx";
import Timer from "../components/Timer.jsx";
import { useNavigate } from "react-router-dom";

const StudentTest = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await API.get("/test");
        setQuestions(res.data);
        setLoading(false);
      } catch (err) {
        alert(err.response?.data?.message || "Error fetching questions");
      }
    };
    fetchQuestions();
  }, []);

  // Handle answer selection
  const handleSelect = (qId, option) => {
    setAnswers({ ...answers, [qId]: option });
  };

  // Submit answers
  const handleSubmit = async () => {
    try {
      const studentId = localStorage.getItem("studentId");
      const answerArray = questions.map((q) => ({
        questionId: q._id,
        selectedOption: answers[q._id] || "",
      }));

      const res = await API.post("/test/submit", {
        studentId,
        answers: answerArray,
      });
      localStorage.setItem("latestResult", JSON.stringify(res.data));
      navigate("/result");
    } catch (err) {
      alert(err.response?.data?.message || "Error submitting test");
    }
  };

  if (loading) return <p className="text-center mt-20">Loading Questions...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Student Test</h1>
          <Timer initialMinutes={5} onTimeUp={handleSubmit} />
        </div>

        {questions.map((q, idx) => (
          <div key={q._id} className="bg-white p-4 mb-4 rounded shadow">
            <p className="font-semibold mb-2">
              {idx + 1}. {q.questionText}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {q.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect(q._id, option)}
                  className={`p-2 border rounded hover:bg-blue-100 text-left ${
                    answers[q._id] === option
                      ? "bg-blue-200 border-blue-400"
                      : "bg-white"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}

        <Button onClick={handleSubmit} className="mt-4 w-full">
          Submit Test
        </Button>
      </div>
    </div>
  );
};

export default StudentTest;
