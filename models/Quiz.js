import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  correctAnswer: String,
});

const quizSESchema = new mongoose.Schema(
  {
    type: {
      type: String, // balvikas or computer
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    questions: [questionSchema],
  },
  { timestamps: true }
);

const Quiz = mongoose.model("Quiz", quizSESchema);

export default Quiz;
