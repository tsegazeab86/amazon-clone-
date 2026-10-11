import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  baseURL: "https://amazon-clone-oiq5.onrender.com", // የRender ላይ የተመረጠ አድራሻ
});

export default axiosInstance;