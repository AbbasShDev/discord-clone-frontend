import axios from "axios";

const apiService = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 60000,
});

apiService.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("user")).token
    }`;
  }
  return req;
});

apiService.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // Remove token and redirect
    if (error.response.status === 401) {
      localStorage.removeItem("user");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default apiService;
