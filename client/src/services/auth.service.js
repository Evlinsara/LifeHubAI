import axios from "../api/axios";

export const registerUser = async (userData) => {
  const response = await axios.post("/auth/register", userData);
  return response.data;
};

export const loginUser = async (userData) => {
  console.log("Calling backend");
  console.log(userData);
  const response = await axios.post("/auth/login", userData);
  return response.data;
};

export const getCurrentUser = async () => {
  const response = await axios.get("/auth/me");
  return response.data;
};