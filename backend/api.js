import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Update if hosted differently
});

export default API;
