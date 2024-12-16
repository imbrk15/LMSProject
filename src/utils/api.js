import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000/api" });

// Fetch all users
export const fetchUsers = async () => {
  const response = await API.get("/users");
  return response.data;
};

// Add a new user
export const addUser = async (user) => {
  const response = await API.post("/users", user);
  return response.data;
};
