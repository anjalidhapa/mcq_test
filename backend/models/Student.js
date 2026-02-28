import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  username: { type: String, required: true },
  studentId: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  results: [
    {
      testId: { type: mongoose.Schema.Types.ObjectId },
      score: Number,
      answers: [
        {
          questionId: mongoose.Schema.Types.ObjectId,
          selectedOption: String,
          isCorrect: Boolean,
        },
      ],
      date: { type: Date, default: Date.now },
    },
  ],
});

export default mongoose.model("Student", studentSchema);
