import axios from "axios";

const API = axios.create({
  baseURL: "https://inventory-backend-harsh.onrender.com",
});

export default API;