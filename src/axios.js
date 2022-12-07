import axios from "axios";

const instance = axios.create({
  baseURL: "https://ecommapi.onrender.com",
});

export default instance;
