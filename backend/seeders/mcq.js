import mongoose from "mongoose";
import dotenv from "dotenv";
import Question from "../models/Question.js";
import connectDB from "../config/db.js";

// 50 MCQ list
const questions = [
  {
    questionText: "Which language is primarily used for web development?",
    options: ["Python", "C++", "JavaScript", "Java"],
    correctOption: "JavaScript",
  },
  {
    questionText: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "Hyperloop Machine Language",
      "None of the above",
    ],
    correctOption: "HyperText Markup Language",
  },
  {
    questionText: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "Python", "Java"],
    correctOption: "CSS",
  },
  {
    questionText: "Which language is used for backend web development?",
    options: ["CSS", "PHP", "HTML", "SQL"],
    correctOption: "PHP",
  },
  {
    questionText: "Which of the following is a JavaScript framework?",
    options: ["React", "Django", "Laravel", "Flask"],
    correctOption: "React",
  },
  {
    questionText: "Which operator is used for comparison in JavaScript?",
    options: ["=", "==", "===", "!="],
    correctOption: "===",
  },
  {
    questionText:
      "Which symbol is used for single-line comments in JavaScript?",
    options: ["//", "/* */", "#", "<!-- -->"],
    correctOption: "//",
  },
  {
    questionText: "Which of these is NOT a programming language?",
    options: ["Python", "HTML", "Java", "C++"],
    correctOption: "HTML",
  },
  {
    questionText: "Which language is used for Android app development?",
    options: ["Swift", "Java", "Ruby", "PHP"],
    correctOption: "Java",
  },
  {
    questionText: "Which of these is used to style a webpage?",
    options: ["Python", "CSS", "JavaScript", "SQL"],
    correctOption: "CSS",
  },
  {
    questionText: "Which of the following is a backend database?",
    options: ["MySQL", "React", "CSS", "HTML"],
    correctOption: "MySQL",
  },
  {
    questionText: "Which of the following is NOT a JavaScript data type?",
    options: ["String", "Number", "Boolean", "Character"],
    correctOption: "Character",
  },
  {
    questionText: "Which of these is a frontend framework?",
    options: ["Angular", "Node.js", "MongoDB", "Express"],
    correctOption: "Angular",
  },
  {
    questionText: "Which tag is used to create a hyperlink in HTML?",
    options: ["<a>", "<p>", "<link>", "<href>"],
    correctOption: "<a>",
  },
  {
    questionText: "Which keyword is used to define a constant in JavaScript?",
    options: ["var", "let", "const", "constant"],
    correctOption: "const",
  },
  {
    questionText:
      "Which of the following is used to declare a variable in JavaScript?",
    options: ["let", "var", "const", "All of the above"],
    correctOption: "All of the above",
  },
  {
    questionText:
      "Which method converts a JSON string into a JavaScript object?",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.toObject()",
      "JSON.convert()",
    ],
    correctOption: "JSON.parse()",
  },
  {
    questionText: "Which of these is NOT a relational database?",
    options: ["MySQL", "MongoDB", "PostgreSQL", "Oracle"],
    correctOption: "MongoDB",
  },
  {
    questionText: "Which of the following is a loop in programming?",
    options: ["for", "while", "do-while", "All of the above"],
    correctOption: "All of the above",
  },
  {
    questionText: "Which language is used for iOS app development?",
    options: ["Swift", "Java", "Kotlin", "Python"],
    correctOption: "Swift",
  },
  {
    questionText: "Which of these is a version control system?",
    options: ["Git", "Node.js", "React", "MongoDB"],
    correctOption: "Git",
  },
  {
    questionText:
      "Which method is used to add an element at the end of an array in JavaScript?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correctOption: "push()",
  },
  {
    questionText: "Which of these is used to create server-side applications?",
    options: ["Node.js", "React", "CSS", "HTML"],
    correctOption: "Node.js",
  },
  {
    questionText: "Which operator is used for logical AND in JavaScript?",
    options: ["&&", "||", "!", "&"],
    correctOption: "&&",
  },
  {
    questionText: "Which of the following is used to create a table in HTML?",
    options: ["<table>", "<tr>", "<td>", "<tab>"],
    correctOption: "<table>",
  },
  {
    questionText: "Which of the following is NOT a NoSQL database?",
    options: ["MongoDB", "Cassandra", "MySQL", "CouchDB"],
    correctOption: "MySQL",
  },
  {
    questionText: "Which of these is used for testing JavaScript code?",
    options: ["Jest", "React", "Node.js", "MongoDB"],
    correctOption: "Jest",
  },
  {
    questionText: "Which of these is a Python web framework?",
    options: ["Django", "React", "Angular", "Vue.js"],
    correctOption: "Django",
  },
  {
    questionText:
      "Which of the following is used to create an unordered list in HTML?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    correctOption: "<ul>",
  },
  {
    questionText:
      "Which method is used to remove the last element from an array in JavaScript?",
    options: ["pop()", "push()", "shift()", "unshift()"],
    correctOption: "pop()",
  },
  {
    questionText: "Which of these is a JavaScript runtime environment?",
    options: ["Node.js", "React", "Angular", "Vue.js"],
    correctOption: "Node.js",
  },
  {
    questionText:
      "Which of the following is used to create a dropdown in HTML?",
    options: ["<select>", "<option>", "<input>", "<dropdown>"],
    correctOption: "<select>",
  },
  {
    questionText: "Which of these is used to handle HTTP requests in Node.js?",
    options: ["Express.js", "React", "Angular", "Vue.js"],
    correctOption: "Express.js",
  },
  {
    questionText: "Which of these is a database query language?",
    options: ["SQL", "HTML", "CSS", "JavaScript"],
    correctOption: "SQL",
  },
  {
    questionText: "Which HTML tag is used for inserting an image?",
    options: ["<img>", "<picture>", "<image>", "<src>"],
    correctOption: "<img>",
  },
  {
    questionText:
      "Which of these is used for asynchronous programming in JavaScript?",
    options: ["Callbacks", "Promises", "Async/Await", "All of the above"],
    correctOption: "All of the above",
  },
  {
    questionText: "Which of these is a type of function in JavaScript?",
    options: [
      "Arrow Function",
      "Normal Function",
      "Anonymous Function",
      "All of the above",
    ],
    correctOption: "All of the above",
  },
  {
    questionText: "Which of these is a front-end library?",
    options: ["React", "Node.js", "Express.js", "MongoDB"],
    correctOption: "React",
  },
  {
    questionText: "Which of these is used to style elements inline in HTML?",
    options: ["style attribute", "class attribute", "id attribute", "link tag"],
    correctOption: "style attribute",
  },
  {
    questionText: "Which of these is used to create a comment in CSS?",
    options: ["/* comment */", "// comment", "# comment", "<!-- comment -->"],
    correctOption: "/* comment */",
  },
  {
    questionText: "Which of the following is a JavaScript package manager?",
    options: ["npm", "pip", "gem", "composer"],
    correctOption: "npm",
  },
  {
    questionText:
      "Which of the following is used to declare a function in JavaScript?",
    options: [
      "function myFunc(){}",
      "var myFunc = function(){}",
      "let myFunc = () => {}",
      "All of the above",
    ],
    correctOption: "All of the above",
  },
  {
    questionText: "Which HTML tag is used for headings?",
    options: ["<h1> to <h6>", "<p>", "<title>", "<head>"],
    correctOption: "<h1> to <h6>",
  },
  {
    questionText:
      "Which of these is used to execute a block of code multiple times?",
    options: ["Loop", "Function", "Array", "Object"],
    correctOption: "Loop",
  },
  {
    questionText:
      "Which language is used for Artificial Intelligence programming mostly?",
    options: ["Python", "C++", "PHP", "HTML"],
    correctOption: "Python",
  },
  {
    questionText: "Which HTML attribute is used to define inline styles?",
    options: ["style", "class", "id", "src"],
    correctOption: "style",
  },
  {
    questionText: "Which of these is NOT a JavaScript framework?",
    options: ["Laravel", "Angular", "React", "Vue.js"],
    correctOption: "Laravel",
  },
];

const seedQuestions = async () => {
  await connectDB();
  try {
    await Question.deleteMany(); // Clear existing questions
    await Question.insertMany(questions);
    console.log("50 Programming MCQs seeded successfully!");
    mongoose.connection.close();
  } catch (err) {
    console.error(err.message);
    mongoose.connection.close();
  }
};

export default seedQuestions;
