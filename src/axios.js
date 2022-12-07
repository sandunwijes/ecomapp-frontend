import axios from "axios";

const instance = axios.create({
  baseURL: "https://ecomapp-api-9sy1.onrender.com",
});

export default instance;
