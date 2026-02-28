import axios from "axios";

const API = axios.create({
  baseURL: "https://mcq-test-b6ao.onrender.com/api",
});

// Add token if exists
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
