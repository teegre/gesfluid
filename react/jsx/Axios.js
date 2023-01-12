import axios from "axios";

const ax = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});

// Catch unauthorized request and redirect if error
ax.interceptors.response.use((response) => response, (error) => {
  if (error.response.status === 401) {
    window.location = '/login';
  }
});

export default ax;
