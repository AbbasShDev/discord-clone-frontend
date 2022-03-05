import apiService from "../../api";

const register = async (userData) => {
  const response = await apiService.post("/api/auth/register", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const login = async (userData) => {
  const response = await apiService.post("/api/auth/login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const logout = async () => {
  const response = await apiService.post("/api/auth/logout");

  localStorage.removeItem("user");
  window.location.href = "/login";

  return response.data;
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
