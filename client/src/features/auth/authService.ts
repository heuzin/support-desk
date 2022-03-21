import axios from "axios";
import { User } from "../../models/User";

const API_URL = "/api/users";

const register = async (userData: User) => {
  const { data } = await axios.post<User>(API_URL, userData);

  if (data) {
    localStorage.setItem("user", JSON.stringify(data));
  }

  return data;
};

const login = async (userData: User) => {
  const { data } = await axios.post<User>(API_URL + "/login", userData);

  if (data) {
    localStorage.setItem("user", JSON.stringify(data));
  }

  return data;
};

const logout = () => localStorage.removeItem("user");

const authService = {
  register,
  logout,
  login,
};

export default authService;
