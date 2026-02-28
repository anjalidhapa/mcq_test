import axios from "axios";

const API = axios.create({
  baseURL: "https://mcq-test-b6ao.onrender.com/api/admin", // adjust backend URL
});

// Admin login
export const adminLogin = (data) => API.post("/login", data);

// Admin register
export const adminRegister = (data) => API.post("/register", data);

// Get all students results
export const getAllResults = () => API.get("/results");

// Add question
export const addQuestion = (data) => API.post("/questions", data);

// Remove question by ID
export const removeQuestion = (id) => API.delete(`/questions/${id}`);

export default API;
