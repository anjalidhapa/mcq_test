import { useEffect, useState } from "react";
import API, { addQuestion, removeQuestion } from "../api/adminApi.js";
import Button from "../components/Button.jsx";

const ManageQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [questionText, setQuestionText] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctOption, setCorrectOption] = useState("");

  // Fetch all questions
  const fetchQuestions = async () => {
    const res = await API.get("/questions");
    setQuestions(res.data);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  // Add question
  const handleAdd = async () => {
    if (!questionText || options.some((o) => !o) || !correctOption)
      return alert("Fill all fields");
    await addQuestion({ questionText, options, correctOption });
    setQuestionText("");
    setOptions(["", "", "", ""]);
    setCorrectOption("");
    fetchQuestions();
  };

  // Delete question
  const handleDelete = async (id) => {
    await removeQuestion(id);
    fetchQuestions();
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Add New Question</h2>
      <input
        type="text"
        placeholder="Question Text"
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      {options.map((opt, idx) => (
        <input
          key={idx}
          type="text"
          placeholder={`Option ${idx + 1}`}
          value={opt}
          onChange={(e) => {
            const newOpts = [...options];
            newOpts[idx] = e.target.value;
            setOptions(newOpts);
          }}
          className="w-full p-2 mb-2 border rounded"
        />
      ))}
      <input
        type="text"
        placeholder="Correct Option (exact text)"
        value={correctOption}
        onChange={(e) => setCorrectOption(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <Button onClick={handleAdd} className="mb-4">
        Add Question
      </Button>

      <h2 className="text-xl font-bold mb-2">Existing Questions</h2>
      <div className="space-y-2">
        {questions.map((q) => (
          <div
            key={q._id}
            className="p-2 border rounded flex justify-between items-center"
          >
            <span>{q.questionText}</span>
            <Button onClick={() => handleDelete(q._id)} className="bg-red-500">
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageQuestions;
