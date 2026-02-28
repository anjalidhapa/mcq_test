import Question from "../models/Question.js";
import Student from "../models/Student.js";

export const getRandomTest = async (req, res) => {
  try {
    const allQuestions = await Question.find();
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    const questions = shuffled.slice(0, 20);
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const submitTest = async (req, res) => {
  const { studentId, answers } = req.body;
  try {
    const student = await Student.findOne({ studentId });
    if (!student) return res.status(400).json({ message: "Student not found" });

    let score = 0;

    const answerDetails = await Promise.all(
      answers.map(async (ans) => {
        const question = await Question.findById(ans.questionId);
        // const isCorrect = question.correctOption === ans.selectedOption;
        const isCorrect =
          question.correctOption.trim().toLowerCase() ===
          (ans.selectedOption || "").trim().toLowerCase();
        if (isCorrect) score++;

        return {
          questionId: question._id,
          questionText: question.questionText,
          options: question.options,
          correctOption: question.correctOption,
          selectedOption: ans.selectedOption,
          isCorrect,
        };
      }),
    );

    // Save result in student
    student.results.push({ score, answers: answerDetails });
    await student.save();

    // Return full details to frontend
    res.json({ score, answers: answerDetails });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
