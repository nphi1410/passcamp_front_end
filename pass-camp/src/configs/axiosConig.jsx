import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true; // Set globally

axios.interceptors.request.use(
  (config) => {
    // Exclude the login request
    if (config.method !== "post" || config.url !== "/login") {
      config.headers["loggedInUser"] = sessionStorage.getItem("loggedInUser");
      config.headers["role"] = sessionStorage.getItem("role");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
